"use client";

import { SessionProvider } from "next-auth/react";

import { Sidebar } from "@/features/dashboard/components/sidebar";
import { useExpandedSidebar } from "@/features/dashboard/hooks/use-expanded-sidebar";
import { cn } from "@/lib/utils";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isExpanded } = useExpandedSidebar();

  return (
    <SessionProvider>
      <div className="h-svh">
        <div
          className={cn(
            "hidden md:flex w-64 flex-col fixed inset-y-0 z-50 transition-all",
            {
              "w-16": !isExpanded,
            }
          )}
        >
          <Sidebar />
        </div>
        <main
          className={cn("md:pl-64 min-h-svh transition-all", {
            "md:pl-16": !isExpanded,
          })}
        >
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};
