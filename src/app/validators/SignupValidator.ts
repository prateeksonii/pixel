import { z } from "zod";

export const signupValidator = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(4),
  confirmPassword: z.string().min(4),
}).refine(data => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match'
});

export type ISignupValidator = z.infer<typeof signupValidator>;