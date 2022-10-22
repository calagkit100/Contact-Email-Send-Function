let emailID = document.getElementById("email");
let messageID = document.getElementById("message");
let phoneID = document.getElementById("phone");



//SMTP EMAIL FUNCTION 
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "calagkit100@gmail.com",
        Password: "202391FEEAAED32E643F6EA4D368A0920738",
        To: phoneID.value,
        From: "calagkit100@gmail.com",
        Subject: "New Contact Form Enquiry",
        Body: messageID.value
    }).then(
        message => alert("Message Sent Successfully")
    );

};