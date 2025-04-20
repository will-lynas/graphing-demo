"use client";

import { format } from "date-fns";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WeatherData {
  date: string;
  temperature_c: number;
  humidity_percent: number;
  uv_index: number;
  precipitation_mm: number;
  wind_speed_kmh: number;
  id: string;
}

interface WeatherComparisonProps {
  data: WeatherData[];
}

export function WeatherComparison({ data }: WeatherComparisonProps) {
  const [selectedDate, setSelectedDate] = useState<string>(data[0]?.date || "");

  // Normalize data for radar chart (all values between 0-100)
  const maxValues = {
    temperature_c: Math.max(...data.map((item) => item.temperature_c)),
    humidity_percent: 100, // Already in percentage
    uv_index: Math.max(...data.map((item) => item.uv_index)),
    precipitation_mm: Math.max(...data.map((item) => item.precipitation_mm)),
    wind_speed_kmh: Math.max(...data.map((item) => item.wind_speed_kmh)),
  };

  const normalizeValue = (value: number, key: keyof typeof maxValues) => {
    return (value / maxValues[key]) * 100;
  };

  const selectedItem =
    data.find((item) => item.date === selectedDate) || data[0];

  const radarData = [
    {
      metric: "Temperature",
      value: normalizeValue(selectedItem.temperature_c, "temperature_c"),
    },
    {
      metric: "Humidity",
      value: normalizeValue(selectedItem.humidity_percent, "humidity_percent"),
    },
    {
      metric: "UV Index",
      value: normalizeValue(selectedItem.uv_index, "uv_index"),
    },
    {
      metric: "Precipitation",
      value: normalizeValue(selectedItem.precipitation_mm, "precipitation_mm"),
    },
    {
      metric: "Wind Speed",
      value: normalizeValue(selectedItem.wind_speed_kmh, "wind_speed_kmh"),
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="mb-4">
        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a date" />
          </SelectTrigger>
          <SelectContent>
            {data.map((item) => (
              <SelectItem key={item.id} value={item.date}>
                {format(new Date(item.date), "MMMM d, yyyy")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <div className="text-sm font-medium">Raw Values:</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-sm">Temperature:</div>
            <div className="text-sm font-medium">
              {selectedItem.temperature_c}°C
            </div>

            <div className="text-sm">Humidity:</div>
            <div className="text-sm font-medium">
              {selectedItem.humidity_percent}%
            </div>

            <div className="text-sm">UV Index:</div>
            <div className="text-sm font-medium">{selectedItem.uv_index}</div>

            <div className="text-sm">Precipitation:</div>
            <div className="text-sm font-medium">
              {selectedItem.precipitation_mm} mm
            </div>

            <div className="text-sm">Wind Speed:</div>
            <div className="text-sm font-medium">
              {selectedItem.wind_speed_kmh} km/h
            </div>
          </div>
        </div>

        <div className="h-[300px]">
          <ChartContainer
            config={{
              metrics: {
                label: "Weather Metrics",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-full w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                data={radarData}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Radar
                  name="metrics"
                  dataKey="value"
                  // TODO: fix this
                  className="stroke-chart-4 fill-chart-4/50"
                  stroke="var(--color-metrics)"
                  fill="var(--color-metrics)"
                  fillOpacity={0.6}
                  dot
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
