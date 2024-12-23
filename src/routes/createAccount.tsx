import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/createAccount")({
  component: RouteComponent,
});

type FormValues = {
  user_name: string;
  phone_number: string;
  email: string;
  postal_code: string;
  password: string;
  avatar: FileList;
};

function RouteComponent() {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<FormValues>();

  console.log(watch());

  const onSubmit = (data: FormValues) => {
    console.log("Form Data Submitted:", data);
    router.navigate({ to: "/login" });
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Hello "/createAccount"!</h1>
        <div>
          <section className="rounded-md p-2 bg-white">
            <div className="flex items-center justify-center my-3">
              <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2"></div>
                <h2 className="text-2xl font-bold leading-tight">
                  Sign up to create account
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already have an account?
                  <button
                    type="button"
                    className="text-blue-500 underline ml-1"
                    onClick={() => router.navigate({ to: "/login" })}
                  >
                    Sign in here
                  </button>
                </p>
                <div className="mt-5 space-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Name
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("user_name", { required: true })}
                        placeholder="Name of user"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("phone_number", { required: true })}
                        placeholder="Phone number"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("postal_code", { required: true })}
                        placeholder="Postal code"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("password", { required: true })}
                        placeholder="Password"
                        type="password"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Profile Picture
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("avatar")}
                        type="file"
                        className="file-input w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </form>
    </main>
  );
}