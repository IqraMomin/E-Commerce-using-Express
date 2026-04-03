const express = require('express');
const router = express.Router();

const cartController =require("../controllers/cartController")

router.get("/cart/:userid",cartController.getCartForUser)

router.post("/cart/:userid",cartController.addProductToCart)


module.exports = router;