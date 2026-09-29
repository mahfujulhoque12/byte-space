import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../resuable/FormInput";
import PasswordInput from "../resuable/PasswordInput";
import { Link } from "react-router";

interface SigninFormInputs {
  email: string;
  password: string;
  full_name: string;
}

const SignupRight: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormInputs>();

  const onSubmit: SubmitHandler<SigninFormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-[#fff] p-8 md:p-12 rounded-[2rem] w-full ">
      {/* Header */}
      <div className="mb-8">
        <span className="text-blue font-normal text-lg">Create an Account</span>
        <h1 className="heading-2 mt-1">Welcome to ByteSpace</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
        <FormInput
          label="Full Name"
          name="full_name"
          placeholder="Jamie Davis"
          register={register}
          error={errors.full_name}
          validation={{
            required: "Full Name is required",
          }}
        />
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
            {isSubmitting ? "Continue..." : "Continue"}
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className="text-center text-base text-[#888888] mt-[73px]">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue font-medium hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupRight;
