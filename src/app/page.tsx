"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TemperatureChart } from "@/components/dashboard/temperature-chart";
import { HumidityChart } from "@/components/dashboard/humidity-chart";
import { PrecipitationChart } from "@/components/dashboard/precipitation-chart";
import { WeatherComparison } from "@/components/dashboard/weather-comparison";
import { weatherData } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Temperature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(
                  weatherData.reduce(
                    (sum, item) => sum + item.temperature_c,
                    0
                  ) / weatherData.length
                ).toFixed(1)}
                °C
              </div>
              <p className="text-xs text-muted-foreground">
                Based on {weatherData.length} data points
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Humidity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(
                  weatherData.reduce(
                    (sum, item) => sum + item.humidity_percent,
                    0
                  ) / weatherData.length
                ).toFixed(1)}
                %
              </div>
              <p className="text-xs text-muted-foreground">
                Based on {weatherData.length} data points
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Max UV Index
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.max(...weatherData.map((item) => item.uv_index)).toFixed(
                  1
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Highest recorded value
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Precipitation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {weatherData
                  .reduce((sum, item) => sum + item.precipitation_mm, 0)
                  .toFixed(1)}{" "}
                mm
              </div>
              <p className="text-xs text-muted-foreground">
                Cumulative rainfall
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Temperature Trends</CardTitle>
              <CardDescription>
                Daily temperature readings in Celsius
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <TemperatureChart data={weatherData} showDetails />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Humidity Levels</CardTitle>
              <CardDescription>Daily humidity percentage</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <HumidityChart data={weatherData} showDetails />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Precipitation</CardTitle>
              <CardDescription>Daily rainfall in millimeters</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <PrecipitationChart data={weatherData} showDetails />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weather Metrics Comparison</CardTitle>
              <CardDescription>
                Radar chart comparing all weather metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <WeatherComparison data={weatherData} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
