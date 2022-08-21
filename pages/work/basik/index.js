import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/individualProject.module.scss";

import Footer from "../../../components/footer";
import { useEffect, useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { ProjectVariants } from "../../../FramerVariants";
import Header from "../../../components/header";
import { useInView } from "react-intersection-observer";
import OrangeArrow from "../../../assets/orangeArrow.svg";
import ProjectHero from "../../../components/projectHero";
import OrangeDesktop from "../../../assets/orangeArrowDesktop.svg";
import Link from "next/link";

export default function Projects() {
  useEffect(() => {
    document.body.classList.add("light");
  }, []);
  const pageDescription =
    "Basik collective is a lifestyle and photography brand pushing the idea of escaping the comfort zone. The initial phase of this  project was to design and develop a minimalist coming soon landing page.";

  return (
    <>
      <Head>
        <title>Will - Basik Collective</title>
        <meta name="description" content="Will - Basik Collective" />
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
        name={"Basik Collective"}
        link={"https://www.basik.co.nz/"}
        description={pageDescription}
        roles={["WEB DEVELOPMENT", "UX/UI DESIGN"]}
        bannerImg={"/basik.jpg"}
        isShadowLabs={false}
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
          <Image src={"/basik1.png"} width={1500} height={800} />
        </motion.div>
      </motion.main>
      <motion.div
        className={styles.nextProjectContainer}
        vairants={ProjectVariants.nextProject}
        initial={"initial"}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        <Link href={"/work/magma"}>
          <a>
            <span className={styles.nextName}>MAGMA</span>
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
