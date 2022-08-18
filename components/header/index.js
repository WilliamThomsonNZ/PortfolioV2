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
    setMenuOpen((menuState) => !menuState);
    document.body.style.overFlow = "hidden";
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
        <h6 className={styles.logo}>
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
              dataname="Ellipse 1"
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
                    Home
                  </motion.li>
                  <motion.li
                    className={styles.menuItem}
                    variants={HeaderVariants.mobileMenuItem}
                  >
                    Projects
                  </motion.li>
                  <motion.li
                    className={styles.menuItem}
                    variants={HeaderVariants.mobileMenuItem}
                  >
                    About
                  </motion.li>
                  <motion.li
                    className={styles.menuItem}
                    variants={HeaderVariants.mobileMenuItem}
                  >
                    Contact
                  </motion.li>
                </ul>
                <ul></ul>
              </div>
              <motion.div
                className={styles.menuFooter}
                variants={HeaderVariants.mobileMenuFooter}
              >
                <span>&copy; Will 2021. All Rights Resevered</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className={styles.darkUnderline}></div> */}
    </motion.header>
  );
};

export default Header;
