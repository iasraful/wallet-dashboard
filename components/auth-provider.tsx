"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Hardcoded credentials
const VALID_CREDENTIALS = {
  email: "demo@wallet.com",
  password: "password123",
}

const MOCK_USER: User = {
  id: "1",
  email: "demo@wallet.com",
  name: "John Doe",
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is logged in on mount
    const savedUser = localStorage.getItem("wallet-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Redirect logic
    if (!isLoading) {
      if (!user && pathname === "/dashboard") {
        router.push("/login")
      } else if (user && pathname === "/login") {
        router.push("/dashboard")
      } else if (user && pathname === "/") {
        router.push("/dashboard")
      } else if (!user && pathname === "/") {
        router.push("/login")
      }
    }
  }, [user, pathname, router, isLoading])

  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      setUser(MOCK_USER)
      localStorage.setItem("wallet-user", JSON.stringify(MOCK_USER))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("wallet-user")
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
