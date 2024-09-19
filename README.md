# ShopEase E-Commerce Platform

ShopEase is a modern, full-stack e-commerce platform built with Next.js, React, and MongoDB. It provides a seamless shopping experience with features like product browsing, cart management, and secure checkout.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [API Routes](#api-routes)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

## Features

- Responsive design for mobile and desktop
- Product listing and detail pages
- Shopping cart functionality
- User authentication and authorization
- Checkout process
- Admin panel for product management
- Integration with MongoDB for data storage

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Hero Icons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## Project Structure

```
ecom/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── products/
│   │   │   │   └── route.ts
│   │   │   ├── cart/
│   │   │   │   └── route.ts
│   │   │   └── orders/
│   │   │       └── route.ts
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── LandingPage.tsx
│   │   ├── ProductList.tsx
│   │   └── CartList.tsx
│   ├── lib/
│   │   └── mongodb.ts
│   └── models/
│       ├── Product.ts
│       ├── Cart.ts
│       └── Order.ts
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/puneet-chandna/shop-ease.git
   cd shopease
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables) section).

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Make sure to replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## API Routes

The project includes the following API routes:

- `/api/products`: GET (list products), POST (create product)
- `/api/products/[id]`: GET (product details), PUT (update product), DELETE (remove product)
- `/api/cart`: GET (view cart), POST (add to cart)
- `/api/cart/[id]`: DELETE (remove from cart)
- `/api/orders`: GET (list orders), POST (create order)

## Deployment

To deploy the application, follow these steps:

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

For deployment to platforms like Vercel or Netlify, refer to their respective documentation for Next.js deployments.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
