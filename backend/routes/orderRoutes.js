const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { placeOrder, getUserOrders } = require("../controllers/orderController");

const router = express.Router();





router.post("/placeOrder", protect, placeOrder)
router.get("/getUserOrders", protect, getUserOrders)





module.exports = router