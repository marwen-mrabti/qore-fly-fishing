import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/hero";
import FeaturedOptions from "@/components/home/featured-options";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="">
      <Hero />
      <FeaturedOptions />
    </div>
  );
}
