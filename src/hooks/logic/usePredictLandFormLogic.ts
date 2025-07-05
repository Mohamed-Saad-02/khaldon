import { useUser } from "@/context/UserContext";
import useLocationSummary from "@/hooks/service/locations/useLocationSummary";
import useIsOnline from "@/hooks/useIsOnline";
import { predictLandPricesValues } from "@/lib/validator";
import { IInput } from "@/types";

export function usePredictLandFormLogic() {
  const { data, isLoading, isPending } = useLocationSummary();
  const { isUserReady, user } = useUser();
  const isOnline = useIsOnline();

  const regions = data?.success
    ? data.data.regions.map((region) => ({
        value: region._id,
        label: region.name,
      }))
    : [];

  const [minYear, maxYear] = data?.success
    ? [data.data.years[0], data.data.years[data.data.years.length - 1]]
    : [2020, 2030];

  const inputs: IInput<predictLandPricesValues>[] = [
    {
      formName: "location",
      label: "Location",
      type: "select",
      placeholder: "Enter location",
      autoComplete: "location",
      selectItems: regions,
    },
    {
      formName: "year",
      label: "Select Year",
      type: "range",
      placeholder: "Select year",
      autoComplete: "year",
      min: minYear,
      max: maxYear,
    },
  ];

  const defaultValues: predictLandPricesValues = {
    location: regions[0]?.value ?? "",
    year: String(minYear),
  };

  return {
    inputs,
    defaultValues,
    isLoading,
    isPending,
    isUserReady,
    user,
    isOnline,
  };
}
