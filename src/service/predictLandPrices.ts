import { predictLandPricesValues } from "@/lib/validator";
import { ChartData, StatType } from "@/types";

export interface Data {
  stats: StatType[];
  chartData: ChartData[];
}

const mokeData = {
  stats: [
    {
      title: "Predicted Price",
      price: "$1,850",
      description: "per square meter",
    },
    {
      title: "Confidence Level",
      price: "87",
      description: "87% confidence",
    },
    {
      title: "Price Range",
      price: "$1,720 - $1,980",
      description: "estimated range",
    },
  ],
  chartData: [
    { name: "2015", price: 2400 },
    { name: "2016", price: 1398 },
    { name: "2017", price: 2000 },
    { name: "2018", price: 2780 },
    { name: "2019", price: 1890 },
    { name: "2020", price: 2390 },
    { name: "2021", price: 3490 },
    { name: "2022", price: 2490 },
    { name: "2023", price: 1490 },
    { name: "2024", price: 4000 },
    { name: "2025", price: 5000 },
  ],
};

export const predictLandPrices = (
  _dataForm: predictLandPricesValues | null,
): Promise<Data> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mokeData);
    }, 3000);
  });
};
