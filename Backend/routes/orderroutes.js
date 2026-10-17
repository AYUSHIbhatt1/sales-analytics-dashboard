const express = require("express");
const router = express.Router();

const Order = require("../Models/ordermodel");

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      message: "Orders fetched successfully",
      orders
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;