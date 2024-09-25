import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../reusable_components/Logo";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side for medium+ screens */}
      <div className="hidden rounded-md  md:block w-full md:w-[400px] bg-[#B5E8FB] mx-8 my-8 ">
        <div className="m-4 space-y-8">
          <Logo />
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <img
            src="/home.png"
            alt="Logo"
            className=" object-cover h-[400px] mb-4"
          />
        </div>
      </div>

      {/* Right side form for all screens */}
      <div className="w-full  flex md:mt-20 p-6">
        <div className="w-full max-w-md">
          <h1 className="md:hidden mb-4 text-2xl font-bold ">Welcome Back</h1>

          <h1 className="text-xl font-bold mb-6 ">Login to your account</h1>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                {...register("password", { required: "Password is required" })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#0D90C1] text-white py-2 rounded-md "
              >
                Login
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign Up */}
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/create-account" className="text-[#0D90C1] font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
