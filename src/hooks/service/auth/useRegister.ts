import showToast from "@/components/UsedShadcn/UseToast";
import { OTP_TYPE } from "@/constants";
import { signupValues } from "@/lib/validator";
import { authService } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: signupValues) => authService.register(data),
    onError: (error: string) => {
      showToast({
        title:
          error === "Please verify your email first"
            ? "Verify Your Email"
            : "Failed during register",
        description: error ?? "Failed To Register",
      }).error();
    },
    onSuccess: () => {
      showToast({
        title: "Success",
        description: "Please Check Your Email to verify your account",
      }).success();

      sessionStorage.setItem("OTP_TYPE", OTP_TYPE.CONFIRM_EMAIL);
    },
  });
};

export default useRegister;
