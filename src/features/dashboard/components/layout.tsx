import { Sidebar } from "@/features/dashboard/components/sidebar";
import { SessionProvider } from "next-auth/react";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SessionProvider>
      <div className="h-svh">
        <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div>
        <main className="md:pl-72 min-h-svh">{children}</main>
      </div>
    </SessionProvider>
  );
};
