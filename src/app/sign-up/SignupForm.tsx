"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ISignupValidator,
  signupValidator,
} from "../validators/SignupValidator";

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignupValidator>({
    resolver: zodResolver(signupValidator),
  });

  const onSubmit: SubmitHandler<ISignupValidator> = async (data) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 201) {
      
    }
  };

  return (
    <form
      method="POST"
      className="w-2/3 mt-4 flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="flex flex-col gap-1">
          Full Name
          <input
            type="text"
            className="bg-zinc-950 p-2 rounded"
            {...register("name")}
          />
        </label>
        {errors.name && (
          <small className="text-red-500">{errors.name.message}</small>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="flex flex-col gap-1">
          Email address
          <input
            type="email"
            className="bg-zinc-950 p-2 rounded"
            {...register("email")}
          />
        </label>
        {errors.email && (
          <small className="text-red-500">{errors.email.message}</small>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="flex flex-col gap-1">
          Password
          <input
            type="password"
            className="bg-zinc-950 p-2 rounded"
            {...register("password")}
          />
        </label>
        {errors.password && (
          <small className="text-red-500">{errors.password.message}</small>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="flex flex-col gap-1">
          Confirm password
          <input
            type="password"
            className="bg-zinc-950 p-2 rounded"
            {...register("confirmPassword")}
          />
        </label>
        {errors.confirmPassword && (
          <small className="text-red-500">
            {errors.confirmPassword.message}
          </small>
        )}
      </div>
      <button
        type="submit"
        className="bg-orange-700 rounded py-3 mt-2 font-medium"
      >
        Sign up
      </button>
    </form>
  );
}
