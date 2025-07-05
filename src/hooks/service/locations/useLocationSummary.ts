import { LocationSummaryKey } from "@/constants";
import { locationsSummaryService } from "@/service/locationsPrices.service";
import { useQuery } from "@tanstack/react-query";

// function useLocationSummary(countryId: string) {
function useLocationSummary() {
  const countryId = "6867fa8352408b29fb5b9295";

  return useQuery({
    queryKey: LocationSummaryKey(countryId),
    queryFn: () => locationsSummaryService(countryId),
    enabled: !!countryId,
    staleTime: Infinity,
  });
}

export default useLocationSummary;
