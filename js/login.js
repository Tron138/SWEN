// Check: Wenn schon eingeloggt, direkt zum Dashboard
if (Core.data.auth.isLoggedIn) {
    window.location.href = 'dashboard.html';
}

document.getElementById('btn-login').addEventListener('click', () => {
    const pwd = document.getElementById('password').value;
    if (pwd === CONFIG.password) {
        Core.data.auth.isLoggedIn = true;
        Core.save();
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error').classList.remove('hidden');
    }
});