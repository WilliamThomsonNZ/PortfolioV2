import React from "react";
import { motion } from "framer-motion";
import styles from "./intro.module.scss";
import { introVariants } from "../../FramerVariants";
const Intro = ({ setLoading }) => {
  return (
    <motion.div className={styles.introContainer}>
      <div className={styles.innerContainer}>
        <motion.div
          className={styles.text}
          variants={introVariants.introContainer}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          key={"text"}
        >
          <motion.span className={styles.span} variants={introVariants.span}>
            Where&nbsp;
          </motion.span>
          <motion.span className={styles.span} variants={introVariants.span}>
            there's&nbsp;
          </motion.span>
          <motion.span className={styles.span} variants={introVariants.span}>
            a&nbsp;
          </motion.span>
        </motion.div>
        <motion.div
          className={styles.text}
          variants={introVariants.introContainer}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <motion.span className={`${styles.span} ${styles.spanWill}`}>
            WILL,&nbsp;
          </motion.span>
        </motion.div>

        <motion.div
          className={styles.text}
          variants={introVariants.introContainer2}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <motion.span className={styles.span} variants={introVariants.span}>
            there's&nbsp;
          </motion.span>
          <motion.span className={styles.span} variants={introVariants.span}>
            a&nbsp;
          </motion.span>
          <motion.span
            className={styles.span}
            variants={introVariants.span}
            onAnimationComplete={() => {
              console.log("hi");
              setTimeout(() => {
                setLoading(true);
              }, 1000);
            }}
          >
            way.
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
