import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import styles from "./featured-options.module.css";
import { ExperienceFlyFishing, ExploreFlyFishing, GearUP } from "@/assets";

type FeaturedOption = {
  id: string;
  title: string;
  content: {
    heading: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    learnMoreUrl: string;
  };
};

const featuredOptionsData: FeaturedOption[] = [
  {
    id: "explore",
    title: "Explore Fly Fishing",
    content: {
      heading: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc.",
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
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque.",
      imageUrl: ExperienceFlyFishing,
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
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. Sed elementum urna et.",
      imageUrl: GearUP,
      imageAlt: "Fly fishing gear",
      learnMoreUrl: "/fishing-gear",
    },
  },
];

export default function FeaturedOptions() {
  const [openSection, setOpenSection] = useState<string | null>("explore");
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

  const toggleSection = (sectionId: string) => {
    if (isMobile) return;

    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  if (isMobile) {
    return (
      <div className={styles.sectionWrapper}>
        <h2 className={styles.heading}>Featured Options</h2>
        <div className={styles.mobileGrid}>
          {featuredOptionsData.map((option) => (
            <div
              key={option.id}
              className={styles.mobileCard}
              style={{ backgroundImage: `url(${option.content.imageUrl})` }}
            >
              <div className={styles.mobileCardContent}>
                <h3 className={styles.mobileCardTitle}>{option.title}</h3>
                <p className={styles.mobileCardDescription}>
                  {option.content.description}
                </p>
                <a href={option.content.learnMoreUrl} className={styles.learnMore}>
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
