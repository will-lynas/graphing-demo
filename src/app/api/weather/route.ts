import { weatherData } from "@/lib/weather-data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(weatherData);
}
