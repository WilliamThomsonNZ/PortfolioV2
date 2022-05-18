import React, { useRef, useState, useEffect } from "react";
import styles from "./latestProjects.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LatestProjects = () => {
  const projects = [
    {
      name: "Oceans",
      url: "/test",
      image: "../../assets/portfolioProject.jpg",
    },
    { name: "Basik", url: "/test", image: "../../assets/portfolioProject.jpg" },
    { name: "test", url: "/test", image: "../../assets/portfolioProject.jpg" },
    { name: "test", url: "/test", image: "../../assets/portfolioProject.jpg" },
    { name: "test", url: "/test", image: "../../assets/portfolioProject.jpg" },
    { name: "test", url: "/test", image: "../../assets/portfolioProject.jpg" },
    { name: "test", url: "/test", image: "../../assets/portfolioProject.jpg" },
  ];
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.title}>Latest Projects</h2>
      {/* <div className={styles.controlContainer}>
        <button className={styles.prevArrow}>prev</button>
        <button className={styles.nextArrow}>next</button>
      </div> */}
      <motion.div className={styles.carousel} ref={carouselRef}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragPropagation
          className={styles.innerCarousel}
        >
          {projects.map((project, index) => (
            <motion.article key={index} className={styles.project}>
              <Image
                src={"/portfolioProject.jpg"}
                width={400}
                height={400}
                className={styles.projectImage}
              />
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
    </section>
  );
};

export default LatestProjects;
