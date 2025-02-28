import { ExperienceFlyFishing, ExploreFlyFishing, GearUP } from "@/assets";

export type FeaturedOption = {
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

export const featuredOptionsData: FeaturedOption[] = [
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
