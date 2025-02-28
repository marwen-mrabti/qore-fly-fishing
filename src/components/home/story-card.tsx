import type { Story } from "@/data/stories";
import { useEffect, useState } from "react";
import styles from "./story-card.module.css";

export default function StoryCard({ story }: { story: Story }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <li className={styles.card}>
        <h2 className={styles.title}>{story.title}</h2>
        <div className={styles.content}>
          <img
            src={story.imageUrl}
            alt={story.imageAlt}
            loading="lazy"
            className={styles.image}
          />
          <p className={styles.description}>{story.description}</p>
        </div>
        <a href="#" className={styles.readMore}>
          Read more
        </a>
        <div className={styles.divider}></div>
      </li>
    );
  }
  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={story.imageUrl}
          alt={story.imageAlt}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{story.title}</h3>
        <p className={styles.description}>{story.description}</p>
        <a href="#" className={styles.readMore}>
          Read more
        </a>
      </div>
    </li>
  );
}
