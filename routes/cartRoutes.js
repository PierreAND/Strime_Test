const express = require ("express")
const cartController = require ("../controllers/cartController")

const router = express.Router();


router.post('/', cartController.createCart);

router.post('/:cartId/items', cartController.addToCart);

router.delete('/items/:cartItemId', cartController.removeFromCart);

module.exports = router;