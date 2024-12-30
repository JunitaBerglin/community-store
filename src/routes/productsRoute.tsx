import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { ProductsPage } from "../components/productsPage";

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});
