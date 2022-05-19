import React, { useRef, useState, useEffect } from "react";
import styles from "./latestProjects.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../../utils/useWindowWidth";
import { projectDisplayVariants } from "../../FramerVariants";
const LatestProjects = () => {
  const viewport = useWindowWidth(200);
  const projects = [
    {
      name: "Oceans",
      url: "/projects/oceans",
      image: "../../assets/portfolioProject.jpg",
      width: 500,
    },
    {
      name: "Basik",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: 300,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: 400,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: 500,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: 300,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: 400,
    },
    {
      name: "test",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
      width: 500,
    },
  ];
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(viewport, width);
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  console.log(viewport);
  return (
    <motion.section className={styles.sectionContainer}>
      <motion.h2 className={styles.title}>Latest Projects</motion.h2>

      <motion.div className={styles.carousel} ref={carouselRef}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragPropagation
          className={styles.innerCarousel}
        >
          {projects.map((project, index) => (
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
    </motion.section>
  );
};

export default LatestProjects;
