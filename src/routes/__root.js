import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({
    component: () => (_jsxs(_Fragment, { children: [_jsx("nav", { className: "bg-gray-800 text-white py-4 shadow-md", children: _jsxs("div", { className: "container mx-auto flex justify-center items-center gap-6", children: [_jsx(Link, { to: "/", activeProps: { className: "font-bold" }, activeOptions: { exact: true }, children: "Welcome" }), _jsx(Link, { to: "/createAccount", children: "Create Account" }), _jsx(Link, { to: "/login", children: "Login" }), _jsx(Link, { to: "/myAccount", children: "My Account" }), _jsx(Link
                        // to="/searches/$searchid"
                        // params={{ searchid: "" }}
                        , { 
                            // to="/searches/$searchid"
                            // params={{ searchid: "" }}
                            activeProps: { className: "font-bold" }, children: "Search" })] }) }), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx(TanStackRouterDevtools, {})] })),
});
