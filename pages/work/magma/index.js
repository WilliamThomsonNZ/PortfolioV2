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
        <title>Will - MAGMA</title>
        <meta name="description" content="Will - MAGMA" />
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
                  MAGMA
                </motion.span>
              </div>
              {/* <div className={styles.headingTextContainer}>
                <motion.span
                  className={styles.heading}
                  variants={ProjectVariants.headingtext}
                >

                </motion.span>
              </div> */}

              <motion.a
                href={"https://www.magmanft.io/"}
                target="_blank"
                className={styles.arrowLink}
                rel={"noreferrer"}
                variants={ProjectVariants.a}
              >
                <LinkArrow />
              </motion.a>
            </motion.div>
            <motion.p
              className={styles.projectDescription}
              variants={ProjectVariants.description}
            >
              Basik collective is a lifestyle and photography brand pushing the
              idea of escaping the comfort zone. The initial phase of this
              project was to design and develop a minimalist coming soon landing
              page. The main functionality on this page was to collect emails
              for an email list. This project is in progress and will be
              releasing a headless drop-shipping service to sell photography
              prints. We will also be implementing a blog powered by Contentful.
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
                MAGMA Website
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
                Astra
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
                <motion.span
                  variants={ProjectVariants.infoText}
                  whileInView={"whileInView"}
                  viewport={{ once: true }}
                >
                  Web3 Integration
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
        <Link href={"/work/oceans"}>
          <a>
            <span className={styles.nextName}>Oceans by Erin Fleming</span>
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
