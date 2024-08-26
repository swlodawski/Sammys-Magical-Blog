document.addEventListener('DOMContentLoaded', function() {
    console.log('Signup script loaded', new Date().toISOString());
    const form = document.getElementById('signup-form');
    const errorMessageElement = document.getElementById('error-message');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new formData(form);
            const userData = Object.fromEntries(formData);
            const submitButton = form.querySelector('button[type="submit"]');

            try {
                submitButton.disabled = true;
                errorMessageElement.classList.add('d-none');

                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                const data = await response.json();

                
            }
        })
    }
})