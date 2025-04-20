"use client";

import { useState, useEffect } from "react";
import { WeatherDashboard } from "@/components/dashboard/weather-dashboard";
import { WeatherData } from "@/lib/data";

export default function DashboardPage() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("https://fake-api.lynas.dev/weather");

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

  return <WeatherDashboard data={weatherData} />;
}
