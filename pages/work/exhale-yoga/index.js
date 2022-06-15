import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/individualProject.module.scss";
import LinkArrow from "../../../assets/LinkArrowLarge.svg";
import Footer from "../../../components/footer";
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
        <title>Will - Reduced to Clear</title>
        <meta name="description" content="Will - Reduced to Clear" />
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
                  Exhale
                </motion.span>
              </div>
              <div className={styles.headingTextContainer}>
                <motion.span
                  className={styles.heading}
                  variants={ProjectVariants.headingtext}
                >
                  Yoga
                </motion.span>
              </div>
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
              Exhale Yoga is the rebrand of a popular yoga studio based in
              Napier, New Zealand. The requirements for the website included
              mindbody integration (yoga management software ) that allowed
              customers to book and mange their classes, content management set
              up to allow editing of key elements across the website and to
              display general information. My role in the rebrand was to
              redesign and develop the website.
            </motion.p>
          </section>
          <motion.div
            className={styles.mainProjectImageContianer}
            variants={ProjectVariants.headingtext}
            initial={"initial"}
            animate={"animate"}
          >
            <Image
              src={"/portfolioProject.jpg"}
              width={1200}
              height={1500}
              objectFit={"contain"}
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
                03 March, 2022
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
                Exhale Yoga Website
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
                Victoria &amp; Liam
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
                  Website development
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
        <div className={styles.fullImageContainer}>
          <motion.div
            variants={ProjectVariants.infoImage}
            whileInView={"whileInView"}
            viewport={{ once: true }}
            className={styles.fullWidthImage}
          ></motion.div>
        </div>
        <div className={styles.fullImageContainer}>
          <motion.div
            variants={ProjectVariants.infoImage}
            whileInView={"whileInView"}
            viewport={{ once: true }}
            className={styles.fullWidthImage}
          ></motion.div>
        </div>
        <div className={styles.fullImageContainer}>
          <motion.div
            variants={ProjectVariants.infoImage}
            whileInView={"whileInView"}
            viewport={{ once: true }}
            className={styles.fullWidthImage}
          ></motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
