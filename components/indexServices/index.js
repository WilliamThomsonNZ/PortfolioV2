import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./indexServices.module.scss";
import { motion } from "framer-motion";
import ServiceCard from "./serviceCard";
const IndexServices = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  //   useEffect(() => {
  //     if (inView) {
  //       setDarkMode(true);
  //       document.body.classList.add("darkMode");
  //       document.body.classList.remove("lightkMode");
  //     } else {
  //       setDarkMode(false);
  //       document.body.classList.remove("darkMode");
  //       document.body.classList.add("lightkMode");
  //     }
  //   }, [inView]);

  const services = [
    {
      name: "NFT Development",
      initialDescription:
        "Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "DEFI Development",
      initialDescription:
        "Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
    {
      name: "WEB Development",
      initialDescription:
        "Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
      largeDescription:
        "              In the design process, they create both functional and beaut things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract an visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.",
    },
  ];

  return (
    <section className={styles.sectionContainer} ref={ref}>
      <h2 className={styles.sectionTitle}>Services</h2>
      {services.map((service, index) => (
        <ServiceCard service={service} key={service.name} index={index} />
      ))}
    </section>
  );
};

export default IndexServices;
