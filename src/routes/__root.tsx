import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center gap-6">
          <Link
            // to="/"
            activeProps={{ className: "font-bold" }}
            // activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link
            // to="/searches/$searchid"
            // params={{ searchid: "" }}
            activeProps={{ className: "font-bold" }}
            // search={{ page: 1, filter: "", sort: "newest" }}
          >
            Search
          </Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
