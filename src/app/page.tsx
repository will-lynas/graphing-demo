"use client";

import { WeatherDashboard } from "@/components/dashboard/dashboard";
import { Suspense } from "react";
import DashboardSkeleton from "@/components/dashboard/skeleton";

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <WeatherDashboard />
    </Suspense>
  );
}
