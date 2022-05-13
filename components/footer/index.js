import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h6 className={styles.logo}>Will.</h6>
      <div className={styles.linksContainer}>
        <div className={styles.quickLinks}>
          <h6>Quick Links</h6>
          <ul>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>About</li>
            <li className={styles.menuItem}>Projects</li>
            <li className={styles.menuItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.socialsLinks}>
          <h6>Follow</h6>
          <ul>
            <li className={styles.menuItem}>Twitter</li>
            <li className={styles.menuItem}>Linkedin</li>
            <li className={styles.menuItem}>Github</li>
          </ul>
        </div>
      </div>
      <div className={styles.newsletterContainer}>
        <h6>Sign up to the newsletter</h6>
        <input
          type={"email"}
          className={styles.emailInput}
          placeholder="Email"
        />
      </div>
      <span className={styles.footerBottom}>
        &copy; Will 2021. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
