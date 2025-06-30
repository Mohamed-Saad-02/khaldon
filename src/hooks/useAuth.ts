// Re-export all auth hooks from their respective files
export {
  default as useCurrentUser,
  useCurrentUser as useCurrentUserHook,
} from "./service/auth/useCurrentUser";
export {
  default as useLogin,
  useLogin as useLoginHook,
} from "./service/auth/useLogin";
export {
  default as useRegister,
  useRegister as useRegisterHook,
} from "./service/auth/useRegister";
export {
  default as useForgotPassword,
  useForgotPassword as useForgotPasswordHook,
} from "./service/auth/useForgotPassword";
export {
  default as useResetPassword,
  useResetPassword as useResetPasswordHook,
} from "./service/auth/useResetPassword";
export {
  default as useConfirmEmail,
  useConfirmEmail as useConfirmEmailHook,
} from "./service/auth/useConfirmEmail";
export {
  default as useLogout,
  useLogout as useLogoutHook,
} from "./service/auth/useLogout";
export {
  default as useCheckOTP,
  useCheckOTP as useCheckOTPHook,
} from "./service/auth/useCheckOTP";

// Export auth keys
export { default as authKeys } from "./service/auth/auth.keys";

// Export types for better type inference
export type {
  loginValues,
  signupValues,
  forgotPasswordValues,
  resetPasswordValues,
  confirmEmailValues,
} from "@/lib/validator";
