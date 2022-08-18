import React from "react";
import styles from "./projectHero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
const ProjectHero = ({
  name,
  link,
  description,
  bannerImg,
  roles,
  isShadowLabs,
}) => {
  const nameVariants = {
    initial: {
      y: 300,
      //opacity: 0,
    },
    animate: {
      y: 0,
      //opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  };
  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.8,
      },
    },
  };
  const containerVaraiants = {
    initial: {},
    animate: {},
  };

  return (
    <motion.section
      className={styles.container}
      variants={containerVaraiants}
      initial={"initial"}
      animate={"animate"}
    >
      <h2 className={styles.name}>
        <motion.span className={styles.text} variants={nameVariants}>
          {name}
        </motion.span>
      </h2>
      <motion.a href={link} className={styles.mobileLink} variants={fade}>
        VIEW LIVE
      </motion.a>
      <motion.div className={styles.informationContainer} variants={fade}>
        <p className={styles.description}>{description}</p>
        <div className={styles.linkContainer}>
          <a href={link} className={styles.desktopLink}>
            VIEW LIVE
          </a>
        </div>
        <div className={styles.roles}>
          {roles.map((role) => (
            <span className={styles.role}>{role}</span>
          ))}
        </div>
      </motion.div>
      <motion.div className={styles.bannerContainer} variants={fade}>
        {isShadowLabs ? (
          <div className={styles.blackBox}></div>
        ) : (
          <Image
            src={bannerImg}
            width={3000}
            height={1000}
            objectFit={"cover"}
            alt={"Reduced to clear Logo"}
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default ProjectHero;
