"use client"

import { AuthProvider } from "@/components/auth-provider"
import { ThemeProvider } from "next-themes"

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}