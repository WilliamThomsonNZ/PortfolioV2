import React, { useState } from "react";
import styles from "./footer.module.scss";
import { motion } from "framer-motion";
import { ProjectVariants } from "../../FramerVariants";
import Grid from "../../assets/Grid.svg";
import Link from "next/link";
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
        <div className={styles.ctaContainer}>
          <span className={styles.ox}>//0x</span>
          <h6 className={styles.startProject}>Got A Project In Mind?</h6>
          <Link href={"/contact"}>
            <h2 className={styles.chat}>Let's Talk</h2>
          </Link>
        </div>
        <div className={styles.contactLinks}>
          <a href="#" className={styles.contactLink}>
            Twitter
          </a>
          <a href="#" className={styles.contactLink}>
            Github
          </a>
          <a href="#" className={styles.contactLink}>
            Linkedin
          </a>
          <a href="#" className={styles.contactLink}>
            Discord Willl#8451
          </a>
          <a href="#" className={styles.contactLink}>
            hello@williamthomson.co.nz
          </a>
        </div>
      </footer>
      <span className={styles.copy}>
        &copy; Will Thomson 2022. All Rights Resevered
      </span>
    </>
  );
};

export default Footer;
