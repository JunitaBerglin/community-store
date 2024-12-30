import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { ProductPage } from "../components/productPage";

export const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/:productId",
  component: ProductPage,
});
