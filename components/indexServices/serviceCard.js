import React, { useState, useEffect } from "react";
import styles from "./indexServices.module.scss";
import { motion } from "framer-motion";
import { serviceVariants, desktopServiceVariants } from "../../FramerVariants";
import useWindowWidth from "../../utils/useWindowWidth";
const ServiceCard = ({ service, index, darkMode }) => {
  const [isOpen, setIsOpen] = useState(index == 0 ? true : false);
  const width = useWindowWidth(200);
  let variants = serviceVariants;
  //TODO: Create a hook to handle window width changing.
  return (
    <>
      <motion.div
        className={`${styles.underline} ${
          darkMode ? styles.darkMode : undefined
        }`}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      ></motion.div>
      <motion.article
        className={styles.serviceContainer}
        animate={
          isOpen
            ? {
                height: "auto",
                transition: {
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                },
              }
            : width > 1000
            ? {
                height: 110,
                transition: {
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                  delay: 0.7,
                },
              }
            : {
                height: 62,
                transition: {
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                  delay: 0.7,
                },
              }
        }
      >
        <div className={styles.serviceTop}>
          <h6 className={styles.serviceTitle}> {service.name}</h6>
          <button
            className={styles.servicesButtonMobile}
            onClick={(e) => setIsOpen((state) => !state)}
          >
            <span className={styles.upperLine}></span>
            <motion.span
              variants={serviceVariants.serviceButton}
              className={styles.lowerLine}
              initial={"initial"}
              animate={isOpen ? "open" : "close"}
            ></motion.span>
          </button>
          <motion.div
            className={styles.desktopImage}
            variants={variants.descriptions}
            initial={"initial"}
            animate={isOpen ? "open" : "close"}
          ></motion.div>
        </div>
        <motion.p
          className={styles.mobileDescription}
          variants={variants.descriptions}
          initial={"initial"}
          animate={isOpen ? "open" : "close"}
        >
          {service.initialDescription}
        </motion.p>
        <div className={styles.serviceImages}>
          <div>
            {" "}
            <p className={styles.desktopDescription}>
              {service.initialDescription}
            </p>
            <motion.div
              className={styles.image}
              variants={variants.descriptions}
              initial={"initial"}
              animate={isOpen ? "open" : "close"}
            ></motion.div>
          </div>

          <div className={styles.moreInformation}>
            <motion.p
              className={styles.hiddenDescription}
              variants={variants.descriptions}
              initial={"initial"}
              animate={isOpen ? "open" : "close"}
            >
              {service.largeDescription}
            </motion.p>
          </div>
        </div>
        <button
          className={`${styles.servicesButtonMobile} ${styles.servicesButtonDesktop}`}
          onClick={(e) => setIsOpen((state) => !state)}
        >
          <span className={styles.upperLine}></span>
          <motion.span
            variants={serviceVariants.serviceButton}
            className={styles.lowerLine}
            initial={"initial"}
            animate={isOpen ? "open" : "close"}
          ></motion.span>
        </button>
      </motion.article>
    </>
  );
};

export default ServiceCard;
