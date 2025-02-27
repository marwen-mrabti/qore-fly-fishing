import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/shared/Header";
import "@/globals.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {process.env.NODE_ENV === "development" ? <TanStackRouterDevtools /> : null}
    </div>
  );
}
