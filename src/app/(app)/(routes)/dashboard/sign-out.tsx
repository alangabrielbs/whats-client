"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      Sair
    </Button>
  );
};
