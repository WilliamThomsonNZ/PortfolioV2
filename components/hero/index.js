import React, { useEffect, useState, useRef } from "react";
import styles from "./hero.module.scss";
import { motion, useAnimation } from "framer-motion";
import useWindowWidth from "../../utils/useWindowWidth";

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
    <section className={styles.heroContianer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>
          <span>Independent</span>
          <span>Blockchain</span>
          <span>&amp; web DEVELOPER</span>
        </h1>
        <span className={styles.portfolioText}>Portfolio 2022</span>
      </div>
      <div className={styles.scrollWrapper}>
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
      </div>
    </section>
  );
};

export default Hero;
