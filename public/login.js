document.addEventListener('DOMContentLoaded', function() {
    console.log('Login Script Loaded', new Date().toISOString());
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if(loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            console.log('Form Intercepted');

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({username, password}),
                });

                
            }
        })
    }
})