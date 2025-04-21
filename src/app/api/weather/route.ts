import { WeatherData } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  const weatherData: WeatherData[] = [
    {
      id: "1",
      date: "2023-06-01",
      temperature_c: 24.5,
      humidity_percent: 65,
      uv_index: 7,
      precipitation_mm: 0,
      wind_speed_kmh: 12.3,
    },
    {
      id: "2",
      date: "2023-06-02",
      temperature_c: 26.2,
      humidity_percent: 58,
      uv_index: 8,
      precipitation_mm: 0.2,
      wind_speed_kmh: 10.5,
    },
    {
      id: "3",
      date: "2023-06-03",
      temperature_c: 22.8,
      humidity_percent: 72,
      uv_index: 5,
      precipitation_mm: 12.4,
      wind_speed_kmh: 18.7,
    },
    {
      id: "4",
      date: "2023-06-04",
      temperature_c: 21.3,
      humidity_percent: 68,
      uv_index: 6,
      precipitation_mm: 3.5,
      wind_speed_kmh: 15.2,
    },
    {
      id: "5",
      date: "2023-06-05",
      temperature_c: 25.7,
      humidity_percent: 55,
      uv_index: 9,
      precipitation_mm: 0,
      wind_speed_kmh: 8.9,
    },
  ];

  return NextResponse.json(weatherData);
}
