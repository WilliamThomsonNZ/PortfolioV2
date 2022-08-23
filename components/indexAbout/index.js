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
      <div className={styles.topSection}>
        <div className={styles.desktopTop}>
          <motion.h6
            className={styles.title}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            <span className={styles.number}>&#92;&#92;03</span>About
          </motion.h6>

          <motion.p
            className={styles.desktopDescription}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            If you have got to this point , you are probably ready to find out
            more about me. So Hey! I’m Will, a passionate web3 developer and
            strategist currently based in Auckland, New Zealand. I help projects
            achieve success through performant decentralised application
            development, strong understanding of user motivation and the ability
            to advise on UI/UX design decisions to ensure user’s are engaged and
            satisfied. <br /> 
            <br /> Non fungible tokens ( NFTs ) are here to stay and will play a
            major part in our online identities. My goal is to integrate this
            technology into communities and businesses to improve the users
            overall experience. By focusing directly on the user, I am able to
            understand their motivation and create an experience and product
            that is bespoke and engaging.
            <br />
            <br />
            If you would like to chat about your project/vision/idea or just
            want to have a conversation around how this technology can improve
            your business, Shoot me a message.
          </motion.p>

          <Link href="/contact">
            <motion.a
              variants={ProjectVariants.infoText}
              className={styles.getInTouch}
              whileInView={"whileInView"}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.a>
          </Link>
        </div>
      </div>
      <motion.div
        className={styles.imageContainer}
        variants={ProjectVariants.infoText}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        <Image src={"/will2.JPG"} height={1000} width={1000} />
      </motion.div>
      <motion.p
        variants={ProjectVariants.infoText}
        whileInView={"whileInView"}
        viewport={{ once: true }}
        className={styles.mobileDescription}
      >
        If you have got to this point , you are probably ready to find out more
        about me. So Hey! I’m Will, a passionate web3 developer and strategist
        currently based in Auckland, New Zealand. I help projects achieve
        success through performant decentralised application development, strong
        understanding of user motivation and the ability to advise on UI/UX
        design decisions to ensure user’s are engaged and satisfied. <br /> 
        <br /> Non fungible tokens ( NFTs ) are here to stay and will play a
        major part in our online identities. My goal is to integrate this
        technology into communities and businesses to improve the users overall
        experience. By focusing directly on the user, I am able to understand
        their motivation and create an experience and product that is bespoke
        and engaging.
        <br />
        <br />
        If you would like to chat about your project/vision/idea or just want to
        have a conversation around how this technology can improve your
        business, Shoot me a message.
      </motion.p>
    </section>
  );
};

export default IndexAbout;
