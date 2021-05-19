/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
<script src="https://smtpjs.com/v3/smtp.js"></script>;f
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
  }).then(alert("mail sent successfully"));
}
function openNav() {
  document.getElementById("sidenav").style.width = "400px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["981px", "1280px"],
    narrow: ["841px", "980px"],
    narrower: ["737px", "840px"],
    mobile: ["481px", "736px"],
    mobilep: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });
})(jQuery);
