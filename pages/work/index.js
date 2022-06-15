import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/projects.module.scss";
export default function Projects() {
  return (
    <>
      <Head>
        <title>Will - Work</title>
        <meta name="description" content="previous works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.sectionContainer}>
        <h1>Work</h1>
        <section></section>
      </main>
    </>
  );
}
