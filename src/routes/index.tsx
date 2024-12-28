import { createRoute, useRouter } from "@tanstack/react-router";
import React from "react";
import { rootRoute } from "./__root"; // Updated import

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute, // Reference the renamed root route
  path: "/",
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  return (
    <div>
      <h1>Hello and welcome to your community store!</h1>
      <h2>Start by creating your account</h2>
      <button
        onClick={() => {
          router.navigate({
            to: "/createAccount",
          });
        }}
      >
        Create Account
      </button>
    </div>
  );
}
