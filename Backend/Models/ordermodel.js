
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },

  customer: {
    type: String,
    required: true,
  },

  product: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
    min: 0,
  },

  status: {
    type: String,
    enum: ["completed", "pending", "cancelled"],
    default: "pending",
  },

  orderDate: {
    type: Date,
    required: true,
  },
  quantity: {
  type: Number,
  required: true,
  min: 1
},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
