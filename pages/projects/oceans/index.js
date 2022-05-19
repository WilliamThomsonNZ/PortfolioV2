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
          <motion.div
            layoutId="0"
            className={styles.heroImage}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 1,
            }}
          >
            <Image
              src={"/portfolioProject.jpg"}
              width={1000}
              height={1350}
              className={styles.projectImageDesktop}
            />
          </motion.div>
        </div>
        <section
          className={`${styles.informationContainer} ${
            inView ? styles.darkMode : undefined
          }`}
        >
          <motion.div
            className={styles.projectInfo}
            ref={ref}
            variants={ProjectVariants.projectInfo}
            initial={"initial"}
          >
            <div className={styles.projectStat}>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                01. Date
              </motion.span>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                15 January, 2021
              </motion.span>
            </div>
            <motion.div
              className={styles.underline}
              variants={ProjectVariants.underline}
              whileInView={"whileInView"}
              viewport={{ once: true }}
            ></motion.div>
            <div className={styles.projectStat}>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                02. Project
              </motion.span>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                Oceans by Erin Fleming
              </motion.span>
            </div>
            <motion.div
              className={styles.underline}
              variants={ProjectVariants.underline}
              whileInView={"whileInView"}
              viewport={{ once: true }}
            ></motion.div>
            <div className={styles.projectStat}>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                03. Client
              </motion.span>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                Erin Fleming
              </motion.span>
            </div>
            <motion.div
              className={styles.underline}
              variants={ProjectVariants.underline}
              whileInView={"whileInView"}
              viewport={{ once: true }}
            ></motion.div>
            <div className={styles.projectStat}>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                04. Services
              </motion.span>
              <div className={styles.services}>
                <motion.span
                  variants={ProjectVariants.infoText}
                  whileInView={"whileInView"}
                  viewport={{ once: true }}
                >
                  Smart Contract Development
                </motion.span>
                <motion.span
                  variants={ProjectVariants.infoText}
                  whileInView={"whileInView"}
                  viewport={{ once: true }}
                >
                  Frontend Dapp Development
                </motion.span>
                <motion.span
                  variants={ProjectVariants.infoText}
                  whileInView={"whileInView"}
                  viewport={{ once: true }}
                >
                  UI/UX Design
                </motion.span>
              </div>
            </div>
            <motion.div
              className={styles.underline}
              variants={ProjectVariants.underline}
              whileInView={"whileInView"}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
          <div className={styles.infoSectionImageContainer}>
            <motion.div
              className={styles.image}
              variants={ProjectVariants.infoImage}
              whileInView={"whileInView"}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </section>
        <div className={styles.fullWidthImage}></div>
      </motion.main>
    </>
  );
}
