/* js/engine.js - Final Master Engine */

// 1. Sicherheits-Check
Core.checkAuth();

// 2. Modus aus URL lesen
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode') || 'themen'; // Default

// 3. Session Variablen
let queue = [];              // Die Warteschlange der Fragen
let currentIndex = 0;        // Wo sind wir gerade?
let currentQuestion = null;  // Aktuelles Frage-Objekt
let currentAnswers = [];     // Die 4 Antwort-Optionen (gemischt)
let isResolved = false;      // Wurde schon "Auflösen" geklickt?
let examCorrectCount = 0;    // Zähler für Prüfung (Note)
let sessionWrongCount = 0;   // Zähler für Totenkopf (Session Fehler)

// 4. UI Initialisierung
const titleMap = {
    'themen': 'THEMEN', 
    'random': 'ZUFALL', 
    'exam': 'PRÜFUNG'
};
document.getElementById('mode-display').innerText = titleMap[mode];

// Je nach Modus Elemente verstecken/zeigen
if (mode === 'exam') {
    // Prüfung: Keine Spoiler!
    document.getElementById('stats-bar').classList.add('hidden');
    document.getElementById('streak-display').classList.add('hidden');
    // Kapitel-Info bleibt an (Wunsch), aber Countdown kommt weg (via CSS Klasse oder Logik unten)
} 

// Engine Starten
startSession();

/* --- LOGIK: SESSION STARTEN --- */
function startSession() {
    let pool = [];

    if (mode === 'themen') {
        // SCHRITT 1: Basis sind alle aktiven Kapitel
        const activeChapters = Core.data.settings.activeChapters;
        const rawPool = questionsData.filter(q => activeChapters.includes(q.chapter));

        // SCHRITT 2: Sortieren nach Status
        const urgent = rawPool.filter(q => Core.data.progress[q.id] === 'repeat'); // Rot
        const fresh = rawPool.filter(q => !Core.data.progress[q.id] || Core.data.progress[q.id] === 'new'); // Grau (Neu)
        const learned = rawPool.filter(q => Core.data.progress[q.id] === 'learned'); // Grün

        // SCHRITT 3: Refresher-Logik (Das hat gefehlt!)
        // Wir nehmen maximal 20% der gelernten Fragen dazu, um sie zu festigen.
        // Aber mindestens 3, damit immer bisschen was kommt (wenn vorhanden).
        learned.sort(() => 0.5 - Math.random()); // Mischen
        const refresherCount = Math.max(3, Math.floor(learned.length * 0.2)); 
        const refreshers = learned.slice(0, refresherCount);

        // SCHRITT 4: Alles zusammenfügen
        pool = [...urgent, ...fresh, ...refreshers];

        // SCHRITT 5: Intelligente Sortierung
        // A) Nach Kapitel aufsteigend (1 -> 2 -> 3)
        // B) Innerhalb Kapitel: Erst Fehler, dann Neue, dann Refresher
        pool.sort((a, b) => {
            if (a.chapter !== b.chapter) return a.chapter - b.chapter;
            
            // Status Gewichtung: Repeat(1) < New(2) < Learned(3)
            const getWeight = (id) => {
                const s = Core.data.progress[id];
                if (s === 'repeat') return 1;
                if (s === 'learned') return 3;
                return 2; // New/Undefined
            };
            return getWeight(a.id) - getWeight(b.id);
        });

    } else if (mode === 'random') {
        // Einfach alles mischen
        pool = [...questionsData].sort(() => 0.5 - Math.random());

    } else if (mode === 'exam') {
        // 20 zufällige Fragen
        pool = [...questionsData].sort(() => 0.5 - Math.random()).slice(0, 20);
    }

    // Leerer Pool Check
    if (pool.length === 0) {
        if (mode === 'themen') {
            alert("Wow! Du hast absolut alles gelernt! 🎉\nEs gibt nichts mehr zu tun.");
        } else {
            alert("Keine Fragen verfügbar. Bitte Einstellungen prüfen.");
        }
        window.location.href = 'dashboard.html';
        return;
    }

    queue = pool;
    loadQuestion();
}

