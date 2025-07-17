# 💳 Wallet Dashboard

A modern, responsive wallet dashboard application built with Next.js, featuring user authentication, balance tracking, transaction history, and dark mode support.

![Wallet Dashboard](https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=600&q=80)
---

## 📺 Demo Video

Want to see it in action?  
▶️ **Watch the live walkthrough on YouTube**: [https://youtu.be/Gc2BFxB2vJI](https://youtu.be/Gc2BFxB2vJI)

---
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

### Installation Steps

1.  **Clone the Repository**

    Start by cloning the project files from GitHub to your local machine using the following command:

    ```bash
    git clone https://github.com/iasraful/wallet-dashboard.git
    ```

    After cloning, navigate into the project directory:

    ```bash
    cd wallet-dashboard

    ```

2.  **Install Core Dependencies**

    Once you are inside the `wallet-dashboard` directory, install the main project dependencies using your preferred package manager:

    ```bash
    npm install

    ```


3.  **Run the Development Server**

    After all dependencies are successfully installed, you can start the development server:

    ```bash
    npm run dev
  
    ```

    This command will compile the project and make it accessible locally.

4.  **Open in Browser**

    The application will now be running. Open your web browser and navigate to the following address to access the Wallet Dashboard:

    [http://localhost:3000/login](http://localhost:3000/login)

    You should see the login page.

## 🔑 Demo Credentials

Use these credentials to access the dashboard:

| Field | Value |
|-------|-------|
| **Email** | \`demo@wallet.com\` |
| **Password** | \`password123\` |

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

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **shadcn/ui** | Modern UI component library |
| **next-themes** | Dark mode implementation |
| **Lucide React** | Beautiful icon library |


### Changing Theme Colors
Modify CSS variables in \`app/globals.css\` to customize the color scheme.

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

## 🤝 Get Connected !

📧 Email: iasraful321@gmail.com

💼 LinkedIn: Asraful Islam

📱 Phone: +880 1642-297037

**Happy coding! 🚀**

