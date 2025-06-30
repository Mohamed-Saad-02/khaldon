import showToast from "@/components/UsedShadcn/UseToast";
import { resetPasswordValues } from "@/lib/validator";
import { authService } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: resetPasswordValues) => {
      const email = sessionStorage.getItem("email");
      const otp = sessionStorage.getItem("otp");

      if (!email || !otp) throw new Error("Failed to reset password");

      return authService.resetPassword({
        email,
        otp,
        password: data.password,
      });
    },
    onSuccess: () => {
      showToast({
        title: "Success",
        description: "Password reset successfully",
      }).success();
    },
    onError: () => {
      showToast({
        title: "Error",
        description: "Failed to reset password",
      }).error();
    },
  });
};

export default useResetPassword;
