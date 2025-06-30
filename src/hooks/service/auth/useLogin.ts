import showToast from "@/components/UsedShadcn/UseToast";
import { loginValues } from "@/lib/validator";
import { authService } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: loginValues) => authService.login(data),
    onSuccess: () => sessionStorage.clear(),
    onError: (err: string) =>
      showToast({
        title: "Failed during Login",
        description: err ?? "An error occurred during login",
      }).error(),
  });
};

export default useLogin;
