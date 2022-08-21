import React, { useState } from "react";
import styles from "./footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants } from "../../FramerVariants";
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
        <motion.div
          className={styles.ctaContainer}
          variants={footerVariants.links}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <span className={styles.ox}>&#92;&#92;0x</span>
          <h6 className={styles.startProject}>Got A Project In Mind?</h6>
          <Link href={"/contact"}>
            <h2 className={styles.chat}>Let&apos;s Talk</h2>
          </Link>
        </motion.div>
        <motion.div
          className={styles.contactLinks}
          variants={footerVariants.linksContainer}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://twitter.com/willthomson__"
            className={styles.contactLink}
            variants={footerVariants.links}
            whileInView={"animate"}
            viewport={{ once: true }}
            target={"_blank"}
            rel="noreferrer"
          >
            Twitter
          </motion.a>
          <motion.a
            href="https://github.com/WilliamThomsonNZ"
            className={styles.contactLink}
            variants={footerVariants.links}
            whileInView={"animate"}
            viewport={{ once: true }}
            rel="noreferrer"
            target={"_blank"}
          >
            Github
          </motion.a>
          <motion.span
            className={styles.contactLink}
            variants={footerVariants.links}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            Discord Willl#8451
          </motion.span>
          <motion.a
            href="mailto:hello@williamthomson.co.nz"
            className={styles.contactLink}
            variants={footerVariants.links}
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            hello@williamthomson.co.nz
          </motion.a>
        </motion.div>
      </footer>
      <motion.span
        className={styles.copy}
        variants={footerVariants.links}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        &copy; Will Thomson 2022. All Rights Resevered.
      </motion.span>
    </>
  );
};

export default Footer;
