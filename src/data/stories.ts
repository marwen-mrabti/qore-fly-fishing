import { JohnStory, JourneyStory, CatchStory, TroutStory } from "@/assets";

export type Story = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
};

export const stories: Story[] = [
  {
    id: "johns-story",
    title: "John's Story",
    description:
      "Nisi quis nisl nisl quis nisi quis gratitude. Ornare suspendisse sed nisi lacus. Et feugiat netus nisi.",
    imageUrl: JohnStory,
    imageAlt: "Person fishing by a lake",
    link: "/stories/johns-story",
  },
  {
    id: "the-journey",
    title: "The Journey",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu",
    imageUrl: JourneyStory,
    imageAlt: "hook in the water",
    link: "/stories/the-journey",
  },
  {
    id: "catch-day",
    title: "Catch Day",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    imageUrl: CatchStory,
    imageAlt: "Multiple fish caught",
    link: "/stories/catch-day",
  },
  {
    id: "trout-tales",
    title: "Trout Tales",
    description:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Vulputat commodo sed",
    imageUrl: TroutStory,
    imageAlt: "Person holding a trout",
    link: "/stories/trout-tales",
  },
];
