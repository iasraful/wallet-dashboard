export interface Transaction {
  id: string
  type: "credit" | "debit"
  amount: number
  description: string
  date: string
  category: string
}

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "credit",
    amount: 2500.0,
    description: "Salary Deposit",
    date: "2024-01-15",
    category: "Income",
  },
  {
    id: "2",
    type: "debit",
    amount: 89.99,
    description: "Grocery Shopping",
    date: "2024-01-14",
    category: "Food & Dining",
  },
  {
    id: "3",
    type: "debit",
    amount: 45.5,
    description: "Gas Station",
    date: "2024-01-13",
    category: "Transportation",
  },
]

export const mockBalance = {
  current: 12847.5,
  available: 12347.5,
  pending: 500.0,
}
