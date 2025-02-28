import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import styles from "./featured-options.module.css";
import { ExploreFlyFishing } from "@/assets";

const featuredOptionsData = [
  {
    id: "explore",
    title: "Explore Fly Fishing",
    content: {
      heading: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      imageUrl: ExploreFlyFishing,
      imageAlt: "Trout fish caught while fly fishing",
      learnMoreUrl: "/explore-fly-fishing",
    },
  },
  {
    id: "experiences",
    title: "Fly Fishing Experiences",
    content: {
      heading: "Fly Fishing Experiences",
      description:
        "Discover guided trips and unique fly fishing adventures for all skill levels.",
      imageUrl: "",
      imageAlt: "Fly fishing experiences",
      learnMoreUrl: "/fly-fishing-experiences",
    },
  },
  {
    id: "gear",
    title: "Gear Up and Catch More",
    content: {
      heading: "Gear Up and Catch More",
      description:
        "Find the best equipment and accessories to enhance your fly fishing experience.",
      imageUrl: "",
      imageAlt: "Fly fishing gear",
      learnMoreUrl: "/fishing-gear",
    },
  },
];

export default function FeaturedOptions() {
  const [openSection, setOpenSection] = useState<string | null>("explore");

  const toggleSection = (sectionId: string) => {
    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  return (
    <div className={styles.sectionWrapper}>
      <section className={`${styles.section} container`}>
        <h2 className={styles.heading}>Featured Options</h2>

        {featuredOptionsData.map((option) => (
          <div key={option.id} className={styles.accordionItem}>
            <button
              className={styles.accordionButton}
              onClick={() => toggleSection(option.id)}
              aria-expanded={openSection === option.id}
            >
              {option.title}
              {openSection === option.id ? (
                <ChevronUp className={styles.icon} />
              ) : (
                <ChevronDown className={styles.icon} />
              )}
            </button>

            {openSection === option.id && (
              <div className={styles.accordionContent}>
                <div className={styles.contentWrapper}>
                  <div className={styles.imageContainer}>
                    <img
                      src={option.content.imageUrl || ExploreFlyFishing}
                      alt={option.content.imageAlt}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.textContent}>
                    <h3 className={styles.contentHeading}>{option.content.heading}</h3>
                    <p className={styles.contentText}>{option.content.description}</p>
                    <a href={option.content.learnMoreUrl} className={styles.learnMore}>
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
