import React from "react";
import styles from "./socialProof.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialVariants } from "../../FramerVariants";
const SocialProof = () => {
  return (
    <section className={styles.socialProof}>
      <motion.div
        className={styles.textContainer}
        variants={socialVariants.headingText}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <span className={styles.text}>
          TEAMS I’VE <span className={styles.strikeThrough}>WORKED</span> WITH
        </span>
      </motion.div>
      <motion.div
        className={styles.teamContainer}
        variants={socialVariants.iconsContainer}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.team}
          variants={socialVariants.icons}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <a
            href={"https://twitter.com/reducedtoclear_"}
            className={`${styles.teamImage} ${styles.rtc}`}
            rel={"noreferrer"}
            target="_blank"
          >
            <Image
              src={"/rtcLogo.png"}
              width={200}
              height={200}
              alt={"Reduced to clear Logo"}
            />
          </a>
        </motion.div>
        <motion.div
          className={styles.team}
          variants={socialVariants.icons}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <a
            href={"https://twitter.com/Magma_nft"}
            className={`${styles.teamImage} ${styles.magma}`}
            rel={"noreferer"}
            target="_blank"
          >
            <Image
              src={"/magmaLogo.png"}
              width={350}
              height={133}
              alt={"MAGMA logo"}
            />
          </a>
        </motion.div>
        <motion.div
          className={styles.team}
          variants={socialVariants.icons}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <a
            href={"https://twitter.com/_shadowlabs"}
            className={`${styles.teamImage} ${styles.shadow}`}
            target="_blank"
            rel={"noreferer"}
          >
            <Image
              src={"/shadowlabs.png"}
              width={300}
              height={161}
              alt={"Shadow Labs Logo"}
            />
          </a>
        </motion.div>
        <motion.div
          className={styles.team}
          variants={socialVariants.icons}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <a
            href={"https://twitter.com/reducedtoclear_"}
            className={`${styles.teamImage} ${styles.basik}`}
            rel={"noreferer"}
            targe={"_blank"}
          >
            basik
            <br /> collective
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SocialProof;
