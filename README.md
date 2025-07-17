# 💳 Wallet Dashboard

A modern, responsive wallet dashboard application built with Next.js, featuring user authentication, balance tracking, transaction history, and dark mode support.

![Wallet Dashboard](https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=600&q=80)

## ✨ Features

### 🔐 Authentication

- Secure login system with hardcoded demo credentials
- Protected routing (dashboard accessible only after login)
- Automatic session persistence
- Clean, responsive login interface

### 📊 Dashboard

- **Balance Overview**: Current, available, and pending balances
- **Recent Transactions**: Last 3 transactions with detailed information
- **Transaction Categories**: Color-coded transaction types
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### 🎨 User Experience

- **Dark Mode Toggle**: Seamless light/dark theme switching
- **System Theme Detection**: Respects your OS theme preference
- **Smooth Animations**: Loading states and transitions
- **Modern UI**: Clean design with Tailwind CSS and shadcn/ui components

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install
   \`\`\`

3. **Install required theme dependency**
   \`\`\`bash
   npm install next-themes
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev
   \`\`\`

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Demo Credentials

Use these credentials to access the dashboard:

| Field        | Value               |
| ------------ | ------------------- |
| **Email**    | \`demo@wallet.com\` |
| **Password** | \`password123\`     |

> 💡 **Tip**: The credentials are also displayed on the login page for convenience.

## 📱 Usage Guide

### Login Process

1. Navigate to the application
2. Enter the demo credentials
3. Click "Sign In"
4. You'll be automatically redirected to the dashboard

### Dashboard Features

- **Balance Cards**: View your current, available, and pending balances
- **Transaction History**: See your recent financial activities
- **Dark Mode**: Toggle between light and dark themes using the button in the header
- **Logout**: Click the logout button to return to the login screen

### Navigation

- **Automatic Redirects**:
  - Logged-out users → Login page
  - Logged-in users → Dashboard
  - Direct dashboard access requires authentication

## 🛠️ Tech Stack

| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| **Next.js 14**   | React framework with App Router |
| **TypeScript**   | Type-safe JavaScript            |
| **Tailwind CSS** | Utility-first CSS framework     |
| **shadcn/ui**    | Modern UI component library     |
| **next-themes**  | Dark mode implementation        |
| **Lucide React** | Beautiful icon library          |

## 📁 Project Structure

\`\`\`
wallet-dashboard/
├── app/
│ ├── dashboard/
│ │ └── page.tsx # Dashboard page
│ ├── login/
│ │ └── page.tsx # Login page
│ ├── globals.css # Global styles & CSS variables
│ ├── layout.tsx # Root layout with providers
│ └── page.tsx # Home page (redirects)
├── components/
│ ├── ui/ # shadcn/ui components
│ ├── auth-provider.tsx # Authentication context
│ ├── theme-provider.tsx # Theme context
│ └── theme-toggle.tsx # Dark mode toggle
├── lib/
│ ├── mock-data.ts # Sample data for demo
│ └── utils.ts # Utility functions
├── tailwind.config.ts # Tailwind configuration
└── README.md # This file
\`\`\`

## 🎯 Key Components

### Authentication System

- **AuthProvider**: Manages user state and authentication logic
- **Protected Routes**: Automatic redirects based on auth status
- **Session Persistence**: Remembers login state across browser sessions

### Dashboard Components

- **Balance Cards**: Display financial overview with trend indicators
- **Transaction List**: Shows recent activities with categories and amounts
- **Responsive Layout**: Adapts to different screen sizes

### Theme System

- **ThemeProvider**: Handles light/dark mode switching
- **CSS Variables**: Comprehensive color system for both themes
- **System Detection**: Automatically detects OS theme preference

## 🔧 Customization

### Adding New Transactions

Edit \`lib/mock-data.ts\` to add more sample transactions:

\`\`\`typescript
export const mockTransactions: Transaction[] = [
{
id: "4",
type: "debit",
amount: 25.99,
description: "Coffee Shop",
date: "2024-01-12",
category: "Food & Dining",
},
// Add more transactions...
]
\`\`\`

### Modifying Balance

Update the balance values in \`lib/mock-data.ts\`:

\`\`\`typescript
export const mockBalance = {
current: 15000.00,
available: 14500.00,
pending: 500.00,
}
\`\`\`

### Changing Theme Colors

Modify CSS variables in \`app/globals.css\` to customize the color scheme.

## 🚨 Troubleshooting

### Dark Mode Not Working

1. Ensure \`next-themes\` is installed: \`npm install next-themes\`
2. Clear browser cache and localStorage
3. Restart the development server

### Login Issues

- Make sure you're using the exact credentials: \`demo@wallet.com\` / \`password123\`
- Check browser console for any JavaScript errors

### Build Issues

1. Delete \`node_modules\` and \`.next\` folders
2. Run \`npm install\` again
3. Restart the development server

## 📦 Production Build

To create a production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

This is a demo project, but feel free to:

- Report issues or bugs
- Suggest new features
- Submit improvements
- Fork and customize for your needs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the icon set
- **Next.js** team for the amazing React framework

---

**Happy coding! 🚀**

For questions or support, please check the troubleshooting section above or refer to the component documentation.
