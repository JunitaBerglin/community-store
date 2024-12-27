import express from "express";
import { connectToDatabase } from "./database.js";
import { v4 as uuidv4 } from "uuid"; 

const app = express();
const port = 5000;

app.use(express.json());

let db;
connectToDatabase().then((database) => {
    db = database;
    console.log("Connected to database");
});

// 1. Register a new user
app.post("/register", async (req, res) => {
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
        // Find or create a document for the postal code
        const result = await db.collection("users").findOneAndUpdate(
            { postalCode },
            { $push: { users: newUser } },
            { upsert: true, returnDocument: "after" }
        );

        res.status(201).send(result.value);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({ error: "Failed to register user" });
    }
});

// 2. Fetch users by postal code
app.get("/users/:postalCode", async (req, res) => {
    const { postalCode } = req.params;

    try {
        const document = await db.collection("users").findOne({ postalCode });
        if (!document) {
            return res.status(404).send({ error: "No users found for this postal code" });
        }

        res.send(document);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ error: "Failed to fetch users" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
