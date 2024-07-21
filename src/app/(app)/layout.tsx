import { protectServer } from "@/features/auth/utils";
import { DashboardLayout } from "@/features/dashboard/components/layout";

export default async function DashboarRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await protectServer();

  return <DashboardLayout>{children}</DashboardLayout>;
}
