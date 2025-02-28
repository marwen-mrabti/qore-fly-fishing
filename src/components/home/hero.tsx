import { HeroImgDesktop, HeroImgMobile } from "@/assets";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.sectionWrapper}>
      <section className={`${styles.hero} container`}>
        <div className={styles.heroContent}>
          <h1>
            Central Texas
            <br />
            Fly Fishing
          </h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus
            vestibulum, facilisi ac, sed faucibus.
          </p>
          <button className={styles.ctaButton}>Get started</button>
        </div>

        <picture className={styles.heroImage}>
          <source srcSet={HeroImgMobile} media="(max-width: 768px)" />
          <img
            src={HeroImgDesktop}
            alt="Person fly fishing on a lake"
            className={styles.heroImage}
          />
        </picture>
      </section>
    </div>
  );
}
