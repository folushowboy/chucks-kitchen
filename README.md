# Chuks Kitchen 🍽️

A modern, responsive food ordering web application built with React and Vite. Browse menus, customize dishes, manage your cart, and place orders seamlessly.

## 🌟 Features

- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices
- **Menu Discovery**: Browse and discover a variety of dishes organized by categories
- **Food Details**: View detailed information about each dish with customization options
- **Customization**: Add extras and special instructions to your orders
- **Smart Cart**: Easy-to-use shopping cart with add, remove, and quantity management
- **User Authentication**: Sign up and sign in to place orders
- **Search Functionality**: Quickly find your favorite dishes
- **Modern UI**: Clean and intuitive user interface with CSS modules for styling

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chuks-kitchen
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot module reloading
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── cart/           # Shopping cart components
│   ├── dishes/         # Dish display components
│   ├── menu/           # Menu browsing components
│   ├── hero/           # Hero section component
│   ├── search/         # Search functionality
│   ├── sign_in/        # Authentication components
│   └── ...             # Other feature components
├── layout/             # Layout components (Header, Footer, Button)
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Menu.jsx        # Menu browsing page
│   ├── FoodDetails.jsx # Detailed dish view
│   ├── Cart.jsx        # Shopping cart page
│   └── Signin.jsx      # User authentication page
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Routing**: React Router DOM 7.13.0
- **Styling**: CSS Modules
- **Linting**: ESLint

## 🎯 How to Use

1. **Explore**: Start on the home page and discover available dishes
2. **Browse**: Check out the Menu section to see all available items organized by categories
3. **Customize**: Click on a dish to view details and add extras or special instructions
4. **Order**: Add items to your cart and proceed to checkout
5. **Authenticate**: Sign in or create an account to complete your order

## 📱 Pages Overview

- **Home** - Landing page with featured dishes and navigation
- **Menu** - Browse all available dishes and categories
- **Food Details** - View comprehensive information about a specific dish with customization options
- **Cart** - Review and manage items in your shopping cart
- **Sign In** - User authentication and account management

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Chuks Kitchen Team

## 💬 Support

For issues, questions, or feature requests, please open an issue in the repository.
