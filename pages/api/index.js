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
    res.json({
      code: 200,
      message: "API RUNNING",
    });
  });

export default handler;
