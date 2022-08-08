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
import OrangeArrow from "../../../assets/orangeArrow.svg";
import OrangeDesktop from "../../../assets/orangeArrowDesktop.svg";
import Link from "next/link";
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
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      key={"reducedToClearCase"}
    >
      <Head>
        <title>Will - Reduced to Clear</title>
        <meta name="description" content="Will - Reduced to Clear" />
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
                  Reduced
                </motion.span>
              </div>
              <div className={styles.headingTextContainer}>
                <motion.span
                  className={styles.heading}
                  variants={ProjectVariants.headingtext}
                >
                  to Clear
                </motion.span>
              </div>{" "}
              <motion.a
                href={"https://www.reducedtoclear.wtf/"}
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
              With a heavy focus on satire content, RTC aims to be the light at
              the end of the tunnel for the falling NFT market. My role as the
              lead developer included implementing a headless drop-shipping
              solution to sell brand merchandise, building a custom smart
              contract, designing and developing an immersive web experience,
              Metamask and walletConnect wallet integration, Art generation and
              IPFS metadata hosting.
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
                10 June, 2022
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
                Reduced to Clear NFT
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
                RTC
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
                  Website Development
                </motion.span>
                <motion.span
                  variants={ProjectVariants.infoText}
                  whileInView={"whileInView"}
                  viewport={{ once: true }}
                >
                  UI/UX Design
                </motion.span>
                <motion.span
                  variants={ProjectVariants.infoText}
                  whileInView={"whileInView"}
                  viewport={{ once: true }}
                >
                  NFT Art Generation
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
          <motion.div
            className={styles.infoSectionImageContainer}
            variants={ProjectVariants.infoText}
            whileInView={"whileInView"}
            viewport={{ once: true }}
          >
            <Image
              src={"/rtcLogo.png"}
              width={550}
              height={535}
              className={styles.infoImage}
            />
          </motion.div>
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
      <div className={styles.nextProjectContainer}>
        <Link href={"/work/shadowlabs"}>
          <a>
            <span className={styles.nextName}>Shadow Labs</span>
            <div className={styles.nextContainer}>
              <span className={styles.nextText}>NEXT PROJECT</span>
              <div className={styles.arrowContainer}>
                <OrangeArrow />
              </div>
              <div className={styles.arrowContainerDesktop}>
                <OrangeDesktop />
              </div>
            </div>
          </a>
        </Link>
      </div>
      <Footer />
    </motion.div>
  );
}
