import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/individualProject.module.scss";
import LinkArrow from "../../../assets/LinkArrowLarge.svg";
import Footer from "../../../components/footer";
import { useEffect, useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { ProjectVariants } from "../../../FramerVariants";
import Header from "../../../components/header";
import { useInView } from "react-intersection-observer";
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
    <>
      <Head>
        <title>Will - Shadow Labs</title>
        <meta name="description" content="Will - Shadow Labs" />
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
                  Shadow
                </motion.span>
              </div>
              <div className={styles.headingTextContainer}>
                <motion.span
                  className={styles.heading}
                  variants={ProjectVariants.headingtext}
                >
                  Labs
                </motion.span>
              </div>

              <motion.a
                href={"https://shadow-labs.xyz/"}
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
              Shadow Labs is Web3 agency offering services in marketing,
              development, community management, web3 integration and strategic
              consulting. I was brought on to build out the initial coming soon
              page.
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
                02 May, 2022
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
                Shadow Labs Coming Soon
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
                03. Team
              </motion.span>
              <motion.span
                variants={ProjectVariants.infoText}
                whileInView={"whileInView"}
                viewport={{ once: true }}
              >
                Shadow Labs
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
                  Website Development
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
      <motion.div
        className={styles.nextProjectContainer}
        vairants={ProjectVariants.nextProject}
        initial={"initial"}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        <Link href={"/work/basik"}>
          <a>
            <span className={styles.nextName}>Basik Collective</span>
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
      </motion.div>
      <Footer />
    </>
  );
}
