import { MongoClient, Db } from "mongodb";

const uri = "mongodb://localhost:5173";
const client = new MongoClient(uri);

let db: Db;

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

export async function getCollection(collectionName: string) {
  const database = await connectToDatabase();
  return database.collection(collectionName);
}
