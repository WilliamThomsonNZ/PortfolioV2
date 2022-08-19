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
        "I build scalable and performant applications on the web. Having a fully functional and flawless website is one of the keys to a successful business.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "Smart Contract Development",
      initialDescription:
        "Creating gas efficient and secure smart contracts to suit your project is my top priority. This includes NFT contracts, token/tokenomics contracts, whitelisting and governance.",
    },
    {
      name: "Web3 Integration",
      initialDescription:
        "With a solid track record integrating wallets and other web3 functionality into projects, I deliver secure and optimised web3 integration into both new and existing projects.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "Technical Advisory",
      initialDescription:
        "Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
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
