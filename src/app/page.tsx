"use client";

import { weatherData } from "@/lib/data";
import { WeatherDashboard } from "@/components/dashboard/weather-dashboard";

export default function DashboardPage() {
  return <WeatherDashboard data={weatherData} />;
}
