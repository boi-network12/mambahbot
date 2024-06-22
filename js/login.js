document.addEventListener('DOMContentLoaded', function() {
    const firebaseConfig = {
        // Your Firebase configuration
        apiKey: "AIzaSyByrzrfUOpe7qcSLsUfBAGwSxRdC4inbdA",
        authDomain: "mambahbot-76918.firebaseapp.com",
        projectId: "mambahbot-76918",
        storageBucket: "mambahbot-76918.appspot.com",
        messagingSenderId: "738810147389",
        appId: "1:738810147389:web:5c9bee1869616674c67054"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    

    // Get login form and add submit event listener
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        // Get user inputs
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Sign in the user
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                
                console.log(`User ${user.uid} logged in successfully.`);
                // You can redirect or perform other actions here after login
                
                 // Save login state in localStorage
                 localStorage.setItem('loggedIn', 'true');
                 localStorage.setItem('userId', user.uid);

                window.location.href = 'home.html'
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Login error: ${errorCode} - ${errorMessage}`);
                alert(`Login failed: ${errorMessage}`);
            });
    
    });
    // Log out function to clear localStorage and redirect to signUp.html
    function logout() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userId');
        window.location.href = 'signUp.html';
    }

    // Add logout function to global scope so it can be called from HTML
    window.logout = logout;
});
