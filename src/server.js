import express from "express";
import morgan from "morgan";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(morgan("dev"));

app.use("/products", productRouter);
app.use("/carts", cartRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
