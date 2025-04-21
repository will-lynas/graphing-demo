"use client";

import { AverageTemperatureCard } from "@/components/dashboard/summary/average-temperature";
import { AverageHumidityCard } from "@/components/dashboard/summary/average-humidity";
import { MaxUvIndexCard } from "@/components/dashboard/summary/max-uv-index";
import { TotalPrecipitationCard } from "@/components/dashboard/summary/total-precipitation";
import { TemperatureTrendsCard } from "@/components/dashboard/temperature-trends/card";
import { HumidityLevelsCard } from "@/components/dashboard/humidity/card";
import { PrecipitationCard } from "@/components/dashboard/precipitation/card";
import { WeatherMetricsComparisonCard } from "@/components/dashboard/weather-comparison/card";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function WeatherDashboard() {
  // This could obviously be rendered on the server
  // However, the point of this app is to demonstrate fetching from an external API
  // so that is what we are pretending to do here
  const { data } = useSWR("/api/weather", fetcher, {
    suspense: true,
  });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 pt-0 md:pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AverageTemperatureCard data={data} />
          <AverageHumidityCard data={data} />
          <MaxUvIndexCard data={data} />
          <TotalPrecipitationCard data={data} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <TemperatureTrendsCard data={data} />
          <HumidityLevelsCard data={data} />
          <PrecipitationCard data={data} />
          <WeatherMetricsComparisonCard data={data} />
        </div>
      </main>
    </div>
  );
}
