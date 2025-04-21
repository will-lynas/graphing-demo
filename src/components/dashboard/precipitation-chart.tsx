"use client";

import { format } from "date-fns";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface WeatherData {
  date: string;
  temperature_c: number;
  humidity_percent: number;
  uv_index: number;
  precipitation_mm: number;
  wind_speed_kmh: number;
  id: string;
}

interface PrecipitationChartProps {
  data: WeatherData[];
  showDetails?: boolean;
}

export function PrecipitationChart({
  data,
  showDetails = false,
}: PrecipitationChartProps) {
  const chartData = data
    .map((item) => ({
      date: format(new Date(item.date), "MMM dd"),
      value: item.precipitation_mm,
      rawDate: item.date,
    }))
    .sort(
      (a, b) => new Date(a.rawDate).getTime() - new Date(b.rawDate).getTime()
    );

  return (
    <ChartContainer
      config={{
        precipitation: {
          label: "Precipitation (mm)",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            domain={[0, "auto"]}
            label={
              showDetails
                ? {
                    value: "Precipitation (mm)",
                    angle: -90,
                    position: "insideLeft",
                  }
                : undefined
            }
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="value"
            name="precipitation"
            className="fill-chart-2"
            // TODO:
            // fill="var(--color-precipitation)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
