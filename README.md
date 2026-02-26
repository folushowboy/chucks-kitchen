# Chuks Kitchen - Food Ordering Platform

A modern, responsive web application for browsing and ordering food online. Built with React and Vite, Chuks Kitchen provides an intuitive user experience for discovering dishes, customizing orders, and managing a shopping cart.

## Features

- **Browse Dishes & Menu**: Explore a comprehensive menu of available dishes with detailed descriptions
- **Food Details Page**: View detailed information about each dish including ingredients, nutritional info, and pricing
- **Shopping Cart**: Add items to cart, manage quantities, and view order summary
- **Search Functionality**: Quickly search for specific dishes or food items
- **Dish Customization**: Add extras and additional toppings to customize your meal
- **User Authentication**: Sign in functionality for personalized experience
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Category Filtering**: Browse dishes by category (menu, dishes, etc.)

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Linting**: ESLint
- **Package Manager**: npm

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/folushowboy/chucks-kitchen.git>
cd chuks-kitchen
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Server

Run the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application is live at https://chuck-foods.netlify.app/

### Building for Production

Build the project for production:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code for linting errors:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── adittions/       # Add-ons/extras selection
│   ├── cart/            # Shopping cart display
│   ├── cart_card/       # Individual cart item card
│   ├── discovery/       # Food discovery section
│   ├── dish-list/       # List of dishes view
│   ├── dish-list-card/  # Individual dish list card
│   ├── dishes/          # Dishes display component
│   ├── dishes-card/     # Individual dish card
│   ├── extra/           # Extra items selection
│   ├── food/            # Food display component
│   ├── foodcard/        # Individual food item card
│   ├── hero/            # Hero banner section
│   ├── index/           # Index/home section
│   ├── instruction/     # Cooking instructions
│   ├── menu/            # Menu display component
│   ├── menu-card/       # Individual menu card
│   ├── menu-list/       # Menu list view
│   ├── menu-list-card/  # Individual menu list card
│   ├── protein-card/    # Protein selection card
│   ├── serach/          # Search component
│   └── sign_in/         # Sign in/authentication
├── layout/              # Layout components
│   ├── button/          # Reusable button component
│   ├── footer/          # Footer section
│   └── header/          # Header/navigation
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   ├── Menu.jsx         # Menu page
│   ├── FoodDetails.jsx  # Food details page
│   ├── Cart.jsx         # Shopping cart page
│   ├── Signin.jsx       # Sign in page
│   └── Welcome.jsx      # Welcome page
├── assets/              # Static assets
│   ├── icons/           # Icon files
│   └── images/          # Image files
├── App.jsx              # Main app component
├── App.css              # Main app styles
├── main.jsx             # Application entry point
└── index.css            # Global styles
├── Data.jsx             # Data utilities/constants
└── DishData.jsx         # Dish data/mock data
```

## Key Components

- **Hero**: Eye-catching hero section on homepage
- **Menu**: Display and browse menu categories
- **Dishes**: Show available dishes with cards
- **Cart**: Full shopping cart management
- **Search**: Search and filter functionality
- **SignIn**: User authentication
- **Header/Footer**: Navigation and site footer
- **Additions/Extras**: Customization options for orders

## Getting Started

1. Start the development server: `npm run dev`
2. Navigate to the home page to browse dishes
3. Use the search feature to find specific items
4. Click on any dish to view details and customization options
5. Add items to your cart and proceed to checkout
6. Sign in for a personalized experience

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for bugs and feature requests.

## License

This project is open source and available under the MIT License.
