const express = require ("express")
const dotenv = require("dotenv")
const cartRoutes = require("./routes/cartRoutes")
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require ("./routes/orderRoutes")

dotenv.config();

const app = express();

app.use(express.json());

app.use("/carts", cartRoutes)
app.use("/products", productRoutes)
app.use("/orders", orderRoutes)


app.use((err, res)=> {
  console.error(err.stack);
  res.status(500).json({error: "Server Error"})
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`Server on port ${port}`)
})