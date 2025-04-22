(function() {
    emailjs.init("nDY9wAnm84IO1YrkM");  
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  

    const form = event.target;

    emailjs.sendForm('stylesbylizzyb', 'template_1ee2h3', form)
        .then(function(response) {
            console.log('Success:', response);
            alert("Email sent successfully!");
            form.reset();  
        }, function(error) {
            console.log('Error:', error);
            alert("Failed to send email. Please try again.");
        });
});

