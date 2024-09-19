import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../../lib/mongodb'
import Order from '../../../../models/Order'
import Cart from '../../../../models/Cart'

export async function POST(request: Request) {
  try {
    await connectToDatabase()
    const cart = await Cart.findOne().populate('items.productId')
    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }
    const order = new Order({
      items: cart.items.map((item: { productId: { _id: string }, quantity: number }) => ({
        productId: item.productId._id,
        quantity: item.quantity
      }))
    })
    await order.save()
    cart.items = []
    await cart.save()
    return NextResponse.json({ message: 'Order placed successfully', orderId: order._id })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to place order' }, { status: 500 })
  }
}

