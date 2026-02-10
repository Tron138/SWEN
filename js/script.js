/* Fahrschule Pro - Final Engine */

const CONFIG = {
    password: "M106",
    storageKey: "fahrschule_data_final_v1"
};

/* Standard-Datenstruktur */
const defaultData = {
    auth: { isLoggedIn: false },
    settings: { activeChapters: [1, 2, 3, 4, 5] },
    stats: { 
        currentStreak: 0, 
        maxStreak: 0, 
        examsTaken: 0, 
        examsPassed: 0,
        totalLearned: 0 
    },
    // Hier speichern wir den Status jeder einzelnen Frage (ID -> Status)
    progress: {} 
};

const app = {
    data: null,
    
    // Session State (wird nicht gespeichert, nur für aktuelle Runde)
    session: {
        mode: null,          // 'themen', 'random', 'exam'
        queue: [],           // Liste der Fragen-IDs, die noch kommen
        currentQuestionIndex: 0,
        currentQuestionId: null,
        currentAnswers: [],  // Die gemischten Antworten
        correctCount: 0,     // Für Prüfung
        isResolved: false    // Wurde aufgelöst?
    },

    /* --- 1. INITIALISIERUNG --- */
    init: function() {
        this.loadData();
        
        // Event Listeners
        document.getElementById('btn-login').addEventListener('click', () => this.handleLogin());
        document.getElementById('btn-reset').addEventListener('click', () => this.hardReset());
        document.getElementById('btn-action').addEventListener('click', () => this.handleActionClick());
        
        // Navigation Logik
        if (this.data.auth.isLoggedIn) {
            this.showScreen('view-dashboard');
            this.updateDashboardStats();
        } else {
            this.showScreen('view-login');
        }
    },

    loadData: function() {
        const stored = localStorage.getItem(CONFIG.storageKey);
        this.data = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultData));
    },

    saveData: function() {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(this.data));
    },

    /* --- 2. MODI STARTEN --- */
    
    startMode: function(mode) {
        this.session.mode = mode;
        this.session.currentQuestionIndex = 0;
        this.session.correctCount = 0;
        
        // FRAGEN-QUEUE ERSTELLEN
        let pool = [];

        if (mode === 'themen') {
            // Nur Fragen aus aktiven Kapiteln
            pool = questionsData.filter(q => this.data.settings.activeChapters.includes(q.chapter));
            // Sortierung: Zuerst Wiederholungen (Status 'repeat'), dann Neue
            pool.sort((a, b) => {
                const statA = this.getQuestionStatus(a.id);
                const statB = this.getQuestionStatus(b.id);
                if (statA === 'repeat' && statB !== 'repeat') return -1;
                if (statA !== 'repeat' && statB === 'repeat') return 1;
                return 0; // Sonst egal
            });
        } 
        else if (mode === 'random') {
            // Alle Fragen, komplett gemischt
            pool = [...questionsData].sort(() => 0.5 - Math.random());
        } 
        else if (mode === 'exam') {
            // Exakt 20 zufällige Fragen
            pool = [...questionsData].sort(() => 0.5 - Math.random()).slice(0, 20);
        }

        if (pool.length === 0) {
            alert("Keine Fragen gefunden! Bitte Kapitel in Einstellungen aktivieren.");
            return;
        }

        // IDs in die Queue laden
        this.session.queue = pool.map(q => q.id);

        // UI Vorbereiten
        this.showScreen('view-learn');
        
        // Header Infos anpassen
        const titleMap = {'themen': 'Lernen', 'random': 'Zufall', 'exam': 'Prüfung'};
        document.getElementById('current-chapter').innerText = titleMap[mode];
        
        // Im Prüfungsmodus die Streak und Erklärung ausblenden
        if (mode === 'exam') {
            document.querySelector('.streak-pill').classList.add('hidden');
        } else {
            document.querySelector('.streak-pill').classList.remove('hidden');
        }

        this.loadNextQuestion();
    },

    /* --- 3. FRAGE LADEN & ANZEIGEN --- */

    loadNextQuestion: function() {
        // Check: Sind wir fertig?
        if (this.session.currentQuestionIndex >= this.session.queue.length) {
            this.finishSession();
            return;
        }

        // Reset UI
        this.session.isResolved = false;
        document.getElementById('explanation-area').classList.add('hidden');
        document.getElementById('btn-action').innerText = (this.session.mode === 'exam') ? "Nächste Frage" : "Auflösen";
        document.getElementById('btn-action').classList.remove('btn-next');
        document.getElementById('answers-grid').innerHTML = "";

        // Frage Daten holen
        const qId = this.session.queue[this.session.currentQuestionIndex];
        this.session.currentQuestionId = qId;
        const questionObj = questionsData.find(q => q.id === qId);

        // UI Updates (Counters oben)
        this.updateTopBarStats();
        this.updateStreakUI();

        // Frage Text & Bild
        document.getElementById('question-text').innerText = questionObj.text;
        const imgContainer = document.getElementById('question-image');
        if(questionObj.image) {
            imgContainer.innerHTML = `<img src="assets/${questionObj.image}" style="max-width:100%; border-radius:12px;">`;
            imgContainer.classList.remove('hidden');
        } else {
            imgContainer.classList.add('hidden');
        }

        // ANTWORTEN MISCHEN (Pool Logik)
        // Wir nehmen 1 Richtige und 3 Falsche aus dem Pool
        const correct = questionObj.answersPool.filter(a => a.isCorrect);
        const wrong = questionObj.answersPool.filter(a => !a.isCorrect);
        
        // Zufallsauswahl
        const selectedCorrect = correct[Math.floor(Math.random() * correct.length)];
        // 3 zufällige Falsche
        const selectedWrong = wrong.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        // Zusammenfügen und Mischen
        let mix = [selectedCorrect, ...selectedWrong];
        this.session.currentAnswers = mix.sort(() => 0.5 - Math.random());

        // Buttons rendern
        const grid = document.getElementById('answers-grid');
        this.session.currentAnswers.forEach((ans, idx) => {
            const btn = document.createElement('div');
            btn.className = 'answer-card';
            btn.innerHTML = `<span>${ans.text}</span>`; // Span für Flexbox
            
            // Im Prüfungsmodus darf man Auswahl ändern, im Lernmodus auch, bis aufgelöst
            btn.onclick = () => this.toggleAnswer(idx, btn);
            grid.appendChild(btn);
        });
    },

    toggleAnswer: function(index, btn) {
        if (this.session.isResolved) return; // Gesperrt nach Auflösung

        // Single Choice Logik (Eine an, alle anderen aus)
        document.querySelectorAll('.answer-card').forEach(c => c.classList.remove('selected'));
        btn.classList.add('selected');
    },

    /* --- 4. AKTION: AUFLÖSEN / WEITER --- */

    handleActionClick: function() {
        // Fall A: Wir sind im Lern-Modus und noch nicht aufgelöst
        if (this.session.mode !== 'exam' && !this.session.isResolved) {
            this.resolveQuestion();
        } 
        // Fall B: Wir sind im Prüfungs-Modus (einfach weiter, im Hintergrund speichern)
        else if (this.session.mode === 'exam') {
            this.saveExamAnswer(); // Nur loggen
            this.session.currentQuestionIndex++;
            this.loadNextQuestion();
        }
        // Fall C: Lern-Modus, bereits aufgelöst -> Nächste Frage
        else {
            this.session.currentQuestionIndex++;
            this.loadNextQuestion();
        }
    },

    resolveQuestion: function() {
        const cards = document.querySelectorAll('.answer-card');
        const selectedIndex = Array.from(cards).findIndex(c => c.classList.contains('selected'));

        if (selectedIndex === -1) {
            alert("Bitte eine Antwort wählen!");
            return;
        }

        const isCorrect = this.session.currentAnswers[selectedIndex].isCorrect;
        const qId = this.session.currentQuestionId;

        // Visuelles Feedback
        cards.forEach((card, idx) => {
            if (this.session.currentAnswers[idx].isCorrect) {
                card.classList.add('correct'); // Zeige immer die Richtige grün an
            } else if (idx === selectedIndex && !isCorrect) {
                card.classList.add('wrong'); // Zeige Fehler rot an
            }
        });

        // Erklärung anzeigen
        const qObj = questionsData.find(q => q.id === qId);
        document.getElementById('explanation-text').innerText = qObj.explanation;
        document.getElementById('explanation-area').classList.remove('hidden');

        // STATE UPDATE (Lerneffekt)
        if (isCorrect) {
            // Wenn richtig: Status auf 'learned'
            this.data.progress[qId] = 'learned';
            this.data.stats.currentStreak++;
            if(this.data.stats.currentStreak > this.data.stats.maxStreak) {
                this.data.stats.maxStreak = this.data.stats.currentStreak;
            }
            this.data.stats.totalLearned++;
        } else {
            // Wenn falsch: Status auf 'repeat'
            this.data.progress[qId] = 'repeat';
            this.data.stats.currentStreak = 0;
        }
        
        this.saveData();
        this.updateStreakUI();
        this.updateTopBarStats(); // Sofort aktualisieren

        // Button ändern
        this.session.isResolved = true;
        document.getElementById('btn-action').innerText = "Weiter";
        document.getElementById('btn-action').classList.add('btn-next');
    },

    saveExamAnswer: function() {
        // Prüfungslogik: Wir zeigen nicht ob es richtig war, zählen nur intern
        const cards = document.querySelectorAll('.answer-card');
        const selectedIndex = Array.from(cards).findIndex(c => c.classList.contains('selected'));
        
        if (selectedIndex !== -1) {
            if (this.session.currentAnswers[selectedIndex].isCorrect) {
                this.session.correctCount++;
            }
        }
    },

    finishSession: function() {
        if (this.session.mode === 'exam') {
            // Prüfungs-Auswertung
            const score = this.session.correctCount;
            const total = 20;
            const percent = (score / total) * 100;
            const passed = percent >= 50; // Note 4,0 Hürde

            this.data.stats.examsTaken++;
            if (passed) this.data.stats.examsPassed++;
            this.saveData();

            alert(`Prüfung beendet!\n\nErgebnis: ${score} von ${total} Punkten (${percent}%)\nNote: ${this.calculateGrade(percent)}\n\n${passed ? "BESTANDEN! 🎉" : "DURCHGEFALLEN ❌"}`);
        } else {
            alert("Alle Fragen für diese Session erledigt! Gut gemacht.");
        }
        this.goHome();
    },

    /* --- 5. HELPER & UI --- */

    getQuestionStatus: function(id) {
        return this.data.progress[id] || 'new';
    },

    updateTopBarStats: function() {
        // Zählt live die Status der Fragen in der Queue
        let countNew = 0;
        let countRepeat = 0;
        let countLearned = 0;

        // Wir schauen uns alle Fragen an, die zur Auswahl stehen (oder in der Queue sind)
        // Einfacher: Wir zählen globale Stats für das Dashboard oder lokale für Session
        // Hier: Globale Stats basierend auf dem Speicher
        
        for (const [key, value] of Object.entries(this.data.progress)) {
            if (value === 'repeat') countRepeat++;
            if (value === 'learned') countLearned++;
        }
        // Neu = Gesamt - (Repeat + Learned)
        // Das ist etwas komplexer, wir simulieren es hier visuell für die Session
        
        // Update die Elemente im HTML (Lern-Screen Navbar)
        // Wir müssen diese Elemente erst im HTML einfügen, siehe unten!
        // Da du sagtest "Oben die Sachen sind nicht da", fügen wir sie dynamisch in die Navbar ein oder nutzen existierende
        
        // Da wir im HTML von vorhin keine expliziten Counter IDs hatten, müssen wir improvisieren 
        // oder du fügst sie im HTML hinzu. Ich nutze hier existierende IDs aus dem Konzept.
        
        // Falls IDs existieren (aus dem V2 HTML):
        if(document.getElementById('stat-learned')) {
            document.getElementById('stat-learned').innerText = countLearned;
        }
    },

    updateStreakUI: function() {
        const el = document.getElementById('streak-count-learn');
        if(el) el.innerText = this.data.stats.currentStreak;
    },

    updateDashboardStats: function() {
        document.getElementById('stat-max-streak').innerText = this.data.stats.maxStreak;
        document.getElementById('stat-exams').innerText = `${this.data.stats.examsPassed} / ${this.data.stats.examsTaken}`;
        document.getElementById('stat-learned').innerText = this.data.stats.totalLearned;
    },

    calculateGrade: function(percent) {
        if (percent < 50) return "5,0";
        // Lineare Interpolation zwischen 50% (4.0) und 100% (1.0)
        // Einfache Formel
        if (percent >= 95) return "1,0";
        if (percent >= 90) return "1,3";
        if (percent >= 85) return "1,7";
        if (percent >= 80) return "2,0";
        if (percent >= 75) return "2,3";
        if (percent >= 70) return "2,7";
        if (percent >= 65) return "3,0";
        if (percent >= 60) return "3,3";
        if (percent >= 55) return "3,7";
        return "4,0";
    },

    /* --- NAV & SYSTEM --- */
    
    showScreen: function(screenId) {
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        setTimeout(() => {
            document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
            const t = document.getElementById(screenId);
            t.classList.remove('hidden');
            setTimeout(() => t.classList.add('active'), 50);
        }, 100);
        
        if(screenId === 'view-settings') this.renderSettings();
        if(screenId === 'view-dashboard') this.updateDashboardStats();
    },

    handleLogin: function() {
        const inp = document.getElementById('login-password');
        if (inp.value === CONFIG.password) {
            this.data.auth.isLoggedIn = true;
            this.saveData();
            this.showScreen('view-dashboard');
        } else {
            document.getElementById('login-error').classList.remove('hidden');
        }
    },

    hardReset: function() {
        if(confirm("Alles löschen?")) {
            localStorage.removeItem(CONFIG.storageKey);
            location.reload();
        }
    },
    
    goHome: function() {
        this.showScreen('view-dashboard');
    },
    
    showStats: function() {
        this.showScreen('view-stats');
    },
    
    closeSettings: function() {
        const cbs = document.querySelectorAll('#chapter-list input');
        const active = [];
        cbs.forEach(cb => { if(cb.checked) active.push(parseInt(cb.value)); });
        this.data.settings.activeChapters = active;
        this.saveData();
        this.goHome();
    },
    
    renderSettings: function() {
        const l = document.getElementById('chapter-list');
        l.innerHTML = "";
        [1,2,3,4,5].forEach(c => {
            const chk = this.data.settings.activeChapters.includes(c) ? 'checked' : '';
            l.innerHTML += `<label><input type="checkbox" value="${c}" ${chk}><span>Kapitel ${c}</span></label>`;
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());