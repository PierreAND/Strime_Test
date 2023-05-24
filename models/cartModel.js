const db = require("../db/db")

const createCart = async () => {
  const requestText = "INSERT INTO CART"
  const result = await db.request(requestText);
  return result.rows[0]
}

const addToCart = async (cartId, productId, quantity) => {
  const requestText = 'INSERT INTO cart_items';
  const values = [cartId, productId, quantity];
  const result = await db.request(requestText, values);
  return result.rows[0];
}

const removeFromCart = async (cartItemId) => {
  const requestText = 'DELETE FROM cart_items';
     const values = [cartItemId];
  const result = await db.request(requestText, values);
  return result.rows[0];
};
module.exports = {
  createCart,
  addToCart,
  removeFromCart,
}