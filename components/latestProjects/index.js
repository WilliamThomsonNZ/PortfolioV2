import React, { useRef, useState, useEffect } from "react";
import styles from "./latestProjects.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../../utils/useWindowWidth";
import { projectDisplayVariants } from "../../FramerVariants";
const LatestProjects = () => {
  const viewport = useWindowWidth(200);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const [largeImages, setLargeImages] = useState(false);
  const [showMouse, setShowMouse] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });
  function handleMouseMove(e) {
    setMousePosition({ left: e.pageX, top: e.pageY });
  }
  function handleMouse(enter) {
    if (enter) {
      setShowMouse(true);
    } else {
      setShowMouse(false);
    }
  }
  useEffect(() => {
    console.log(viewport, width);
    if (typeof window != undefined)
      setLargeImages(window.innerWidth > 1400 ? true : false);
    setShowProjects(true);
  }, []);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [showProjects]);
  console.log(viewport);
  const projects = [
    {
      name: "Oceans",
      url: "/projects/oceans",
      image: "../../assets/portfolioProject.jpg",
      width: largeImages ? 700 : 500,
    },
    {
      name: "Basik",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: largeImages ? 500 : 300,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: largeImages ? 600 : 400,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: largeImages ? 700 : 500,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: largeImages ? 500 : 300,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: largeImages ? 600 : 400,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: largeImages ? 700 : 500,
    },
  ];
  return (
    <motion.section className={styles.sectionContainer}>
      <motion.h2 className={styles.title}>Latest Projects</motion.h2>
      <motion.div
        className={styles.carousel}
        ref={carouselRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => handleMouse(true)}
        onMouseLeave={(e) => handleMouse(false)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragPropagation
          className={styles.innerCarousel}
        >
          {showProjects &&
            projects.map((project, index) => (
              <motion.article
                key={index}
                className={styles.project}
                style={{ minWidth: project.width }}
              >
                {/* <Image
                src={"/portfolioProject.jpg"}
                width={400}
                height={400}
                className={styles.projectImage}
              /> */}
                <motion.div
                  layoutId={index.toString()}
                  variants={projectDisplayVariants.imageVariants}
                  transition={{
                    duration: 0,
                  }}
                >
                  <Image
                    src={"/portfolioProject.jpg"}
                    width={project.width}
                    height={project.width}
                    className={styles.projectImageDesktop}
                  />
                </motion.div>
                <div className={styles.projectInfo}>
                  <h6 className={styles.projectTitle}>{project.name}</h6>
                  <Link href={project.url} className={styles.projectLink}>
                    <Image
                      src={"/right-arrow.png"}
                      layout={"fixed"}
                      width={30}
                      height={30}
                      className={styles.arrowImage}
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.hoverCursor}
        style={{ left: mousePosition.left, top: mousePosition.top }}
        animate={showMouse ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.div
          className={styles.backHex}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <svg width="121px" height="125px" viewBox="0 0 121 125">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-1135.000000, -1047.000000)"
                stroke="black"
              >
                <g transform="translate(91.000000, 177.000000)">
                  <g transform="translate(1017.532346, 844.532346)">
                    <path
                      d="M86.9676538,25.045004 L141.460267,56.5063289 L141.460267,119.428979 L86.9676538,150.890304 L32.4750406,119.428979 L32.4750406,56.5063289 L86.9676538,25.045004 Z"
                      id="Polygon-Copy"
                      transform="translate(86.967654, 87.967654) rotate(-251.000000) translate(-86.967654, -87.967654) "
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.div
          className={styles.frontHex}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <svg width="122px" height="118px" viewBox="0 0 122 118">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-1135.000000, -1050.000000)" fill="black">
                <g transform="translate(91.000000, 177.000000)">
                  <g transform="translate(1017.532346, 844.532346)">
                    <polygon
                      transform="translate(87.467654, 87.467654) rotate(-221.000000) translate(-87.467654, -87.467654) "
                      points="87.4676538 25.4676538 141.161229 56.4676538 141.161229 118.467654 87.4676538 149.467654 33.7740787 118.467654 33.7740787 56.4676538"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.span>DRAG</motion.span>
      </motion.div>
    </motion.section>
  );
};

export default LatestProjects;
