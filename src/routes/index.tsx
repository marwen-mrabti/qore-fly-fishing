import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/hero";
import FeaturedOptions from "@/components/home/featured-options";
import MemberStories from "@/components/home/member-stories";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Hero />
      <FeaturedOptions />
      <MemberStories />
    </>
  );
}
