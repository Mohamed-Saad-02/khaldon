import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "@/service/auth.service";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      // Remove token and invalidate queries
      localStorage.removeItem("token");
      queryClient.clear();
      router.push("/login");
    },
  });
};

export default useLogout;
