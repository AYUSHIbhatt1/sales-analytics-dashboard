const express = require("express");
const router = express.Router();
const OrderModel=require('../Models/ordermodel');

router.get("/summary", async (req, res) => {
  try {
    const summary = await OrderModel.aggregate([
      {
        $match: {
          status: "completed"
        }
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$amount" },
          totalOrders: { $sum: 1 },
          averageOrderValue: { $avg: "$amount" },
          productsSold: { $sum: "$quantity" }
        }
      }
    ]);

    res.status(200).json({
      summary: summary[0] || {
        totalRevenue: 0,
        totalOrders: 0,
        averageOrderValue: 0,
        productsSold: 0
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/revenue", async (req, res) => {
  try {
    const revenue = await OrderModel.aggregate([
      {
        $match: {
          status: "completed"
        }
      },
      {
        $group: {
          _id: {
            month: { $month: "$orderDate" },
            year: { $year: "$orderDate" }
          },
          totalRevenue: { $sum: "$amount" }
        }
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1
        }
      }
    ]);

    res.status(200).json({ revenue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/categories", async (req, res) => {
  try {
    const categories = await OrderModel.aggregate([
      {
        $match: {
          status: "completed"
        }
      },
      {
        $group: {
          _id: "$category",
          totalRevenue: { $sum: "$amount" }
        }
      },
      {
        $sort: {
          totalRevenue: -1
        }
      }
    ]);

    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports=router
