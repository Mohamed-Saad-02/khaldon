import showToast from "@/components/UsedShadcn/UseToast";
import { OTP_TYPE } from "@/constants";
import { authService } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";

export function useCheckOTP() {
  return useMutation({
    mutationFn: (data: { email: string; otp: string; type: OTP_TYPE }) =>
      authService.checkOtpValid(data),
    onSuccess: () => {
      showToast({
        title: "Success",
        description: "OTP verified successfully",
      }).success();
    },
    onError: (err: string) => {
      showToast({
        title: "Error",
        description: err,
      }).error();
    },
  });
}

export default useCheckOTP;
