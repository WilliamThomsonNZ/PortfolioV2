import React, { useEffect, useState, useRef } from "react";
import styles from "./hero.module.scss";
import { motion, useAnimation } from "framer-motion";
import useWindowWidth from "../../utils/useWindowWidth";
import { heroVariants } from "../../FramerVariants";

const Hero = () => {
  const controls = useAnimation();
  const width = useWindowWidth(700);
  const [sliderWidth, setSliderWidth] = useState(0);
  const slider = useRef(null);
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

  return (
    <section className={styles.heroContainer}>
      <motion.div
        className={styles.headingContainer}
        variants={heroVariants.container}
        animate={"animate"}
        initial={"initial"}
      >
        <h1 className={styles.heading}>
          <motion.span variants={heroVariants.headingText}>
            Independent
          </motion.span>

          <motion.span variants={heroVariants.headingText}>
            blockchain
          </motion.span>

          <motion.span variants={heroVariants.headingText}>
            &amp; web Developer
          </motion.span>
        </h1>
        <motion.span
          className={styles.portfolioText}
          variants={heroVariants.portfolioText}
        >
          Portfolio 2022
        </motion.span>
      </motion.div>
      <motion.div
        className={styles.scrollWrapper}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.8 }}
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
            {/* <span className={styles.slidingText}>
              Available for freelance work
            </span> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
