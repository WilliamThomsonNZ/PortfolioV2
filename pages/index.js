import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import LatestProjects from "../components/latestProjects";
import IndexServices from "../components/indexServices";
import IndexAbout from "../components/indexAbout";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Intro from "../components/intro";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { introVariants } from "../FramerVariants";
import SocialProof from "../components/socialProof";
export default function Home() {
  const [introRun, setIntroRun] = useState(true);
  useEffect(() => {
    document.body.classList.add("light");
    if (sessionStorage.getItem("introRun") == null) {
      setIntroRun(false);
      setTimeout(() => {
        setIntroRun(true);
        sessionStorage.setItem("introRun", "true");
      }, 4000);
    }
  }, []);

  const variants = {
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
    >
      <Head>
        <title>WILL - Web3 Development Solutions</title>
        <meta name="description" content="WEB3 DEVELOPMENT SERVICES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        {!introRun ? (
          <motion.div
            variants={introVariants.heroContainer}
            animate={"animate"}
            initial={"initial"}
            exit={"exit"}
            key={"Intro"}
          >
            <Intro setLoading={(val) => setIntroRun(val)} />
          </motion.div>
        ) : (
          <>
            <Header currentPage={"home"} />
            <motion.main
              variants={variants}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              key={"main"}
            >
              <Hero />
              <SocialProof />
              <IndexServices />
              <LatestProjects />
              <IndexAbout />
              <Footer />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
