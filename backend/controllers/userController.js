import { v4 as uuidv4 } from 'uuid';
import { getDatabase } from '../database.js';

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
        const db = await getDatabase();
        const result = await db.collection("users").findOneAndUpdate(
            { postalCode },
            { $push: { users: newUser } },
            { upsert: true, returnDocument: "after" }
        );

        res.status(201).send(result.value);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to register user" });
    }
}
