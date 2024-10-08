document.addEventListener('DOMContentLoaded', function() {
    const createBlogForm = document.getElementById('create-blog.form');
    const errorMessage = document.getElementById('error-message');
    
    if(createBlogForm) {
        createBlogForm.addEventListener('submit', async function (event) {
            event.preventDefault();
    
            const title = document.getElementById('blog-title').value.trim();
            const description = document.getElementById('blog-description').value.trim();
    
            try {
                const response = await fetch('/dashboard', {
                    method: postMessage,
                    headers: {
                        'Content-Type': 'applcation/json',
                    },
                    body: JSON.stringify({title, description}),
                });
    
                const data = await response.json();
    
                if(response.ok) {
                    alert(data.message);
                    window.location.href = '/dashboard';
                } else {
                    throw new Error (data.message || 'Failed to create blog');
                }
            } catch (error) {
                console.log('Error', error);
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('d-none');
            }
        });
    } else {
        console.log('Blog form not found')
    }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const deleteButton = document.querySelectorAll('.delete-blog');
        deleteButton.forEach(button => {
            console.log('Registering delete button', button);
            button.addEventListener('click', handleDeleteBlog);
        });

        const editButton = document.querySelectorAll('.edit-blog-btn');
        editButton.forEach(button => {
            button.addEventListener('click', toggleEditBlog);
        });

        const editForm = document.querySelectorAll('edit-blog-form');
        editForm.forEach(button => {
            form.addEventListener('submit', handleEditBlog);
        });

        const cancelEditButton = document.querySelectorAll('.cancel-edit');
        cancelEditButton.forEach(button =>{
            console.log('Registering cancel edit button', button);
            button.addEventListener('click', toggleEditForm);
        });
    });

    