"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

async function sendConfirmation({ id, nome, email }) {
console.log(process.env.HOST)  
    const link = 'https://www.comejaca.org.br/' + id

    let transporter = nodemailer.createTransport({

        host: process.env.SMTP_HOST,
        name: 'no-reply@comejaca.org.br',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,

        },

    });





    let info = await transporter.sendMail({
        from: '"COMEJACA" confirmacao@comejaca.org.br',
        to: `${email}`,
        subject: "Confirmação de inscrição 2022",
        html: `
    <html>
    <head>
    </head>
    <body>
    <p>Olá ${nome}, sua inscrição no COMEJACA foi recebida com sucesso.</p>
    <a href="${link}" target="_blank">Para ALTERAR a ficha de inscrição clique aqui.</a><BR>
    <a href="${link}" target="_blank">Para IMPRIMIR a ficha de inscrição clique aqui.</a>
    <p> <br><br>
    Para finalizar sua inscrição siga as instruções abaixo:<br>
    - Imprima a ficha de inscrição clicando no link acima.<br>
    - Após colher as Assinaturas (Dirigente DIJ e Presidente IE), favor entregar a ficha a um membro da Coordenação Geral até o dia 03/07/2022. juntamente com o Valor da Inscrição + Camisa do Evento (Se houver).<br><br><br><br>
     
    <b>Valor da Inscrição</b><br>
    Confraternistas e membros da equipe: R$ 35,00<br>
    Pequeno companheiro: R$ 20,00<br><br><br>
     
    <b>Contatos</b><br>
    Andreia - (21) 9 7211-5182
    Bruno   - (21) 9 9865-7538
    Mary    - (21) 9 8726-1210  
    Rubem   - (21) 9 9742-9214
    Vicente - (21) 9 8874-8038
     
    E-mail: coordenacaogeral@comejaca.org.br
    </p>
    </body>
    </html>
    `
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
module.exports = sendConfirmation
