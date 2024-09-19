import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  }],
  orderDate: { type: Date, default: Date.now }
})

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)