import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .refine((val) => /[A-Z]/.test(val), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine((val) => /[a-z]/.test(val), {
    message: "Password must contain at least one lowercase letter",
  })
  .refine((val) => /[0-9]/.test(val), {
    message: "Password must contain at least one number",
  })
  .refine((val) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val), {
    message: "Password must contain at least one special character",
  });

// Signup Schema
export const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});

export type signupValues = z.infer<typeof signupSchema>;

// Login Schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});

export type loginValues = z.infer<typeof loginSchema>;

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type forgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

// Confirm Email Schema
export const confirmEmailSchema = z.object({
  otp: z.string().min(4, "Invalid OTP"),
});

export type confirmEmailValues = z.infer<typeof confirmEmailSchema>;

// Reset Password Schema
export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export type resetPasswordValues = z.infer<typeof resetPasswordSchema>;

// Predict Land Prices Schema
export const predictLandPricesSchema = z.object({
  location: z.string().min(1, "Location is required"),
  year: z.string().refine((val) => !isNaN(Number(val)), "Invalid year"),
});

export type predictLandPricesValues = z.infer<typeof predictLandPricesSchema>;
