import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { RouteComponent } from "../components/routeComponent";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: RouteComponent,
});
