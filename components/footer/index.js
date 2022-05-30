import React, { useState } from "react";
import styles from "./footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <footer className={styles.footer}>
      <div className={styles.form}>
        <motion.h2 className={styles.heading}>
          Want to start a project?
        </motion.h2>
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
        <textarea
          placeholder={"MESSAGE*"}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={styles.messageForm}
        />
        <button className={styles.submitButton}>Submit</button>
      </div>
      <div className={styles.footerSocials}>
        <a href="#" target="_blank" rel="noreferrer">
          TWITTER
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
      </div>
      <div className={styles.lowerFooter}>
        <span>&copy; Will 2021. All Rights Resevered</span>
      </div>
    </footer>
  );
};

export default Footer;
