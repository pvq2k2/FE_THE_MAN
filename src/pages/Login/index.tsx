import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="py-4">
      <div className="w-10/12 m-auto shadow-md  grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-2 b">
        <div>
          <img
            className="w-9/10 min-h-full hidden sm:block lg:block "
            src="https://preview.colorlib.com/theme/bootstrap/login-form-14/images/xbg-1.jpg.pagespeed.ic.3OAd9jZTMD.webp"
            alt=""
          />
        </div>
        <div className="px-10 py-8 mt-auto mb-auto">
          <h3 className="text-center text-2xl font-semibold">Sign In</h3>
          <form className="mt-4" action="">
            <div className="mt-4">
              <label className="block font-medium">User Email</label>
              <input
                className="mt-2 w-full h-10 p-1 border-solid border-2 border-neutral-300  focus:border-neutral-500 lg:h-12 rounded-md"
                type="text"
                placeholder="User Email"
                name=""
                id=""
              />
            </div>
            <div className="mt-4">
              <label className="block font-medium">Password</label>
              <input
                className="mt-2 w-full h-10 p-1 border-solid border-2 border-neutral-300  focus:border-neutral-500 lg:h-12 rounded-md"
                type="password"
                placeholder="Password"
                name=""
                id=""
              />
            </div>
            <div className="ml-auto mr-auto">
              <button className="mt-6 bg-amber-600 w-full  h-10 text-white text-lg hover:cursor-pointer lg:h-12 rounded-md">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between">
            <div className="flex  items-center mt-4">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 font-medium block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm mt-4">
              <a
                href="#"
                className="font-medium  text-indigo-600 hover:text-indigo-400 col-end-10 "
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <p className="mt-4">
            Not a member?{" "}
            <span>
              <a
                href=""
                className="font-medium  text-indigo-600 hover:text-indigo-400 col-end-10"
              >
                SignUp
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
