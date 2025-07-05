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
  predictPrice: number;
  confidenceLevel: number;
  priceRange: number[];
};

export type ChartData = {
  name: string;
  actualPrice: number;
  predictPrice: number;
};

// Locations
export type Region = {
  _id: string;
  name: string;
};

export type LocationsSummary = {
  regions: Region[];
  years: number[];
};
export type LocationsSummaryResponse = ApiResponse<LocationsSummary>;

export type LocationPrices = {
  _id: string;
  year: number;
  half: "H1" | "H2" | "Full";
  actualPrice: number;
  predictedPrice: number;
  percentage: number;
};
export type LocationPricesResponse = ApiResponse<LocationPrices[]>;
