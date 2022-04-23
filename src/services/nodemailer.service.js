const nodemailer = require('nodemailer');

require('dotenv').config();

class NodemailerService {
  appEMail = process.env.APP_EMAIL;
  appPassword = process.env.APP_PASSWORD;

  author = {
    name: 'Jhon Esteban Herrera',
    linkedin: 'https://www.linkedin.com/in/jhon-esteban-herrera',
    profession: 'Desarrollador JavaScript Full Stack (MERN Stack)',
  };

  currentYear = new Date().getFullYear();

  passwordLinkBase = process.env.PASSWORD_LINK_BASE;
  passwordEndpoint = process.env.PASSWORD_LINK_ENDPOINT;

  constructor() {
    this.transporter = this.getNodemailerTransporter();
  }

  setChangePasswordUrl(token) {
    this.changePasswordLink = `${this.passwordLinkBase}/#/${this.passwordEndpoint}?token=${token}`;
  }

  getNodemailerTransporter() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: this.appEMail,
        pass: this.appPassword,
      },
    });

    transporter
      .verify()
      .then(() => {
        console.log('Listo para enviar emails!!');
      })
      .catch((err) => {
        console.log(err);
      });

    return transporter;
  }

  setHtmlEmailTemplate(name) {
    return `
      <h1>
        ¿Necesitas una nueva contraseña 
          <span style="text-transform: capitalize">
            ${name}?
          </span>
      </h1>

      <p style="font-size: 1rem">
        Puedes crear tu nueva contraseña en el enlace que hay a continuación:
      </p>
       
  👉 <a 
        href="${this.changePasswordLink}" 
        target='_blank' 
        rel='noreferrer' 
        style="font-size: 1rem"
        >
          Crear nueva contraseña
      </a> 👈

      <p style="margin-top: 80px">

        <span style="font-size: 0.9rem">
          Copyright © ${this.currentYear}
        </span>

        <a 
          href="${this.author.linkedin}"
          target='_blank' 
          rel='noreferrer'
          style="font-size: 0.9rem"
          >
            ${this.author.name}
        </a>
      </p>

      <p style="font-size: 0.85rem">${this.author.profession}</p>
      `;
  }

  setMailOptions(email, name) {
    return {
      from: `Task App Support ${this.appEMail}`,
      to: email,
      subject: 'Recupera tu contraseña',
      html: this.setHtmlEmailTemplate(name),
    };
  }

  async sendEmailToUser(email, name) {
    await this.transporter.sendMail(this.setMailOptions(email, name));
  }
}

module.exports = NodemailerService;
