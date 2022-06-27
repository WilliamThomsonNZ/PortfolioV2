import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/contact.module.scss";
import Header from "../../components/header";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  function handleFormSubmission(e) {
    e.preventDefault();
  }
  return (
    <>
      <Head>
        <title>Will - Work</title>
        <meta name="description" content="previous works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header currentPage={"contact"} />
      <main className={styles.sectionContainer}>
        <h1 className={styles.contactHeading}>
          <motion.span>LET'S DISCUSS YOUR</motion.span>
          <motion.span>NEXT PROJECT.</motion.span>
        </h1>
        <div className={styles.contentContainer}>
          <section className={styles.contactDetailsMobile}>
            <h6 className={styles.sectionTitle}>Contact details</h6>
            <a
              href={"mailto:hello@williamthomson.co.nz"}
              rel={"noreffer"}
              className={styles.socialLink}
            >
              hello@williamthomson.co.nz
            </a>
            <a
              href={"mailto:hello@williamthomson.co.nz"}
              rel={"noreffer"}
              className={styles.socialLink}
            >
              Discord Willl#8451
            </a>
          </section>
          <section className={styles.formContainer}>
            <form>
              <label className={styles.formLabel}>
                <span className={styles.number}>//01</span>
                <div className={styles.labelInner}>
                  <span className={styles.question}>What’s your name?</span>
                  <input
                    type={"text"}
                    value={name}
                    className={styles.textInput}
                    placeholder={"John Doe *"}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </label>
              <label className={styles.formLabel}>
                <span className={styles.number}>//02</span>
                <div className={styles.labelInner}>
                  <span className={styles.question}>What’s your email?</span>
                  <input
                    type={"email"}
                    value={email}
                    className={styles.textInput}
                    placeholder={"example@example.com *"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>
              <label className={styles.formLabel}>
                <span className={styles.number}>//03</span>
                <div className={styles.labelInner}>
                  <span className={styles.question}>
                    What’s the name of your organization?
                  </span>
                  <input
                    type={"text"}
                    value={org}
                    className={styles.textInput}
                    placeholder={"Example Company *"}
                    onChange={(e) => setOrg(e.target.value)}
                  />
                </div>
              </label>
              <label className={styles.formLabel}>
                <span className={styles.number}>//04</span>
                <div className={styles.labelInner}>
                  <span className={styles.question}>What’s your message?</span>
                  <input
                    type={"text"}
                    placeholder={"What you would like to say *"}
                    value={message}
                    className={styles.textInput}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </label>
              <button
                className={styles.submitButton}
                onClick={(e) => handleFormSubmission(e)}
              >
                SEND
              </button>
            </form>
          </section>
          <div className={styles.contactDetailsContainer}>
            <section className={styles.contactDetailsDesktop}>
              <div className={styles.contactDetails}>
                <h6 className={styles.sectionTitle}>Contact details</h6>
                <a
                  href={"mailto:hello@williamthomson.co.nz"}
                  rel={"noreffer"}
                  className={styles.socialLink}
                >
                  hello@williamthomson.co.nz
                </a>
                <a
                  href={"mailto:hello@williamthomson.co.nz"}
                  rel={"noreffer"}
                  className={styles.socialLink}
                >
                  Discord Willl#8451
                </a>
              </div>
            </section>
            <section className={styles.socials}>
              <h6 className={styles.sectionTitle}>Socials</h6>
              <a href={"#"} rel={"noreffer"} className={styles.socialLink}>
                Twitter
              </a>
              <a href={"#"} rel={"noreffer"} className={styles.socialLink}>
                Linkedin
              </a>
              <a href={"#"} rel={"noreffer"} className={styles.socialLink}>
                Github
              </a>
            </section>
            <div className={styles.location}>
              <h6 className={styles.sectionTitle}>Location</h6>
              <span className={styles.socialLink}>Auckland, New Zealand</span>
            </div>
          </div>
        </div>
        <span className={styles.copyright}>
          &copy; Will Thomson 2022. All Rights Resevered
        </span>
      </main>
    </>
  );
}
