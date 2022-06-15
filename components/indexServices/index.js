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
    /* Optional options */
    threshold: 0.5,
  });

  // useEffect(() => {
  //   if (inView) {
  //     setDarkMode(true);
  //     document.body.classList.add("darkMode");
  //     document.body.classList.remove("lightkMode");
  //   } else {
  //     setDarkMode(false);
  //     document.body.classList.remove("darkMode");
  //     document.body.classList.add("lightkMode");
  //   }
  // }, [inView]);

  const services = [
    {
      name: "Website/Web Appliaction Development",
      initialDescription:
        "I build scalable and performant experiences on the web. Having a fully functional and flawless website is one of the keys to a successful business.",
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
        "With a solid track record integrating wallets and other web3 functionality into projects, I deliver secure and optimised web3 integration.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "UI/UX Design",
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
      <motion.h2
        className={styles.sectionTitle}
        variants={ProjectVariants.infoText}
        whileInView={"whileInView"}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>
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
