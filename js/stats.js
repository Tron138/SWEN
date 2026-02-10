Core.checkAuth();

const totalQuestions = questionsData.length;
let countL = 0; // Gelernt
let countR = 0; // Repeat

// Wir zählen echte IDs aus questionsData
questionsData.forEach(q => {
    const s = Core.data.progress[q.id];
    if(s === 'learned') countL++;
    if(s === 'repeat') countR++;
});

const countOpen = totalQuestions - countL - countR;

// Chart Farben berechnen
const pL = (countL / totalQuestions) * 100;
const pR = (countR / totalQuestions) * 100;
const endL = pL; 
const endR = pL + pR;

// Donut Chart Update
const chart = document.getElementById('main-chart');
chart.style.background = `conic-gradient(
    var(--success) 0% ${endL}%, 
    var(--danger) ${endL}% ${endR}%, 
    #333 ${endR}% 100%
)`;

// Text Updates
document.getElementById('percent-display').innerText = Math.round(pL) + "%";
document.getElementById('progress-text').innerText = `${countL} / ${totalQuestions} Fragen`;
document.getElementById('stat-bar-fill').style.width = pL + "%";

// Grid Updates
document.getElementById('stat-streak').innerText = Core.data.stats.maxStreak;
document.getElementById('stat-exams').innerText = Core.data.stats.examsPassed;
document.getElementById('stat-repeat').innerText = countR;
document.getElementById('stat-open').innerText = countOpen;