import express from "express";
import { connectToDatabase, getCollection } from "./database";
import { Product } from "../src/types/products";

const app = express();
const port = 5173;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Community Store Backend is running!");
});

app.post("/add-product", async (req, res) => {
  try {
    const product: Product = {
      ...req.body,
      createdAt: new Date(),
      id: new Date().getTime().toString(),
    };

    const products = await getCollection("products");
    const result = await products.insertOne(product);
    res.status(201).send(result);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send({ error: "Failed to add product" });
  }
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
  });
