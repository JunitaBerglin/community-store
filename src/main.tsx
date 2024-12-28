import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { homeRoute } from "./routes/index";
import { createAccountRoute } from "./routes/createAccount";
// import { loginRoute } from "./routes/login";
// import { myAccountRoute } from "./routes/myAccount";

const routeTree = rootRoute.addChildren([homeRoute, createAccountRoute]);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
