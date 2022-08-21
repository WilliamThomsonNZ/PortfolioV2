import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/individualProject.module.scss";
import LinkArrow from "../../../assets/LinkArrowLarge.svg";
import ProjectHero from "../../../components/projectHero";
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
  const pageDescription =
    "MAGMA is an exclusive club of dedicated NFT enthusiasts, Artists, Launchpads & VCs. Development for MAGMA Landing page and Web3 integration for MAGMA Pass mint. Full stack development for MAGMA Connect, a networking tool where memebers are able create profiles and connect.";
  return (
    <>
      <Head>
        <title>Will - MAGMA</title>
        <meta name="description" content="Will - MAGMA" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <ProjectHero
        name={"MAGMA"}
        link={"https://www.magmanft.io/"}
        description={pageDescription}
        roles={["WEB DEVELOPMENT", "WEB3 INTEGRATION"]}
        bannerImg={"/magmaBanner.jpg"}
      />
      <motion.main
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        className={styles.pageContainer}
      >
        <motion.div
          className={styles.firstImage}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <Image src={"/magma1.png"} width={1500} height={838.12} />
        </motion.div>
        <motion.div
          className={styles.seccondImage}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <Image src={"/magma2.png"} width={1500} height={838.12} />
        </motion.div>
        <motion.div
          className={styles.thirdImage}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <Image src={"/magma4.png"} width={1500} height={838.12} />
        </motion.div>
      </motion.main>
      <motion.div
        className={styles.nextProjectContainer}
        vairants={ProjectVariants.nextProject}
        initial={"initial"}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        <Link href={"/work/reduced-to-clear"}>
          <a>
            <span className={styles.nextName}>Reduced to clear</span>
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
