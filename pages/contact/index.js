import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/contact.module.scss";
import Header from "../../components/header";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { contactVariants } from "../../FramerVariants";
import useWindowWidth from "../../utils/useWindowWidth";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState("send");
  const width = useWindowWidth(700);

  useEffect(() => {
    document.body.classList.remove("light");
  }, []);
  async function handleFormSubmission(e) {
    e.preventDefault();
    setLoading(true);
    const body = JSON.stringify({ name, message, services, org, email });
    const url = "/api/contact";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setSubmitButtonText("sent!");
    } catch (err) {
      setSubmitButtonText("Error Occured");
    }
    setTimeout(() => {
      setSubmitButtonText("send");
      setLoading(false);
    }, 4000);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      key={"contactPageContainer"}
    >
      <Head>
        <title>Will - Contact</title>
        <meta name="description" content="Let's discuss your next project" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header currentPage={"contact"} />
      <main className={styles.sectionContainer}>
        <motion.h1
          className={styles.contactHeading}
          variants={contactVariants.headingContainer}
          initial={"initial"}
          animate={"animate"}
        >
          <div className={styles.headingTextContainer}>
            <motion.span variants={contactVariants.headingText}>
              LET'S DISCUSS YOUR
            </motion.span>
          </div>
          <div className={styles.headingTextContainer}>
            <motion.span variants={contactVariants.headingText}>
              NEXT PROJECT.
            </motion.span>
          </div>
        </motion.h1>
        <motion.div
          className={styles.contentContainer}
          variants={contactVariants.mainContainer}
          initial={"initial"}
          animate={"animate"}
        >
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
                    What services do you require?
                  </span>
                  <input
                    type={"text"}
                    value={services}
                    className={styles.textInput}
                    placeholder={"Smart contract development *"}
                    onChange={(e) => setServices(e.target.value)}
                  />
                </div>
              </label>
              <label className={styles.formLabel}>
                <span className={styles.number}>//04</span>
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
                <span className={styles.number}>//05</span>
                <div className={styles.labelInner}>
                  <span className={styles.question}>What’s your message?</span>
                  <textarea
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
                disabled={loading}
              >
                {loading ? "Sending" : submitButtonText}
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
        </motion.div>
        <span className={styles.copyright}>
          &copy; Will Thomson 2022. All Rights Resevered
        </span>
      </main>
    </motion.div>
  );
}

// .latternContainer {
//   top: -10px;
//   left: 200px;
//   position: absolute;
//   transform-origin: 50% 0;
//   animation: pendulum 3s ease-in-out infinite;
// }
// @keyframes pendulum {
//   0%,
//   100% {
//     transform: rotate(45deg);
//   }
//   50% {
//     transform: rotate(-45deg);
//   }
// }

// <div className={styles.latternContainer}>
// <Image
//   src={"/testLattern.png"}
//   height={300}
//   width={65}
//   alt="lattern"
// />
// </div>
