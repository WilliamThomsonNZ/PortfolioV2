import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./indexServices.module.scss";
import { motion } from "framer-motion";
import ServiceCard from "./serviceCard";
import { ProjectVariants } from "../../FramerVariants";
import Lines from "../../assets/lines.svg";
const IndexServices = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const services = [
    {
      name: "Web Development",
      initialDescription:
        "I plan, design, build, test and maintain scalable full stack web applications and dApps. Ensuring a projects website is built to handle the demand of Web3 is crucial in this space.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "Web3 Integration",
      initialDescription:
        "With a solid track record integrating Web3 functionality into products, I deliver secure and optimised Web3 integration into both new and existing projects.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "Technical Advisory",
      initialDescription:
        "Understanding the technical side of Web3 is hard and putting the pieces together is even more difficult. I help projects succeed by guiding technical decisions to ensure products are built as expected.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "Smart Contract Development",
      initialDescription:
        "Crafting secure and gas efficient smart contracts tailored to your project is my top priority. I build contracts inline with modern and recognised industry standards such as ERC721A and ERC1155.",
    },
  ];

  return (
    <motion.section
      className={styles.sectionContainer}
      ref={ref}
      exit={{ opacity: 0 }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.4,
      }}
      id={"services"}
    >
      <div className={styles.headingContainer}>
        <motion.h2
          className={styles.sectionTitle}
          variants={ProjectVariants.infoText}
          whileInView={"whileInView"}
          viewport={{ once: true }}
        >
          <span className={styles.number}>&#92;&#92;01</span>Services
        </motion.h2>
      </div>
      {services.map((service, index) => (
        <ServiceCard
          service={service}
          key={service.name}
          index={index}
          darkMode={darkMode}
        />
      ))}
    </motion.section>
  );
};

export default IndexServices;
