const nodemailer = require("nodemailer");
const { text } = require("stream/consumers");

const user = "jsteste93@gmail.com"
const pass = "mpvs140403"


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {user, pass}
})

transporter.sendMail({
    from: "Teste <jsteste93@gmail.com>",
    to: "projetointegradorr3@gmail.com",
    subject: "Curriculo",
    text: "Joás é meu professor favorito!!"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})