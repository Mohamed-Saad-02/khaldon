// API Response
export type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

// Register
export type RegisterResponse = ApiResponse<{ message: string }>;

// Confirm Email
export type ConfirmEmailResponse = ApiResponse<{ message: string }>;

// Login
export type LoginResponse = ApiResponse<{ token: string }>;

// Forgot Password
export type ForgotPasswordResponse = ApiResponse<{ message: string }>;

// Reset Password
export type ResetPasswordResponse = ApiResponse<{ message: string }>;

// Check OTP
export type CheckOTPResponse = ApiResponse<{ message: string }>;

export interface User {
  id: string;
  name: string;
}

export type StatType = {
  title: string;
  price: string;
  description: string;
};

export type ChartData = {
  name: string;
  price: number;
};
