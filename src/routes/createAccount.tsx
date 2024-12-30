import { createRoute } from "@tanstack/react-router";

import { rootRoute } from "./__root";
import { RouteCreateAccount } from "../components/createAccount";

export const createAccountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/createAccount",
  component: RouteCreateAccount,
});
