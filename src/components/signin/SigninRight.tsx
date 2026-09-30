import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import FormInput from "../resuable/FormInput";
import PasswordInput from "../resuable/PasswordInput";
import { Link } from "react-router";

interface SigninFormInputs {
  email: string;
  password: string;
}

const SigninRight: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormInputs>();

  const onSubmit: SubmitHandler<SigninFormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="mt-15 lg:mt-0 bg-white-main p-8 md:p-15 rounded-3xl w-full ">
      {/* Header */}
      <div className="mb-8">
        <span className="text-blue font-normal text-lg">Sign In</span>
        <h1 className="heading-2 mt-1">Welcome Back</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
        {/* Email Field */}
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="designer@example.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />

        {/* Password Field */}
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <button type="submit" disabled={isSubmitting} className="btn-1">
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="relative mt-[87px] flex items-center justify-center">
        <div className="border-t border-gray-200 w-full" />
        <span className="bg-white-main px-3 text-lg text-gray-400 absolute rounded-full">
          or
        </span>
      </div>

      {/* Social Login Icons */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          type="button"
          aria-label="Sign cursor-pointer in with Facebook"
          className="w-12 cursor-pointer h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition"
        >
          <FaFacebookF className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-12 cursor-pointer h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition"
        >
          <FaGoogle className="w-5 h-5" />
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-base text-[#888888] mt-[73px]">
        New user?{" "}
        <Link to="/signup" className="text-blue font-medium hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default SigninRight;
