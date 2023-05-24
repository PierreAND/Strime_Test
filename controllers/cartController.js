const CartModel = require('../models/cartModel');


const createCart = async (req, res, next) => {
  try {
    const cart = await CartModel.createCart();
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

const addToCart = async (req, res, next) => {
  try {
    const { cartId, productId, quantity } = req.body;
    const cartItem = await CartModel.addToCart(cartId, productId, quantity);
    res.status(201).json(cartItem);
  } catch (error) {
    next(error);
  }
};


const removeFromCart = async (req, res, next) => {
  try {
    const { cartItemId } = req.params;
    const cartItem = await CartModel.removeFromCart(cartItemId);
    res.json(cartItem);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createCart,
  addToCart,
  removeFromCart
}