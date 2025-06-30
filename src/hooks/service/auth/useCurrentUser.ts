import { useQuery } from "@tanstack/react-query";
import { authService } from "@/service/auth.service";
import authKeys from "./auth.keys";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.currentUser(),
    queryFn: () => authService.getCurrentUser(),
    // Only run this query if we have a token
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
  });
};

export default useCurrentUser;
