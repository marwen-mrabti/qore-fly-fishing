import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/hero";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className={"container"}>
      <Hero />
    </div>
  );
}
