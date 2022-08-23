import React, { useEffect, useState, useRef } from "react";
import styles from "./hero.module.scss";
import { motion, useAnimation } from "framer-motion";
import useWindowWidth from "../../utils/useWindowWidth";
import { heroVariants } from "../../FramerVariants";
import BackgroundGrid from "../../assets/Grid.svg";
import ButtonArrow from "../../assets/ARROW.svg";
import Link from "next/link";
import Button from "../button";
const Hero = () => {
  const controls = useAnimation();
  const width = useWindowWidth(700);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [yHeight, setYHeight] = useState(0);
  const slider = useRef(null);

  const movingValue = 12;
  useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
  }, [width]);

  useEffect(() => {
    console.log(sliderWidth - sliderWidth / 4);
    console.log("slider initited");
    setSliderWidth(slider.current.offsetWidth);
    controls.start("animate");
  }, [slider.current]);

  const textCarousel = {
    initial: {
      x: 0,
    },
    animate: {
      x: `-${sliderWidth - sliderWidth / 2.5 + 5}px`,
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: ["linear"],
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setYHeight((prev) => {
        if (prev > 90) return 0;
        else return prev + 8.33333;
      });
    }, 2300);

    return () => clearInterval(interval);
  }, []);
  const innerScrollContainer = {
    animate: {
      y: `-${yHeight}%`,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <section className={styles.heroContainer}>
      <motion.div
        className={styles.headingContainer}
        variants={heroVariants.container}
        animate={"animate"}
        initial={"initial"}
        exit={"exit"}
        key={"index-hero"}
      >
        <h1 className={styles.heading}>
          <div className={styles.heroSpanContainer}>
            <motion.span variants={heroVariants.headingText1}>
              development
            </motion.span>
          </div>
          <div className={styles.heroSpanContainer}>
            <motion.span variants={heroVariants.headingText2}>
              services&nbsp;
            </motion.span>
          </div>
          <div className={styles.heroSpanContainer}>
            <motion.span variants={heroVariants.headingText2}>
              for web3
            </motion.span>
          </div>
          <div className={styles.heroSpanContainer}>
            <motion.span variants={heroVariants.headingText3}></motion.span>
          </div>
          <div className={styles.heroSpanContainer}>
            <motion.div variants={heroVariants.headingText3}>
              <motion.div
                className={styles.innerScrollContainer}
                variants={innerScrollContainer}
                animate={"animate"}
              >
                <span>creators.</span>
                <span>Builders.</span>
                <span>enthusiasts.</span>
                <span>creators.</span>
                <span>Builders.</span>
                <span>enthusiasts.</span>
                <span>creators.</span>
                <span>Builders.</span>
                <span>enthusiasts.</span>
                <span>creators.</span>
                <span>Builders.</span>
                <span>enthusiasts.</span>
              </motion.div>
            </motion.div>
          </div>
        </h1>
      </motion.div>
      <motion.div
        className={styles.heroBackground}
        variants={heroVariants.block}
      >
        <BackgroundGrid />
      </motion.div>
      <motion.div
        className={styles.scrollWrapper}
        variants={heroVariants.portfolioText}
      >
        <div className={styles.scrollContainer}>
          <motion.div
            className={styles.scrollInnerContainer}
            variants={textCarousel}
            ref={slider}
            animate={controls}
            initial={"initial"}
          >
            <span className={styles.slidingText}>
              Available for freelance work
            </span>
            <span className={styles.slidingText}>
              Available for freelance work
            </span>
            <span className={styles.slidingText}>
              Available for freelance work
            </span>
            <span className={styles.slidingText}>
              Available for freelance work
            </span>
            <span className={styles.slidingText}>
              Available for freelance work
            </span>
          </motion.div>
        </div>
      </motion.div>
      <Link href="/contact">
        <motion.div
          className={styles.heroCTAContainer}
          variants={heroVariants.portfolioText}
        >
          <Button label={"Get in touch"} />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
