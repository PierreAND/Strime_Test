const express = require ("express")

const router = express.Router();

const cartController = require ("../controllers/cartController")




router.post('/', cartController.createCart);

router.post('/:cartId/items', cartController.addToCart);

router.delete('/items/:cartItemId', cartController.removeFromCart);

module.exports = router;