// Log out function to clear localStorage and redirect to signUp.html
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userId');
    window.location.href = 'signUp.html';
}

// Add logout function to global scope so it can be called from HTML
window.logout = logout;