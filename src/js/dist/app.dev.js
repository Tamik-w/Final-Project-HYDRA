"use strict";

var formBtn = document.getElementById('formBtn');
formBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var body = "First Name: ".concat(firstName, "; <br/> Last Name: ").concat(lastName, "; <br/> Email: ").concat(email, "; <br/> Phone: ").concat(phone, "; <br/> Subject: ").concat(subject, "; <br/> Message: ").concat(message, ";");
  Email.send({
    SecureToken: "d95658a0-2340-48d6-81c5-92f83bedb77f",
    To: 'dtamurov19@gmail.com',
    From: email,
    Subject: subject,
    Body: body
  }).then(function (message) {
    return alert(message);
  });
});