const nodemailer = require('nodemailer');











const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587, 
    secure: true,
    auth: {
        user: 'addfa2001@smtp-brevo.com',
        pass: 'bsksUXILZDjqWGO'    }
});


module.exports = transporter;
