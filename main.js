var nodemailer = require('nodemailer');
var express = require('express');
var app = express();

app.post("/send-email", (request, response) => {
    var trasporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: "STARTTLS",
        auth: {
            user: "jermaine.damore76@ethereal.email",
            pass: 'KDkZZbJnZmSK5UEkXS',
        },
    });

    var mailOptions = {
        from: "Remitente",
        to: "gymserrharo@gmail.com",
        subject: "Enviado desde nodemailer",
        text: "¡Hola mundo!",
    };

    trasporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            response.status(500).send(error.message);
        }

        else {
            console.log("Email enviado.");
            response.status(200).jsonp(request.body);
        }
    });
});


app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000");
})