        function toggleForm() {
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
            signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
            document.getElementById('message').innerText = '';
        }

        function handleSubmit(formType) {
            const messageElement = document.getElementById('message');
            messageElement.innerText = 'Loading... Please wait';
            setTimeout(() => {
                messageElement.innerText = 'Internet server have issue';
            }, 30000); 
        }