import { useMutation } from "@tanstack/react-query";
import { confirmEmailValues } from "@/lib/validator";
import { authService } from "@/service/auth.service";
import showToast from "@/components/UsedShadcn/UseToast";

export const useConfirmEmail = () => {
  return useMutation({
    mutationFn: (data: confirmEmailValues & { email: string }) =>
      authService.confirmEmail(data),
    onSuccess: () => {
      showToast({
        title: "Success",
        description: "OTP verified successfully",
      }).success();
    },
    onError: () => {
      showToast({
        title: "Error",
        description: "OTP verification failed",
      }).error();
    },
  });
};

export default useConfirmEmail;
