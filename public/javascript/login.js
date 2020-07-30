const {
    response
} = require("express");

async function signupFormHandler(event) {
    event.preventDefault();

    const username = $('#username-signup').val().trim();
    const email = $('#email-signup').val().trim();
    const password = $('#password-signup').val().trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        if(response.ok){
            console.log('success');
        } else {
            alert(response.statusText)
        }
    }
};


$('.signup-form').on('submit', signupFormHandler);