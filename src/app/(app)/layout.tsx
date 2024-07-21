import { protectServer } from "@/features/auth/utils";

export default async function DashboarRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await protectServer();

  return children;
}
