import { useMutation } from "@tanstack/react-query";
import { forgotPasswordValues } from "@/lib/validator";
import { authService } from "@/service/auth.service";
import showToast from "@/components/UsedShadcn/UseToast";
import { OTP_TYPE } from "@/constants";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: forgotPasswordValues) =>
      authService.forgotPassword(data),
    onSuccess: () => {
      showToast({
        title: "Confirm",
        description: "OTP sent successfully",
      }).success();
      sessionStorage.setItem("OTP_TYPE", OTP_TYPE.FORGOT_PASSWORD);
    },
    onError: () => {
      showToast({
        title: "Failed",
        description: "Failed to send OTP",
      }).error();
    },
  });
};

export default useForgotPassword;
