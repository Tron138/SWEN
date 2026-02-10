/* js/core.js - Global State Management */

const CONFIG = {
    password: "M106",
    storageKey: "fahrschule_pro_final"
};

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
    progress: {} // ID -> 'learned' | 'repeat'
};

const Core = {
    data: null,

    init: function() {
        const stored = localStorage.getItem(CONFIG.storageKey);
        this.data = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultData));
    },

    save: function() {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(this.data));
    },

    checkAuth: function() {
        if (!this.data.auth.isLoggedIn) {
            window.location.href = 'index.html'; // Kickt User raus zum Login
        }
    },
    
    // Hilfsfunktion: Berechnet Note
    calculateGrade: function(percent) {
        if (percent < 50) return "5,0";
        if (percent >= 95) return "1,0";
        if (percent >= 80) return "2,0";
        if (percent >= 65) return "3,0";
        if (percent >= 50) return "4,0";
        return "4,0";
    }
};

// Automatisch initialisieren beim Laden
Core.init();