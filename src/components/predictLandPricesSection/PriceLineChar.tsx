"use client";

import StarsEffect from "@/anim/StarsEffect";
import { ChartData } from "@/types";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function PriceLineChar({
  chartData,
  priceTrend,
  isLoading,
}: {
  chartData: ChartData[];
  priceTrend: number;
  isLoading: boolean;
}) {
  return (
    <div className="shadow-secondary text-default space-y-4 overflow-hidden rounded-4xl border border-[#D9D9D980] p-4 md:p-8">
      <h3 className="text-lg font-medium md:text-2xl">
        Price Trend ({priceTrend} Years)
      </h3>

      {isLoading ? (
        <div className="grid h-[527px] place-content-center rounded-2xl bg-[#E6E6E6]">
          <StarsEffect />
        </div>
      ) : (
        <ResponsiveContainer width={"100%"} height={527}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="predictPrice" stroke="#4b85f5" />
            <Line type="monotone" dataKey="actualPrice" stroke="#7b9b10" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default PriceLineChar;
