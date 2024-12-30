import React from "react";
import { useRouter } from "@tanstack/react-router";

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
export { RouteComponent };
