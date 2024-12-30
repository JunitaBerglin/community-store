import { rootRoute } from "./__root";
import { Login } from "../components/login";
import { createRoute } from "@tanstack/react-router";

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
