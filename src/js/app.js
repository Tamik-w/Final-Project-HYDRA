let formBtn = document.getElementById('formBtn');
formBtn.addEventListener('click', function(e){
    e.preventDefault()
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let body = `First Name: ${firstName}; <br/> Last Name: ${lastName}; <br/> Email: ${email}; <br/> Phone: ${phone}; <br/> Subject: ${subject}; <br/> Message: ${message};`
    Email.send({
        SecureToken : "d95658a0-2340-48d6-81c5-92f83bedb77f",
        To : 'dtamurov19@gmail.com',
        From : email,
        Subject : subject,
        Body : body,
    }).then(
      message => alert(message)
    );
})


