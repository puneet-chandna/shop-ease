'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface CartItem {
  productId: {
    _id: string
    title: string
    price: number
  }
  quantity: number
}

export default function CartList() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => setCartItems(data.items))
      .catch(error => console.error('Error fetching cart:', error))
  }, [])

  const removeFromCart = async (productId: string) => {
    try {
      const res = await fetch(`/api/cart?productId=${productId}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setCartItems(cartItems.filter(item => item.productId._id !== productId))
      }
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  const placeOrder = async () => {
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      })
      if (res.ok) {
        alert('Order placed successfully!')
        setCartItems([])
        router.push('/')
      }
    } catch (error) {
      console.error('Error placing order:', error)
    }
  }

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.productId._id} className="flex justify-between items-center border-b py-2">
          <div>
            <h3 className="text-xl">{item.productId.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${(item.productId.price * item.quantity).toFixed(2)}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.productId._id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4">
        <p className="text-xl font-bold">
          Total: ${cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0).toFixed(2)}
        </p>
        <button
          onClick={placeOrder}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600 transition-colors"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}