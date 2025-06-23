import {
  confirmEmailValues,
  forgotPasswordValues,
  loginValues,
  predictLandPricesValues,
  resetPasswordValues,
  signupValues,
} from "@/lib/validator";
import { IInput } from "@/types";

// PredictLandPricesForm
export const inputsPredictLandPricesForm: IInput<predictLandPricesValues>[] = [
  {
    formName: "location",
    label: "Location",
    type: "select",
    placeholder: "Enter location",
    autoComplete: "location",
    selectItems: [
      { value: "location1", label: "Location 1" },
      { value: "location2", label: "Location 2" },
      { value: "location3", label: "Location 3" },
    ],
  },
  {
    formName: "year",
    label: "Select Year",
    type: "range",
    placeholder: "Select year",
    autoComplete: "year",
    min: 2014,
    max: 2030,
  },
];

// SignForm
export const inputsSignForm: IInput<signupValues | loginValues>[] = [
  {
    formName: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
  },
  {
    formName: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    autoComplete: "current-password",
  },
];

// ForgotPasswordForm
export const inputsForgotPasswordForm: IInput<forgotPasswordValues>[] = [
  {
    formName: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
  },
];

// ConfirmEmailForm
export const inputsConfirmEmailForm: IInput<confirmEmailValues>[] = [
  {
    formName: "otp",
    label: "OTP",
    type: "number",
    placeholder: "Enter your OTP",
    autoComplete: "email",
  },
];

// ResetPasswordForm
export const inputsResetPasswordForm: IInput<resetPasswordValues>[] = [
  {
    formName: "password",
    label: "New Password",
    type: "password",
    placeholder: "Enter your password",
    autoComplete: "password",
  },
  {
    formName: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Enter your password",
    autoComplete: "current-password",
  },
];
