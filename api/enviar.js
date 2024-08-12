const nodemailer = require('nodemailer');


module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, email, asunto, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: asunto,
      text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado', response: info.response });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
