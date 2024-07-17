require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to enable CORS
const corsOptions = {
  origin: 'http://localhost:4200', // Your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/enviar', (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email, // El correo del remitente que el usuario proporcionó
    to: process.env.EMAIL_USER, // Tu correo donde recibirás los mensajes
    subject: asunto,
    text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ error: error.toString() });
    }
    console.log('Correo enviado: ' + info.response);
    res.json({ message: 'Correo enviado', response: info.response });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
