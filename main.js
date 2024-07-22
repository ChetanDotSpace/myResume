const form = document.querySelector("form");
const fullName = document.getElementById("name");
const mail = document.getElementById("email");
const subject = document.getElementById("subject");
const userMessage = document.getElementById("message");


function sendEmail(){
    const messageBody = `Name: ${fullName.value} <br> Email: ${mail.value} <br> Message: ${userMessage.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chandupopat560@gmail.com",
        Password : "CE3832802E538D66A6282B120E627956A01C",
        To : "chandupopat560@gmail.com",
        From : "chandupopat560@gmail.com",
        Subject : subject.value,
        Body : messageBody
    }).then(
        
        message => alert(message),
        console.log("message has been sent")
    );

};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})
