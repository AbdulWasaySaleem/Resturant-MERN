import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userEmail:{type: String, required: true},
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      title: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
    }
  ],
}, { timestamps: true });

const Order = mongoose.model('Orders', orderSchema);

export default Order;
