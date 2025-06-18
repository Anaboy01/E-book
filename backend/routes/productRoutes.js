const express = require("express");
const { createEbook, updateEbook, getAllEbooks } = require("../controllers/productController");
const { adminProtect } = require("../middleware/authMiddleware");
const router = express.Router();



router.post("/createEbook",adminProtect, createEbook)
router.patch("/updateEbook/:id",adminProtect, updateEbook)

router.get("/getAllEbooks", getAllEbooks )




module.exports = router