/* --- LOGIK: UI UPDATES --- */
function updateUI() {
    // 1. Fortschrittsbalken (Oben)
    const percent = ((currentIndex) / queue.length) * 100;
    document.getElementById('progress-bar').style.width = percent + "%";

    // 2. Streak Anzeige
    document.getElementById('streak-count').innerText = Core.data.stats.currentStreak;

    // 3. Stats Icons (Nicht in Prüfung)
    if(mode !== 'exam') {
        // Offen: Queue minus aktueller Index
        document.getElementById('count-open').innerText = queue.length - currentIndex;
        
        // Falsch (Session): Totenkopf
        document.getElementById('count-wrong').innerText = sessionWrongCount;

        // Wiederholen (Global):
        let repeatCount = 0;
        for(let k in Core.data.progress) { if(Core.data.progress[k] === 'repeat') repeatCount++; }
        document.getElementById('count-repeat').innerText = repeatCount;

        // Gelernt (Global):
        document.getElementById('count-learned').innerText = Core.data.stats.totalLearned;
    }

    // 4. Kapitel Info (Oben Links)
    if (currentQuestion) {
        document.getElementById('chap-num').innerText = currentQuestion.chapter;

        // "Noch X" Anzeige nur bei Themen
        const extraInfo = document.getElementById('chap-extra-info');
        if (mode === 'themen') {
            extraInfo.classList.remove('hidden');
            
            // Zählen: Wie viele im aktuellen Kapitel sind noch in der Queue?
            let remainingInChapter = 0;
            for (let i = currentIndex; i < queue.length; i++) {
                if (queue[i].chapter === currentQuestion.chapter) remainingInChapter++;
            }
            document.getElementById('chap-remaining').innerText = remainingInChapter;
        } else {
            extraInfo.classList.add('hidden');
        }
    }
}

/* --- LOGIK: FRAGE LADEN --- */
function loadQuestion() {
    // Ende erreicht?
    if (currentIndex >= queue.length) {
        finishSession();
        return;
    }

    currentQuestion = queue[currentIndex];
    updateUI(); // Stats & Kapitel aktualisieren

    isResolved = false;
    
    // UI Reset
    document.getElementById('explanation-area').classList.add('hidden');
    const btn = document.getElementById('btn-action');
    btn.innerText = (mode === 'exam') ? "Nächste Frage" : "Auflösen";
    
    // Frage Text & Bild
    document.getElementById('question-text').innerText = currentQuestion.text;
    const imgDiv = document.getElementById('question-image');
    if(currentQuestion.image) {
        imgDiv.innerHTML = `<img src="assets/${currentQuestion.image}">`;
        imgDiv.classList.remove('hidden');
    } else { 
        imgDiv.classList.add('hidden'); 
    }

    // Antworten generieren & mischen
    const grid = document.getElementById('answers-grid');
    grid.innerHTML = "";

    const correct = currentQuestion.answersPool.filter(a => a.isCorrect);
    const wrong = currentQuestion.answersPool.filter(a => !a.isCorrect);
    
    // Fallback: Falls Pool Fehler hat, nimm Dummy
    const selCorrect = correct[0] || {text: "Fehler in Daten", isCorrect: true};
    const selWrong = wrong.slice(0, 3); // Nimm 3 Falsche
    
    let mix = [selCorrect, ...selWrong];
    currentAnswers = mix.sort(() => 0.5 - Math.random());

    // Buttons rendern
    currentAnswers.forEach((ans, idx) => {
        const div = document.createElement('div');
        div.className = 'answer-card';
        div.innerText = ans.text;
        div.onclick = () => selectAnswer(idx, div);
        grid.appendChild(div);
    });
}

function selectAnswer(idx, div) {
    if (isResolved) return; // Gesperrt wenn schon aufgelöst
    document.querySelectorAll('.answer-card').forEach(d => d.classList.remove('selected'));
    div.classList.add('selected');
}

