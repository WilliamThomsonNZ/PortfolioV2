import React, { useState, useEffect } from "react";
import styles from "./indexServices.module.scss";
import { motion } from "framer-motion";
import {
  serviceVariants,
  desktopServiceVariants,
  ProjectVariants,
} from "../../FramerVariants";
import useWindowWidth from "../../utils/useWindowWidth";
const ServiceCard = ({ service, index, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth(200);
  let variants = serviceVariants;
  &#92;&#92;TODO: Create a hook to handle window width changing.

  return (
    <>
      <motion.div
        className={`${styles.underline} ${
          darkMode ? styles.darkMode : undefined
        }`}
        variants={ProjectVariants.underline}
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
          <motion.h6
            className={styles.serviceTitle}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            {" "}
            {service.name}
          </motion.h6>
          <motion.button
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
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
          </motion.button>
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
            <motion.p
              variants={ProjectVariants.infoText}
              whileInView={"whileInView"}
              viewport={{ once: true }}
              className={styles.desktopDescription}
            >
              {service.initialDescription}
            </motion.p>
            <motion.div
              className={styles.image}
              variants={variants.descriptions}
              whileInView={index == 1 ? "whileInView" : undefined}
              initial={"initial"}
              animate={isOpen ? "open" : "close"}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          {/* 
          <div className={styles.moreInformation}>
            <motion.p
              className={styles.hiddenDescription}
              variants={variants.descriptions}
              initial={"initial"}
              animate={isOpen ? "open" : "close"}
              whileInView={index == 1 ? "open" : undefined}
              viewport={{ once: true }}
            >
              {service.largeDescription}
            </motion.p>
          </div> */}
        </div>
        <button
          className={`${styles.servicesButtonMobile} ${styles.servicesButtonDesktop}`}
        >
          &#92;&#92;
        </button>
      </motion.article>
    </>
  );
};

export default ServiceCard;
