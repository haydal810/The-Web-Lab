function sendMail(contact_form) {
    emailjs.send("gmail", "the_web_lab_templateID", {
        "message": contact_form.message.value,
        "from_name": contact_form.name.value,
        "from_email": contact_form.email.value,
        "phone_number": contact_form.tel.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                setTimeout($("#modalMessage").modal(), 500); // the user will know that their message was sent successfully and is given feedback.
                document.getElementById('contact_form').reset(); // the form is reset after submit button is hit
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page...
}