/* --- LOGIK: BUTTON KLICK --- */
document.getElementById('btn-action').addEventListener('click', () => {
    // Fall A: Auflösen (Lern Modus)
    if(!isResolved && mode !== 'exam') {
        resolve();
    } 
    // Fall B: Weiter (oder Prüfung Input speichern)
    else {
        if(mode === 'exam') saveExamInput();
        currentIndex++;
        loadQuestion();
    }
});

function resolve() {
    const selected = document.querySelector('.answer-card.selected');
    if(!selected) { alert("Bitte wähle eine Antwort!"); return; }

    const cards = document.querySelectorAll('.answer-card');
    const selIdx = Array.from(cards).indexOf(selected);
    const isCorrect = currentAnswers[selIdx].isCorrect;

    // Farben setzen
    cards.forEach((card, i) => {
        if(currentAnswers[i].isCorrect) card.classList.add('correct'); // Grün
        else if(i === selIdx) card.classList.add('wrong'); // Rot (nur wenn gewählt)
    });

    // Stats & Speicher Logik
    if(isCorrect) {
        // Wenn richtig: Status 'learned'
        Core.data.progress[currentQuestion.id] = 'learned';
        Core.data.stats.currentStreak++;
        if(Core.data.stats.currentStreak > Core.data.stats.maxStreak) {
            Core.data.stats.maxStreak = Core.data.stats.currentStreak;
        }
        Core.data.stats.totalLearned++;
    } else {
        // Wenn falsch: Status 'repeat'
        Core.data.progress[currentQuestion.id] = 'repeat';
        Core.data.stats.currentStreak = 0;
        sessionWrongCount++;
    }
    Core.save(); // Sofort speichern
    updateUI();  // Icons sofort updaten

    // Erklärung zeigen
    document.getElementById('explanation-text').innerText = currentQuestion.explanation;
    document.getElementById('explanation-area').classList.remove('hidden');
    
    isResolved = true;
    document.getElementById('btn-action').innerText = "Weiter";
}

function saveExamInput() {
    // Prüfung: Nur zählen, nichts anzeigen
    const selected = document.querySelector('.answer-card.selected');
    if(selected) {
        const cards = document.querySelectorAll('.answer-card');
        const idx = Array.from(cards).indexOf(selected);
        if(currentAnswers[idx].isCorrect) examCorrectCount++;
    }
}

/* --- LOGIK: SESSION ENDE --- */
function finishSession() {
    document.getElementById('progress-bar').style.width = "100%";
    
    if (mode === 'exam') {
        // Prüfungsauswertung
        const percent = (examCorrectCount / 20) * 100;
        const grade = Core.calculateGrade(percent);
        const passed = percent >= 50;
        
        Core.data.stats.examsTaken++;
        if(passed) Core.data.stats.examsPassed++;
        Core.save();

        // Modal vorbereiten
        const modal = document.getElementById('result-modal');
        const chart = document.getElementById('result-chart');
        const gradeDisp = document.getElementById('result-grade');
        const titleDisp = document.getElementById('result-title');
        const msgDisp = document.getElementById('result-msg');

        // Farben
        let colorVar = passed ? 'var(--primary)' : 'var(--danger)'; 
        if(grade === "5,0") colorVar = 'var(--danger)';
        
        // CSS Chart setzen
        chart.style.background = `conic-gradient(${colorVar} 0% ${percent}%, #333 ${percent}% 100%)`;
        gradeDisp.innerText = grade;
        gradeDisp.style.color = colorVar;

        if(passed) {
            titleDisp.innerText = "BESTANDEN! 🎉";
            titleDisp.style.color = "white";
            msgDisp.innerText = `Glückwunsch! (${examCorrectCount}/20 richtig)`;
        } else {
            titleDisp.innerText = "DURCHGEFALLEN";
            titleDisp.style.color = "var(--danger)";
            msgDisp.innerText = `Nicht aufgeben. (${examCorrectCount}/20 richtig)`;
        }
        modal.classList.add('active'); // Modal zeigen

    } else {
        // Normales Ende
        alert("Kapitel abgeschlossen! Super gemacht.");
        window.location.href = 'dashboard.html';
    }
}