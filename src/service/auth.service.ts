import { OTP_TYPE } from "@/constants";
import axiosInstance from "@/lib/axiosInstance";
import {
  confirmEmailValues,
  forgotPasswordValues,
  loginValues,
  signupValues,
} from "@/lib/validator";
import {
  CheckOTPResponse,
  ForgotPasswordResponse,
  LoginResponse,
  RegisterResponse,
  ResetPasswordResponse,
} from "@/types";

export const authService = {
  // Register a new user
  register: async (data: signupValues): Promise<RegisterResponse> => {
    return await axiosInstance.post("/auth/register", data);
  },

  // Login user
  login: async (data: loginValues): Promise<LoginResponse> => {
    return await axiosInstance.post("/auth/login", data);
  },

  // Forgot password
  forgotPassword: async (
    data: forgotPasswordValues,
  ): Promise<ForgotPasswordResponse> => {
    return await axiosInstance.post("/auth/forgot-password", data);
  },

  // Reset password
  resetPassword: async (data: {
    email: string;
    password: string;
    otp: string;
  }): Promise<ResetPasswordResponse> => {
    return await axiosInstance.post(`/auth/reset-password`, data);
  },

  // Confirm email
  confirmEmail: async (data: confirmEmailValues & { email: string }) => {
    const response = await axiosInstance.post("/auth/verify-user", {
      ...data,
      type: OTP_TYPE.CONFIRM_EMAIL,
    });
    return response;
  },

  // Check OTP valid
  checkOtpValid: async (data: {
    email: string;
    otp: string;
    type: OTP_TYPE;
  }): Promise<CheckOTPResponse> => {
    return await axiosInstance.post("/otp/check-otp", data);
  },

  // Resend OTP
  resendOTP: async (data: {
    email: string;
    type: OTP_TYPE;
  }): Promise<CheckOTPResponse> => {
    return await axiosInstance.post("/otp/send-otp", data);
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await axiosInstance.get("/auth/me");
    return response;
  },

  // Logout user
  logout: async () => {
    // You might want to handle token removal here or in the component
    const response = await axiosInstance.post("/auth/logout");
    return response;
  },

  // Refresh token
  refreshToken: async () => {
    const response = await axiosInstance.post("/auth/refresh-token");
    return response;
  },
};
