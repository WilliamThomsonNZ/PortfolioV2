import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styles from "./button.module.scss";
const Button = ({ cb = () => {}, label }) => {
  const [hover, setHover] = useState(false);
  const arrowVariants = {
    stopHover: {
      x: -7,
      y: 0,
      rotate: 45,
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
        infinite: true,
      },
    },
    startHover: {
      x: 25,
      y: -32,
      rotate: 45,
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  };
  return (
    <motion.button
      className={styles.button}
      onClick={cb}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <span>{label}</span>{" "}
      <div className={styles.arrowContainer}>
        <motion.div
          className={styles.arrowSlider}
          variants={arrowVariants}
          animate={hover ? "startHover" : "stopHover"}
        >
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default Button;
