import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { HomeComponent } from "../components/homeComponent";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeComponent,
});
