import React from "react";
import Image from "next/image";
import styles from "./indexAbout.module.scss";
import Link from "next/link";
const IndexAbout = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.topSection}>
        <h6 className={styles.title}>About</h6>
        <Link href={"/about"}>
          <>
            more <Image src={"/right-arrow.png"} height={30} width={30} />
          </>
        </Link>
        <p className={styles.desktopDescription}>
          Our intelligent digital strategy and a pragmatic and thoughtful
          approach to solving business calls deliver a successful framework for
          both you and your audience. business calls deliver a successful
          framework for both you and{" "}
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={"/portfolioProject.jpg"} height={400} width={400} />
      </div>
      <p className={styles.mobileDescription}>
        Our intelligent digital strategy and a pragmatic and thoughtful approach
        to solving business calls deliver a successful framework for both you
        and your audience. business calls deliver a successful framework for
        both you and{" "}
      </p>
      <Link href={"/about"}>
        <>
          more <Image src={"/right-arrow.png"} height={30} width={30} />
        </>
      </Link>
    </section>
  );
};

export default IndexAbout;
