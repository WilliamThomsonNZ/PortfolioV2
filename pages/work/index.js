import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/projects.module.scss";
import Header from "../../components/header";
import Link from "next/link";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { contactVariants } from "../../FramerVariants";
import { useState } from "react";
export default function Projects() {
  const projects = [
    {
      name: "Reduced to Clear",
      image: "/basik.jpg",
      link: "/work/reduced-to-clear",
      height: 827,
      width: 1240,
    },
    {
      name: "Magma",
      image: "/oceans.jpg",
      link: "/work/magma",
      height: 827,
      width: 1240,
    },
    {
      name: "Shadow Labs",
      image: "/testProjectImage2.jpg",
      link: "/work/shadow-labs",
      height: 850,
      width: 700,
    },
    {
      name: "Basik",
      image: "/testProjectImage.jpg",
      link: "/work/basik-collective",
      height: 1000,
      width: 800,
    },
    {
      name: "Oceans by Erin Fleming",
      image: "/testProjectImage.jpg",
      link: "/work/oceans",
      height: 1000,
      width: 1240,
    },
  ];

  return (
    <motion.div
      className={styles.workContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
    >
      <Head>
        <title>Will - Latest Work</title>
        <meta name="description" content="Will - Latest Work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header currentPage={"work"} />
      <main className={styles.pageContainer}>
        <motion.h1
          className={styles.contactHeading}
          variants={contactVariants.headingContainer}
          initial={"initial"}
          animate={"animate"}
        >
          <div className={styles.headingTextContainer}>
            <motion.span variants={contactVariants.headingText}>
              A COLLECTION OF MY
            </motion.span>
          </div>
          <div className={styles.headingTextContainer}>
            <motion.span variants={contactVariants.headingText}>
              LATEST WORK.
            </motion.span>
          </div>
        </motion.h1>
        <section className={styles.projectGrid}>
          {projects.map((project, index) => (
            <WorkTile
              title={project.name}
              image={project.image}
              link={project.link}
              width={project.width}
              height={project.height}
            />
          ))}
        </section>
        <Footer />
      </main>
    </motion.div>
  );
}

const WorkTile = ({ title, image, link, index, height, width }) => {
  const [isHovering, setIsHovering] = useState(false);
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

  const projectVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  };

  return (
    <Link href={link}>
      <motion.div
        className={styles.projectOuterContainer}
        initial={"initial"}
        whileInView={"animate"}
        variants={projectVariants}
        viewport={{ once: true }}
      >
        <article className={styles.projectContainer} key={`${index}-project`}>
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.imageInner}
              variants={imageHover}
              animate={isHovering ? "startHover" : "stopHover"}
              onHoverStart={(e) => setIsHovering(true)}
              onHoverEnd={(e) => setIsHovering(false)}
            >
              <Image
                src={image}
                alt={"Project Image"}
                width={width}
                height={height}
              />
            </motion.div>
          </div>

          <h1 className={styles.projectName}>{title}</h1>
        </article>
      </motion.div>
    </Link>
  );
};
