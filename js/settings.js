/* js/settings.js */

Core.checkAuth();

// 1. Kapitel aus der Datenbank extrahieren
// Wir schauen uns jede Frage an, holen das Chapter, und machen ein "Set" (entfernt Duplikate)
const uniqueChapters = [...new Set(questionsData.map(q => q.chapter))];

// Sortieren (1, 2, 3...)
uniqueChapters.sort((a, b) => a - b);

const container = document.getElementById('settings-list');

if (uniqueChapters.length === 0) {
    container.innerHTML = '<div class="settings-item">Keine Kapitel in data.js gefunden</div>';
} else {
    // 2. HTML generieren
    uniqueChapters.forEach(chapNum => {
        // Prüfen: Ist dieses Kapitel im Core aktiv?
        const isActive = Core.data.settings.activeChapters.includes(chapNum);
        
        const item = document.createElement('div');
        item.className = 'settings-item';
        
        item.innerHTML = `
            <span style="font-weight: 500;">Kapitel ${chapNum}</span>
            <label class="switch">
                <input type="checkbox" value="${chapNum}" ${isActive ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        `;
        
        container.appendChild(item);
    });
}

// 3. Speichern Logik
function saveAndExit() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const newActive = [];
    
    checkboxes.forEach(cb => {
        if(cb.checked) {
            newActive.push(parseInt(cb.value));
        }
    });

    // Validierung: Mindestens ein Kapitel muss an sein, sonst Crash
    if (newActive.length === 0) {
        alert("Bitte mindestens ein Kapitel aktivieren!");
        return;
    }

    Core.data.settings.activeChapters = newActive;
    Core.save();
    window.location.href = 'dashboard.html';
}

// 4. Reset Logik
function resetApp() {
    if(confirm("Bist du sicher? Alle Statistiken und Fortschritte werden gelöscht.")) {
        localStorage.removeItem(CONFIG.storageKey);
        window.location.href = 'index.html';
    }
}