import React from "react";
import Image from "next/image";
import styles from "./indexAbout.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectVariants } from "../../FramerVariants";
import Lines from "../../assets/lines.svg";
const IndexAbout = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.backgroundAssets}>
        <Lines />
      </div>

      <div className={styles.topSection}>
        <div className={styles.desktopTop}>
          <motion.h6
            className={styles.title}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            About
          </motion.h6>
          <Link href={"/about"}>
            <motion.div
              className={styles.buttonContainer}
              variants={ProjectVariants.infoText}
              whileInView={"whileInView"}
              viewport={{ once: true }}
            >
              <span className={styles.buttonLabel}>more</span>
              <Image
                src={"/right-arrow.png"}
                layout={"fixed"}
                height={30}
                width={30}
                className={styles.arrowImage}
              />
            </motion.div>
          </Link>
          <motion.p
            className={styles.desktopDescription}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            Our intelligent digital strategy and a pragmatic and thoughtful
            approach to solving business calls deliver a successful framework
            for both you and your audience. business calls deliver a successful
            framework for both you and I. <br />
            <br /> There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don&apos;t look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn&apos;t anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet
          </motion.p>
        </div>

        <Link href={"/about"}>
          <motion.div
            className={`${styles.buttonContainer} ${styles.desktopButton}`}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            <span className={styles.buttonLabel}>more</span>
            <Image
              src={"/right-arrow.png"}
              layout={"fixed"}
              height={30}
              width={30}
              className={styles.arrowImage}
            />
          </motion.div>
        </Link>
      </div>
      <motion.div
        className={styles.imageContainer}
        variants={ProjectVariants.infoText}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        <Image
          src={"/portfolioProject.jpg"}
          layout={"responsive"}
          height={600}
          width={700}
        />
      </motion.div>
      <p className={styles.mobileDescription}>
        Our intelligent digital strategy and a pragmatic and thoughtful approach
        to solving business calls deliver a successful framework for both you
        and your audience. business calls deliver a successful framework for
        both you and{" "}
      </p>
    </section>
  );
};

export default IndexAbout;
