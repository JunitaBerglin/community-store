import { v4 as uuidv4 } from "uuid";
import { User } from "../models/userModel.js"; // Use named import

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         address:
 *           type: string
 *         profileImageUrl:
 *           type: string
 *         registeredAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Add a new user to the database.
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       500:
 *         description: Failed to register user.
 */
export async function registerUser(req, res) {
    const { postalCode, name, email, address, profileImageUrl } = req.body;

    if (!postalCode || !name || !email || !address) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    const newUser = {
        id: uuidv4(),
        name,
        email,
        address,
        profileImageUrl: profileImageUrl || null,
        registeredAt: new Date().toISOString(),
    };

    try {
        const result = await User.findOneAndUpdate(
            { postalCode },
            { $push: { users: newUser } },
            { upsert: true, returnDocument: "after" }
        );

        res.status(201).send(result.value);
    } catch (error) {
        console.error("Error in registerUser:", error.message);
        res.status(500).send({ error: "Failed to register user" });
    }
}