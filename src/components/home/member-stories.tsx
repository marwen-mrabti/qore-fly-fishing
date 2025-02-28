import { stories } from "@/data/stories";
import styles from "./member-stories.module.css";
import StoryCard from "@/components/home/story-card";

export default function MemberStories() {
  return (
    <div className={styles.sectionWrapper}>
      <section className={`${styles.section} container`}>
        <h2 className={styles.heading}>Member stories</h2>

        <ul className={styles.grid}>
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </ul>
      </section>
    </div>
  );
}
