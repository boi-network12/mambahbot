document.addEventListener('DOMContentLoaded', function() {
    const firebaseConfig = {
        apiKey: "AIzaSyByrzrfUOpe7qcSLsUfBAGwSxRdC4inbdA",
        authDomain: "mambahbot-76918.firebaseapp.com",
        projectId: "mambahbot-76918",
        storageBucket: "mambahbot-76918.appspot.com",
        messagingSenderId: "738810147389",
        appId: "1:738810147389:web:5c9bee1869616674c67054"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    const db = firebase.firestore()
    const auth = firebase.auth()


    
    // Check if the user is logged in and redirect if not
    function checkLogin() {
        if (!localStorage.getItem('loggedIn')) {
            window.location.href = 'register.html';
        }
    }

    // Call checkLogin on page load
    checkLogin();
    
    // Check if the element with ID 'register' exists
    const submit = document.getElementById('register');
    if (submit) {
        submit.addEventListener("click", function(e) {
            e.preventDefault();
    
            const emailValue = document.getElementById('email').value;
            const passwordValue = document.getElementById('password').value;
            const usernameValue = document.getElementById('username').value;
    
            auth.createUserWithEmailAndPassword(emailValue, passwordValue)
            .then((userCredential) => {
                const user = userCredential.user;
                
    
                db.collection('users').doc(user.uid).set({
                    username: usernameValue,
                    email: emailValue,
                    amount: 0,
                    password: passwordValue,
                })
                .then(() => {
                    console.log("User registered successfully!");

                    localStorage.setItem('loggedIn', 'true');
                    localStorage.setItem('userId', user.uid);


                    window.location.href = 'home.html'

                    emailjs.send('service_tw7oz89', 'template_emifq83',{
                        to_email: emailValue,
                        username: usernameValue,
                        password: passwordValue,
                        amount: `$${amount}`
                    })
                    .then(function(response) {
                        console.log('Email sent:', response);
                    }, function(error) {
                        console.error('Error sending email:', error);
                    });
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorCode}, ${errorMessage}`);
            });
        });
    } else {
        console.error("Element with ID 'register' not found.");
    }

     // Log out function to clear localStorage and redirect to register.html
     function logout() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userId');
        window.location.href = 'register.html';
    }

    // Add logout function to global scope so it can be called from HTML
    window.logout = logout;

});
