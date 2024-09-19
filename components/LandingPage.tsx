'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ShoppingCartIcon, CreditCardIcon, TruckIcon } from '@heroicons/react/24/outline'


interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  

  const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="text-4xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function LandingPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">ShopEase</h1>
            <div className="flex space-x-4">
              <Link href="/products" className="text-gray-500 hover:text-gray-900">Products</Link>
              <Link href="/cart" className="text-gray-500 hover:text-gray-900">Cart</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Welcome to ShopEase
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Your one-stop shop for all your needs. Discover amazing products at unbeatable prices.
            </p>
            <div className="mt-8">
              <Link
                href="/products"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShoppingCartIcon className="h-12 w-12" />}
              title="Wide Selection"
              description="Browse through thousands of products from top brands."
            />
            <FeatureCard
              icon={<CreditCardIcon className="h-12 w-12" />}
              title="Secure Payments"
              description="Shop with confidence using our secure payment options."
            />
            <FeatureCard
              icon={<TruckIcon className="h-12 w-12" />}
              title="Fast Delivery"
              description="Get your orders delivered to your doorstep in no time."
            />
          </div>
        </section>

        <section className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.8 }
              }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-extrabold mb-4">Ready to Start Shopping?</h2>
              <p className="text-xl mb-8">Join thousands of satisfied customers and experience the best in online shopping.</p>
              <Link
                href="/products"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 ShopEase. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}