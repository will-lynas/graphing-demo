import { WeatherData } from "@/lib/weather-data";
import { AverageTemperatureCard } from "@/components/dashboard/average-temperature-card";
import { AverageHumidityCard } from "@/components/dashboard/average-humidity-card";
import { MaxUvIndexCard } from "@/components/dashboard/max-uv-index-card";
import { TotalPrecipitationCard } from "@/components/dashboard/total-precipitation-card";
import { TemperatureTrendsCard } from "@/components/dashboard/temperature-trends-card";
import { HumidityLevelsCard } from "@/components/dashboard/humidity-levels-card";
import { PrecipitationCard } from "@/components/dashboard/precipitation-card";
import { WeatherMetricsComparisonCard } from "@/components/dashboard/weather-metrics-comparison-card";
import { useState, useEffect } from "react";

export function WeatherDashboard() {
  const [data, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("/api/weather");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div className="p-4">Loading weather data...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

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
