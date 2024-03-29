import nc from "next-connect";
const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env" });

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

const handler = nc()
  .get(async (req, res) => {
    res.json({
      code: 200,
      message: "API RUNNING",
    });
  })
  .post(async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const org = req.body.org;
    const message = req.body.message;
    const services = req.body.services;

    const options = {
      from: process.env.NODE_MAILER_EMAIL,
      to: process.env.NODE_MAILER_TO,
      text: `
      NAME: ${name}
      EMAIL: ${email}
      ORG: ${org}
      MESSAGE: ${message}
      SERVICES: ${services}
    `,
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        res.json({ code: 400, message: err });
        return;
      }
      res.json({ code: 200, message: info.response });
    });
  });

export default handler;
