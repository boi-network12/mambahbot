// jsFolder/auth.js

// Function to check if the user is logged in
function isLoggedIn() {
    // For simplicity, we're using localStorage. Replace this with actual session management logic.
    return localStorage.getItem('loggedIn') === 'true';
}

// Redirect to signUp.html if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        window.location.href = 'signUp.html';
    }
}
