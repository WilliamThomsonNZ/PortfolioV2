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
import QuoteImage from "../components/quoteImage";
export default function Home() {
  const [introRun, setIntroRun] = useState(false);

  const variants = {
    exit: {
      opacity: 0,
    },
  };
  return (
    <>
      <Head>
        <title>WILL - Web3 Development Solutions</title>
        <meta
          name="description"
          content="Development solutions for the Web3 Creators"
        />
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
            <Header />
            <motion.main
              variants={variants}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              key={"main"}
            >
              <Hero />
              <QuoteImage />
              <IndexServices />
              <LatestProjects />
              <IndexAbout />
              <Footer />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
