function sendMail(){
    let params={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
emailjs.send('service_xiww6p8', 'template_lusnnkn', params).then(alert("Inquiry Sent !, Thank you for visiting us."))};
    