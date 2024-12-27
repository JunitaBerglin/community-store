import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/community-store";
const client = new MongoClient(uri);

let db;

export async function connectToDatabase() {
  try {
    if (!db) {
      await client.connect();
      db = client.db("community-store");
      console.log("Connected to MongoDB!");
    }
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export async function getCollection(collectionName) {
  const database = await connectToDatabase();
  return database.collection(collectionName);
}
