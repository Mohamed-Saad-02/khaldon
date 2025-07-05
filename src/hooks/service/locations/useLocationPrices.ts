import { useUser } from "@/context/UserContext";
import { locationPricesService } from "@/service/locationsPrices.service";
import { useQuery } from "@tanstack/react-query";

function useLocationPrices(
  regionId: string,
  startYear: string,
  lastYear: string,
) {
  const { isUserReady, user } = useUser();
  const countryId = "6867fa8352408b29fb5b9295";

  return useQuery({
    queryKey: ["locations-prices", countryId, regionId, startYear, lastYear],
    queryFn: () =>
      locationPricesService(countryId, regionId, startYear, lastYear),
    enabled:
      !!countryId &&
      !!regionId &&
      !!startYear &&
      !!lastYear &&
      isUserReady &&
      !!user,
  });
}

export default useLocationPrices;
