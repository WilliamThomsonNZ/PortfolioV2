import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/individualProject.module.scss";
import LinkArrow from "../../../assets/LinkArrowLarge.svg";
import { useEffect, useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { ProjectVariants } from "../../../FramerVariants";
import { useOnScreen } from "../../../utils";
import { useInView } from "react-intersection-observer";
export default function Projects() {
  // const ref = useRef();
  // const isVisible = useOnScreen(ref);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      // document.body.classList.add("darkMode");
      // document.body.classList.remove("lightkMode");
    } else {
      // document.body.classList.remove("darkMode");
      // document.body.classList.add("lightkMode");
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>Will - Oceans by Erin Fleming</title>
        <meta name="description" content="Oceans by Erin Fleming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        className={styles.pageContainer}
      >
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
              </div>{" "}
              <motion.a
                href={"#"}
                target="_blank"
                className={styles.arrowLink}
                variants={ProjectVariants.a}
              >
                <LinkArrow />
              </motion.a>
            </motion.div>
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
        <section
          className={`${styles.informationContainer} ${
            inView ? styles.darkMode : undefined
          }`}
        >
          <div className={styles.projectInfo} ref={ref}>
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
          <div className={styles.infoSectionImageContainer}>
            <div className={styles.image}></div>
          </div>
        </section>
        <div className={styles.fullWidthImage}></div>
      </motion.main>
    </>
  );
}
