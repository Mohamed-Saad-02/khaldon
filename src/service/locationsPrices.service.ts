import axiosInstance from "@/lib/axiosInstance";
import { LocationsSummaryResponse, LocationPricesResponse } from "@/types";

export const locationsSummaryService = async (
  countryId: string,
): Promise<LocationsSummaryResponse> => {
  return axiosInstance.get(`/locations/summary?countryId=${countryId}`);
};

export const locationPricesService = async (
  countryId: string,
  regionId: string,
  startYear: string,
  endYear: string,
): Promise<LocationPricesResponse> => {
  return axiosInstance.get(
    `/locations/${countryId}/prices?regionId=${regionId}&startYear=${startYear}&endYear=${endYear}`,
  );
};
