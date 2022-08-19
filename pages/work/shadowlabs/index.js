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
import ProjectHero from "../../../components/projectHero";
import Link from "next/link";
export default function Projects() {
  // const ref = useRef()
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
    " Web development for Shadow Lab's initial landing page. Shadow Labs is Web3 agency offering services in marketing, development,   community management, web3 integration and strategic consulting";

  return (
    <>
      <Head>
        <title>Will - Shadow Labs</title>
        <meta name="description" content="Will - Shadow Labs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <ProjectHero
        name={"SHADOW LABS"}
        link={"https://shadow-labs.xyz/"}
        description={pageDescription}
        roles={["WEB DEVELOPMENT"]}
        bannerImg={"/magmaBanner.jpg"}
        isShadowLabs={true}
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
          <Image src={"/shadow1.png"} width={1500} height={800} />
        </motion.div>
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
