import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "@/globals.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
      {process.env.NODE_ENV === "development" ? <TanStackRouterDevtools /> : null}
    </div>
  );
}
