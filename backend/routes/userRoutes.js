import express from "express";
import { getProductsBySeller } from "../controllers/productController.js";
import { registerUser } from "../controllers/userController.js";

const router = express.Router(); 

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: This endpoint registers a new user and stores their information in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postalCode:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               profileImageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Failed to register user
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /users/seller/{sellerId}:
 *   get:
 *     summary: Get products by seller
 *     description: Retrieve all products associated with a specific seller.
 *     parameters:
 *       - in: path
 *         name: sellerId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the seller
 *     responses:
 *       200:
 *         description: Successfully retrieved products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Failed to fetch products
 */
router.get("/seller/:sellerId", async (req, res) => {
  try {
    const products = await getProductsBySeller(req.params.sellerId);
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

export { router as userRoutes }; 