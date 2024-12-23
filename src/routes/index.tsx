import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  return (
    <div>
      <h1>Hello and welcome to your community store! "/"!</h1>
      <h2>Start by create you'r account</h2>
      <button
        onClick={() => {
          router.navigate({
            to: "/createAccount",
          });
        }}
      >
        create account
      </button>
    </div>
  );
}
