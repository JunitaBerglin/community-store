import { RouterProvider, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { homeRoute } from "./routes/index";
import { createAccountRoute } from "./routes/createAccount";
import { loginRoute } from "./routes/login";
import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

const routeTree = rootRoute.addChildren([
  homeRoute,
  createAccountRoute,
  loginRoute,
]);

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <div>Page Not Found</div>,
});
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
