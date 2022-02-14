
console.log("contact");
// console.log(email);
function sendEmail() {
    const email = document.getElementById('contact-me')//.addEventListener('submit',sendEmail());
    console.log("FUnction started")
    console.log(email);
    emailjs.sendForm('service_7i0tj7h','template_wenhrk4', email)
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});
}

