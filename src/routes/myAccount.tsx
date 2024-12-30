import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { MyAccount } from "../components/myAccount";

export const myAccountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/myAccount{?query*}",
  component: MyAccount,
});
