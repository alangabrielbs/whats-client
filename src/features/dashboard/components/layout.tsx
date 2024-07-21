import { Sidebar } from "@/features/dashboard/components/sidebar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-svh">
      <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-72 h-full">
        <div className="px-4">{children}</div>
      </main>
    </div>
  );
};
