import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../../lib/mongodb'
import Product from '../../../../models/Product'


export async function GET() {
  try {
    await connectToDatabase()
    const products = await Product.find({})
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    await connectToDatabase()
    const product = new Product(body)
    await product.save()
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}