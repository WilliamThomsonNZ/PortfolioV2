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
import Header from "../../../components/header";
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
  useEffect(() => {
    document.body.classList.add("light");
  }, []);
  return (
    <>
      <Head>
        <title>Will - Oceans by Erin Fleming</title>
        <meta name="description" content="Oceans by Erin Fleming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
                href={"https://www.oceans.photos/"}
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
              Oceans by Erin Fleming is the genesis photography NFT collection
              for Erin Fleming’s Photography. A collection of 20 photos
              capturing some of New Zealand’s most beautiful and rugged
              coastlines. My role included designing and developing the website,
              implementing the gas efficient ERC721 smart contract , Web3
              integration and IPFS metadata hosting.
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
