import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../../lib/mongodb'
import Cart from '../../../../models/Cart'

export async function GET() {
  try {
    await connectToDatabase()
    let cart = await Cart.findOne().populate('items.productId')
    if (!cart) {
      cart = new Cart({ items: [] })
      await cart.save()
    }
    return NextResponse.json(cart)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch cart' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { productId, quantity } = await request.json()
    await connectToDatabase()
    let cart = await Cart.findOne()
    if (!cart) {
      cart = new Cart({ items: [] })
    }
    const existingItem = cart.items.find((item: { productId: any; quantity: number }) => item.productId.toString() === productId)
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.items.push({ productId, quantity })
    }
    await cart.save()
    return NextResponse.json(cart)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update cart' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')

  if (!productId) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
  }

  try {
    await connectToDatabase()
    const cart = await Cart.findOne()
    if (cart) {
      cart.items = cart.items.filter((item: { productId: any }) => item.productId.toString() !== productId)
      await cart.save()
    }
    return NextResponse.json({ message: 'Item removed from cart' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove item from cart' }, { status: 500 })
  }
}