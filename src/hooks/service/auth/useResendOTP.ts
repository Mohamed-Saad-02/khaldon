import showToast from "@/components/UsedShadcn/UseToast";
import { authService } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";

function useResendOTP() {
  return useMutation({
    mutationFn: authService.resendOTP,
    onSuccess: () => {
      showToast({
        title: "Confirm",
        description: "OTP sent successfully",
      }).success();
    },
    onError: () => {
      showToast({
        title: "Failed",
        description: "Failed to send OTP",
      }).error();
    },
  });
}

export default useResendOTP;
