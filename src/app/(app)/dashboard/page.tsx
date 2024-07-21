import { auth } from "@/features/auth";
import { redirect } from "next/navigation";

import { SignOut } from "./sign-out";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <pre className="rounded-md bg-muted p-4 text-sm">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>

      <SignOut />
    </div>
  );
}
