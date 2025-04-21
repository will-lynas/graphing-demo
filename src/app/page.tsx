"use client";

import { WeatherDashboard } from "@/components/dashboard/dashboard";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherDashboard />
    </Suspense>
  );
}
