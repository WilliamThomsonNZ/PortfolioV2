import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/individualProject.module.scss";
import LinkArrow from "../../../assets/LinkArrowNew.svg";
import { useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { ProjectVariants } from "../../../FramerVariants";
export default function Projects() {
  return (
    <>
      <Head>
        <title>Will - Oceans by Erin Fleming</title>
        <meta name="description" content="Oceans by Erin Fleming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main initial={"initial"} animate={"animate"} exit={"exit"}>
        <div className={styles.heroOuterContainer}>
          <section className={styles.heroContent}>
            <motion.div variants={ProjectVariants.headingTextContainer}>
              <div className={styles.headingTextContainer}>
                <motion.span
                  className={styles.heading}
                  variants={ProjectVariants.headingtext}
                >
                  Oceans
                </motion.span>
              </div>
              <div className={styles.headingTextContainer}>
                <motion.span
                  className={styles.heading}
                  variants={ProjectVariants.headingtext}
                >
                  by Erin
                </motion.span>
              </div>
              <div className={styles.headingTextContainer}>
                <motion.span
                  className={styles.heading}
                  variants={ProjectVariants.headingtext}
                >
                  Fleming
                </motion.span>
              </div>
            </motion.div>

            <motion.a
              href={"#"}
              target="_blank"
              className={styles.arrowLink}
              variants={ProjectVariants.a}
            >
              <LinkArrow />
            </motion.a>
            <motion.p
              className={styles.projectDescription}
              variants={ProjectVariants.description}
            >
              Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
              expetendis in mei. Mei an pericula euripidis hinc partem ei est.
              Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
              tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.
              Mea facilisis urbanitas moderatius id. Vis ei rationibus
              definiebas.
            </motion.p>
          </section>
          <div className={styles.heroImage}></div>
        </div>
        <section className={styles.informationContainer}>
          <div className={styles.projectInfo}>
            <div className={styles.projectStat}>
              <span>01. Date</span>
              <span>15 January, 2021</span>
            </div>
            <div className={styles.projectStat}>
              <span>02. Project</span>
              <span>Oceans by Erin Fleming</span>
            </div>
            <div className={styles.projectStat}>
              <span>03. Client</span>
              <span>Erin Fleming</span>
            </div>
            <div className={styles.projectStat}>
              <span>04. Services</span>
              <div className={styles.services}>
                <span>Smart Contract Development</span>
                <span>Frontend Dapp Development</span>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}></div>
        </section>
      </motion.main>
    </>
  );
}
