var usersname = document.getElementsByName("name");
var email = document.getElementsByName("email");
var issue = document.getElementsByName("issue");
var messages = document.getElementsByName("messages");

function sendEmail() {
    Email.send({
        SecureToken: "bd2446cb-dd90-4eac-acb0-f4ccc5fad0cd",
        //Host: "smtp.elasticemail.com",
        //Username: "nikgajjar51@gmail.com",
        //Password: "2E06721231417748FF25E9BF6B9D2A13334A",
        To: "nikgajjar51@gmail.com",
        From: "nikgajjar51@gmail.com",
        FromName: "From " + document.getElementById("name").value,
        ReplyAddress: document.getElementById("email").value,
        Subject: "Website - " + document.getElementById("issue").value,
        Body: document.getElementById("message").value,
    }).then(
        window.location.assign("assets/mailsent.html")
    );
}