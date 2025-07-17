"use client";

import { AuthProvider } from "@/components/auth-provider";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
