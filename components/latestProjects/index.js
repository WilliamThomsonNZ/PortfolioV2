import React, { useRef, useState, useEffect } from "react";
import styles from "./latestProjects.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../../utils/useWindowWidth";
import { projectDisplayVariants, ProjectVariants } from "../../FramerVariants";
import Lines from "../../assets/lines.svg";
const LatestProjects = () => {
  const viewport = useWindowWidth(200);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const [largeImages, setLargeImages] = useState(false);
  const [showMouse, setShowMouse] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const projects = [
    {
      name: "Reduced to Clear",
      url: "/work/reduced-to-clear",
      image: "/rtcLogo.png",
      width: largeImages ? 700 : 340,
    },
    {
      name: "Basik Collective",
      url: "/work/basik",
      image: "/basik.jpg",
      width: largeImages ? 500 : 300,
    },
    {
      name: "Oceans",
      url: "/work/oceans",
      image: "/oceans.jpg",
      width: largeImages ? 600 : 400,
    },
    {
      name: "Surfer Doodz",
      url: "/work/surfer-doodz",
      image: "/portfolioProject.jpg",
      width: largeImages ? 700 : 340,
    },
    {
      name: "Exhale Yoga",
      url: "/work/exhale-yoga",
      image: "/portfolioProject.jpg",
      width: largeImages ? 500 : 300,
    },
  ];
  const imageHover = {
    stopHover: {
      scale: 1,
      transition: {
        duration: 2,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    startHover: {
      scale: 1.1,
      transition: {
        duration: 2,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  };
  return (
    <motion.section className={styles.sectionContainer} id={"work"}>
      <motion.h2
        className={styles.title}
        variants={ProjectVariants.infoText}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        <span className={styles.number}>&#92;&#92;02</span>Latest Work
      </motion.h2>
      <motion.section
        className={styles.projectsContainer}
        variants={ProjectVariants.infoText}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        <Link href="/work/magma">
          <article className={styles.project}>
            <div className={styles.imageOuter}>
              <motion.div
                className={styles.imageInner}
                animate={isHovering2 ? "startHover" : "stopHover"}
                onHoverStart={(e) => setIsHovering2(true)}
                onHoverEnd={(e) => setIsHovering2(false)}
                variants={imageHover}
              >
                <Image
                  src={"/magmaPass.jpg"}
                  alt={"Reduced to Clear"}
                  width={1000}
                  height={1200}
                  objectFit={"cover"}
                  layout={"responsive"}
                />
              </motion.div>
            </div>
            <h2 className={styles.projectName}>MAGMA</h2>
          </article>
        </Link>
        <Link href="/work/basik">
          <article className={styles.project}>
            <div className={styles.imageOuter}>
              <motion.div
                className={styles.imageInner}
                variants={imageHover}
                animate={isHovering1 ? "startHover" : "stopHover"}
                onHoverStart={(e) => setIsHovering1(true)}
                onHoverEnd={(e) => setIsHovering1(false)}
              >
                <Image
                  src={"/basikLanding.jpg"}
                  alt={"Basik Collective Image"}
                  width={1000}
                  height={1200}
                  objectFit={"cover"}
                  layout={"responsive"}
                />{" "}
              </motion.div>
            </div>
            <h2 className={styles.projectName}>BASIK COLLECTIVE</h2>
          </article>
        </Link>
      </motion.section>
      <Link href={"/work"}>
        <a className={styles.moreWorkButton}>VIEW MORE</a>
      </Link>
    </motion.section>
  );
};

export default LatestProjects;
