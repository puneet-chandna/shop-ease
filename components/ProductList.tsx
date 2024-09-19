'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Product {
  _id: string
  title: string
  description: string
  price: number
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(product => (
        <div key={product._id} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            <p className="mt-2 text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
            <Link href={`/products/${product._id}`} className="mt-4 block w-full bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}