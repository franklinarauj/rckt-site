// SEND MAIL TO ROCKETWAVE CONTACT

function sendMail() {
    var link = "mailto:contact@rocketwave.tech"
             + "?cc=leonardo@rocketwave.tech"
             + "&bcc=" + encodeURIComponent(document.getElementById('myEmail').value)
             + "&subject=" + encodeURIComponent(document.getElementById('myName').value)
             + "&body=" + (encodeURIComponent(document.getElementById('myText').value)
             + ' - Email for contact: ' + encodeURIComponent(document.getElementById('myEmail').value));

    window.location.href = link;
}
