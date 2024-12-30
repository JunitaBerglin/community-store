import React from "react";

const Login: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-bold leading-tight">Login</h2>
          <p className="text-slate-500">Enter details below.</p>
        </div>
        <form className="w-full mt-4 space-y-3">
          <div>
            <input
              className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Username"
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div>
            <input
              className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="mr-2 w-4 h-4"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <span className="text-slate-500">Remember me </span>
            </div>
            <a className="text-blue-500 font-medium hover:underline" href="#">
              Forgot Password
            </a>
          </div>
          <button
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold text-white"
            type="submit"
          >
            Login
          </button>
          <p className="flex justify-center space-x-1">
            <span className="text-slate-700"> Have an account? </span>
            <a className="text-blue-500 hover:underline" href="/createAccount">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };
