import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/projects.module.scss";
import Header from "../../components/header";
import Link from "next/link";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { contactVariants } from "../../FramerVariants";
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
      image: "/basik.jpg",
      link: "/work/shadow-labs",
      height: 827,
      width: 1240,
    },
    {
      name: "Basik",
      image: "/basik.jpg",
      link: "/work/basik-collective",
      height: 827,
      width: 1240,
    },
    {
      name: "Oceans by Erin Fleming",
      image: "/basik.jpg",
      link: "/work/oceans",
      height: 827,
      width: 1240,
    },
  ];

  return (
    <motion.div
      className={styles.workContainer}
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
            <article
              className={styles.projectContainer}
              key={`${index} project`}
              data-scroll-speed="4"
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  height={project.height}
                  className={styles.image}
                  width={project.width}
                  objectFit={"cover"}
                />
              </div>
              <Link href={project.link}>
                <h1 className={styles.projectName}>{project.name}</h1>
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
