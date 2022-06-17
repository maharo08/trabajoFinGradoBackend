const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/send-email", (request, response) => {
    const contactData = request.body;
    const trasporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "gymserrharo@gmail.com",
            pass: 'qbwuavfmhoxcgzgr',
        },
    });

    const mailOptions = {
        from: "Remitente",
        to: "gymserrharo@gmail.com",
        subject: `${contactData.name} ${contactData.email}`,
        text: `${contactData.message}`,
    };

    trasporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            response.status(500).send(error.message);
        }

        else {
            console.log("Email enviado.");
            response.status(200).jsonp({status: 200, data: {message: "Email sending"}});
        }
    });
});


app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000");
})