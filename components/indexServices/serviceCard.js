import React, { useState } from "react";
import styles from "./indexServices.module.scss";
import { motion } from "framer-motion";
import { serviceVariants, desktopServiceVariants } from "../../FramerVariants";
const ServiceCard = ({ service, index }) => {
  const [isOpen, setIsOpen] = useState(index == 0 ? true : false);
  //TODO: Create a hook to handle window width changing.
  return (
    <>
      <motion.div
        className={styles.underline}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      ></motion.div>
      <motion.article
        className={styles.serviceContainer}
        variants={serviceVariants.serviceContainer}
        initial={"initial"}
        animate={isOpen ? "open" : "close"}
      >
        <div className={styles.serviceTop}>
          <h6 className={styles.serviceTitle}> {service.name}</h6>
          <p className={styles.desktopDescription}>
            {service.initialDescription}
          </p>
          <button
            className={styles.servicesButton}
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
        </div>
        <motion.p
          className={styles.mobileDescription}
          variants={serviceVariants.descriptions}
          initial={"initial"}
          animate={isOpen ? "open" : "close"}
        >
          {service.initialDescription}
        </motion.p>
        <div className={styles.serviceImages}>
          <div className={styles.desktopImage}></div>
          <div className={styles.moreInformation}>
            <motion.div
              className={styles.image}
              variants={serviceVariants.descriptions}
              initial={"initial"}
              animate={isOpen ? "open" : "close"}
            ></motion.div>
            <motion.p
              className={styles.hiddenDescription}
              variants={serviceVariants.descriptions}
              initial={"initial"}
              animate={isOpen ? "open" : "close"}
            >
              {service.largeDescription}
            </motion.p>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default ServiceCard;
