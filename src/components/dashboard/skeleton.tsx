"use client";

import { Skeleton } from "../ui/skeleton";

// This shape of this skeleton doesn't exactly match the real dashboard components
// but it looks pretty good and demonstrates how this can be done
// It should be fairly straightforward to mirror the component structure at a more detailed level
// if needed
export default function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 pt-0 md:pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-[120px] w-full" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-[300px] w-full" />
        </div>
      </main>
    </div>
  );
}
