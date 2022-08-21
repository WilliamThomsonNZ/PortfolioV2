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
import ProjectHero from "../../../components/projectHero";

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
    "Services included implementing a headless drop-shipping solution to sell brand merchandise, building a custom smart contract, designing and developing an immersive web experience, Metamask and   walletConnect wallet integration, Art generation and IPFS metadata hosting.";

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      key={"reducedToClearCase"}
    >
      <Head>
        <title>Will - Reduced to Clear</title>
        <meta name="description" content="Will - Reduced to Clear" />
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
        name={"REDUCED TO CLEAR"}
        link={"https://www.reducedtoclear.wtf/"}
        description={pageDescription}
        roles={[
          "WEB DEVELOPMENT",
          "UI/UX DESIGN",
          "SMART CONTRACT DEVELOPMENT",
          "WEB3 INTEGRATION",
        ]}
        bannerImg={"/reducedBanner.png"}
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
          <Image src={"/rtc0.png"} width={1500} height={800} />
        </motion.div>
        <motion.div
          className={styles.seccondImage}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <Image src={"/reduced2.png"} width={1500} height={838.12} />
        </motion.div>
        <motion.div
          className={styles.thirdImage}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <Image src={"/reduced3.png"} width={1500} height={838.12} />
        </motion.div>
        <motion.div
          className={styles.seccondImage}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <Image src={"/reduced4.png"} width={1500} height={838.12} />
        </motion.div>
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
