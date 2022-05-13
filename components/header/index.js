import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { HeaderVariants } from "../../FramerVariants";
import { motion, AnimatePresence } from "framer-motion";
import Twitter from "../../assets/Twitter.svg";
import Linked from "../../assets/Linked.svg";
import Instagram from "../../assets/Instagram.svg";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen((menuState) => !menuState);
  }
  return (
    <motion.header
      className={styles.header}
      initial={"initial"}
      animate={menuOpen ? "open" : "close"}
      exit={"exit"}
    >
      <h6 className={styles.logo}>Will.</h6>
      <motion.div
        className={styles.menuToggle}
        initial={"initial"}
        animate={menuOpen ? "open" : "close"}
      >
        <motion.button
          className={styles.mobileMenuButton}
          onClick={(e) => handleMenuOpen()}
        >
          <motion.span
            className={styles.upperLine}
            variants={HeaderVariants.mobileToggle}
          ></motion.span>
          <motion.span
            className={styles.lowerLine}
            variants={HeaderVariants.mobileToggle}
          ></motion.span>
        </motion.button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          onClick={(e) => handleMenuOpen()}
          className={styles.svgArrow}
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-152 -439)">
            <motion.line
              id="Line_1"
              data-name="Line 1"
              y1="14.91"
              transform="translate(184 463.788)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              variants={HeaderVariants.line1}
            />
            <motion.path
              id="Path_1"
              data-name="Path 1"
              d="M6,9.155,10.949,5"
              transform="translate(173.051 458.302)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              variants={HeaderVariants.path1}
            />
            <motion.path
              id="Path_2"
              data-name="Path 2"
              d="M10.949,5,15.9,9.155"
              transform="translate(173.051 458.302)"
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              variants={HeaderVariants.path2}
            />
            <g
              id="Ellipse_1"
              dataName="Ellipse 1"
              transform="translate(152 439)"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="2.5"
            >
              <motion.circle cx="32" cy="32" r="32" stroke="none" />
              <motion.circle
                id="circle"
                cx="32"
                cy="32"
                r="25"
                fill="none"
                variants={HeaderVariants.circle}
              />
            </g>
          </g>
        </svg>
      </motion.div>
      <nav className={styles.desktopNavigationContainer}>
        <ul className={styles.menulinks}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Projects</li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Contact</li>
        </ul>
      </nav>
      <nav className={styles.desktopSocialContainer}>
        {" "}
        <ul>
          <li>
            <a href="#" target="_blank" className={styles.socialLink}>
              <Twitter />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className={styles.socialLink}>
              <Linked />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className={styles.socialLink}>
              <Instagram />
            </a>
          </li>
        </ul>
      </nav>

      <AnimatePresence exitBeforeEnter>
        {menuOpen && (
          <nav className={styles.mobileNavigationContainer}>
            <div className={styles.links}>
              <ul className={styles.menuLinks}>
                <motion.li className={styles.menuItem}>Home</motion.li>
                <li className={styles.menuItem}>Projects</li>
                <li className={styles.menuItem}>About</li>
                <li className={styles.menuItem}>Contact</li>
              </ul>
              <ul>
                <li>
                  <a href="#" target="_blank" className={styles.socialLink}>
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className={styles.socialLink}>
                    <Linked />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className={styles.socialLink}>
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.menuFooter}>
              <span>&copy; Will 2021. All Rights Resevered</span>
            </div>
          </nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
