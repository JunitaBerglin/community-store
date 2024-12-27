import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, useRouter } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
    component: RouteComponent,
});
function RouteComponent() {
    const router = useRouter();
    return (_jsxs("div", { children: [_jsx("h1", { children: "Hello and welcome to your community store! \"/\"!" }), _jsx("h2", { children: "Start by create you'r account" }), _jsx("button", { onClick: () => {
                    router.navigate({
                        to: "/createAccount",
                    });
                }, children: "create account" })] }));
}
