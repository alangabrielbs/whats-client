import { auth } from "@/features/auth";
import { redirect } from "next/navigation";

export const protectServer = async () => {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }
};
