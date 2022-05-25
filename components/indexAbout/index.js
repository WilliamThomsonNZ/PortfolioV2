import React from "react";
import Image from "next/image";
import styles from "./indexAbout.module.scss";
import Link from "next/link";
const IndexAbout = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.topSection}>
        <div className={styles.desktopTop}>
          <h6 className={styles.title}>About</h6>
          <Link href={"/about"}>
            <div className={styles.buttonContainer}>
              <span className={styles.buttonLabel}>more</span>
              <Image
                src={"/right-arrow.png"}
                layout={"fixed"}
                height={30}
                width={30}
                className={styles.arrowImage}
              />
            </div>
          </Link>
          <p className={styles.desktopDescription}>
            Our intelligent digital strategy and a pragmatic and thoughtful
            approach to solving business calls deliver a successful framework
            for both you and your audience. business calls deliver a successful
            framework for both you and I. <br />
            <br /> There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet
          </p>
        </div>

        <Link href={"/about"}>
          <div className={`${styles.buttonContainer} ${styles.desktopButton}`}>
            <span className={styles.buttonLabel}>more</span>
            <Image
              src={"/right-arrow.png"}
              layout={"fixed"}
              height={30}
              width={30}
              className={styles.arrowImage}
            />
          </div>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={"/portfolioProject.jpg"}
          layout={"responsive"}
          height={600}
          width={700}
        />
      </div>
      <p className={styles.mobileDescription}>
        Our intelligent digital strategy and a pragmatic and thoughtful approach
        to solving business calls deliver a successful framework for both you
        and your audience. business calls deliver a successful framework for
        both you and{" "}
      </p>
    </section>
  );
};

export default IndexAbout;
