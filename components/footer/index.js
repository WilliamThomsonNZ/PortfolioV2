import React, { useState } from "react";
import styles from "./footer.module.scss";
import { motion } from "framer-motion";
import { ProjectVariants } from "../../FramerVariants";
import Grid from "../../assets/Grid.svg";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitButtonText, setSubmitButtonText] = useState("Submit");
  const [loading, setLoading] = useState(false);
  async function sendContactMessage() {
    setLoading(true);
    const body = JSON.stringify({ name, message, email });
    const url = "/api";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setSubmitButtonText("Message sent!");
    } catch (err) {
      setSubmitButtonText("Error Occured");
    }
    setTimeout(() => {
      setSubmitButtonText("Submit");
      setLoading(false);
    }, 4000);
  }
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.backgroundAssets}>
          <Grid />
        </div>
        <div className={styles.form}>
          <motion.h2
            className={styles.heading}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            Want to start a project?
          </motion.h2>
          <div className={styles.upperInputs}>
            <input
              type={"text"}
              placeholder={"NAME*"}
              onChange={(e) => setName(e.target.value)}
              value={name}
              className={styles.textForm}
            />
            <input
              type={"email"}
              placeholder={"EMAIL*"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={styles.textForm}
            />
          </div>
          <textarea
            placeholder={"MESSAGE*"}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={styles.messageForm}
          />
          <button
            className={styles.submitButton}
            onClick={(e) => sendContactMessage()}
          >
            {submitButtonText}
          </button>
        </div>
        <motion.div
          className={styles.footerSocials}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <a href="#" target="_blank" rel="noreferrer">
            TWITTER
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
        </motion.div>
      </footer>
      <div className={styles.lowerFooter}>
        <span>&copy; Will 2021. All Rights Resevered</span>
      </div>
    </>
  );
};

export default Footer;
