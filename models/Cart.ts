import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
  }]
})

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema)