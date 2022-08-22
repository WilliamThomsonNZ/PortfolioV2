import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { HeaderVariants } from "../../FramerVariants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Twitter from "../../assets/Twitter.svg";
import Linked from "../../assets/Linked.svg";
import Instagram from "../../assets/Instagram.svg";
const Header = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [temp, setTemp] = useState(0);
  const [menuRendered, setMenuRendered] = useState(false);
  function handleMenuOpen() {
    if (menuOpen) {
      document.body.parentElement.classList.remove("overflowHidden");
    } else {
      document.body.parentElement.classList.add("overflowHidden");
    }

    setMenuOpen((menuState) => !menuState);
  }
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const timeOffset = 12;
  const NewZealandTime = new Date(utcTime + 3600000 * timeOffset);
  const hours =
    NewZealandTime.getHours() > 12
      ? NewZealandTime.getHours() - 12
      : NewZealandTime.getHours();

  const morning = NewZealandTime.getHours() > 11 ? "PM" : "AM";
  const time = `${hours}:${
    NewZealandTime.getMinutes() < 10 ? "0" : ""
  }${NewZealandTime.getMinutes()} ${morning}`;

  async function getWeather() {
    const location = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=-36.852095&lon=174.7631803&units=metric&appid=b73619b950e514bac7748e50cfdea39b"
    );
    const data = await location.json();
    const responseTemp = Math.round(data.main.temp);
    setTemp(responseTemp);
  }
  useEffect(() => {
    getWeather();
    setTimeout(() => {
      setMenuRendered(true);
    }, 2000);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${menuOpen ? styles.menuOpen : undefined} ${
        currentPage == "work" || currentPage == "contact"
          ? styles.dark
          : undefined
      }`}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={HeaderVariants.header}
    >
      <Link href={"/"}>
        <h6
          className={`${styles.logo} ${menuOpen ? styles.logoOpen : undefined}`}
        >
          <motion.span
            className={styles.name}
            variants={currentPage == "home" ? HeaderVariants.logoWill : {}}
          >
            Will
          </motion.span>
          <br />
          Thomson
        </h6>
      </Link>

      <motion.div
        className={`${styles.menuToggle} ${
          menuOpen ? styles.menuOpen : undefined
        }`}
        initial={"initial"}
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
      </motion.div>
      <nav className={styles.desktopNavigationContainer}>
        <ul className={styles.menulinks}>
          <li className={styles.menuItem}>
            <Link href="/" to="/">
              <a
                className={
                  currentPage == "home" && menuRendered
                    ? styles.selected
                    : undefined
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href={"/work"} to={"/work"}>
              <a
                className={
                  currentPage == "work" && menuRendered
                    ? styles.selected
                    : undefined
                }
              >
                Work
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contact">
              <a
                className={
                  currentPage == "contact" && menuRendered
                    ? styles.selected
                    : undefined
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.desktopSocialContainer}>
        <ul>
          <li>AKL</li>
          <li>{temp}&#176;C</li>
          <li>
            {time}
            <br />
            <span className={styles.localTime}>LOCAL TIME</span>
          </li>
        </ul>
      </div>
      {/* b73619b950e514bac7748e50cfdea39b */}
      <AnimatePresence exitBeforeEnter>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenuOuterContainer}
            variants={HeaderVariants.mobileMenuContainer}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            key={"container"}
          >
            <nav className={styles.mobileNavigationContainer}>
              <div className={styles.links}>
                <ul className={styles.menuLinks}>
                  <motion.li
                    className={styles.menuItem}
                    variants={HeaderVariants.mobileMenuItem}
                  >
                    <Link href={"/"}>
                      <a>
                        <span className={styles.menuNumber}>//01</span>
                        <span className={styles.menuTitle}>Home</span>
                      </a>
                    </Link>
                  </motion.li>
                  <motion.li
                    className={styles.menuItem}
                    variants={HeaderVariants.mobileMenuItem}
                  >
                    <Link href={"/work"}>
                      <a>
                        <span className={styles.menuNumber}>//02</span>
                        <span className={styles.menuTitle}>Work</span>
                      </a>
                    </Link>
                  </motion.li>

                  <motion.li
                    className={styles.menuItem}
                    variants={HeaderVariants.mobileMenuItem}
                  >
                    <Link href={"/contact"}>
                      <a>
                        <span className={styles.menuNumber}>//03</span>
                        <span className={styles.menuTitle}>Contact</span>
                      </a>
                    </Link>
                  </motion.li>
                </ul>
                <ul></ul>
              </div>
            </nav>
            <motion.div
              className={styles.contactDetailsContainer}
              variants={HeaderVariants.mobileMenuFooter}
            >
              <motion.section className={styles.contactDetailsDesktop}>
                <div className={styles.contactDetails}>
                  <h6 className={styles.sectionTitle}>Contact details</h6>
                  <a
                    href={"mailto:hello@williamthomson.co.nz"}
                    rel={"noreferrer"}
                    className={styles.socialLink}
                  >
                    hello@williamthomson.co.nz
                  </a>
                  <a className={styles.socialLink}>Discord Willl#8451</a>
                </div>
              </motion.section>
              <motion.section className={styles.socials}>
                <h6 className={styles.sectionTitle}>Socials</h6>
                <a
                  href={"https://twitter.com/willthomson__"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={styles.socialLink}
                >
                  Twitter
                </a>
                <a
                  href={"https://github.com/WilliamThomsonNZ"}
                  rel={"noreferrer"}
                  target={"_blank"}
                  className={styles.socialLink}
                >
                  Github
                </a>
              </motion.section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className={styles.darkUnderline}></div> */}
    </motion.header>
  );
};

export default Header;
