import e from "express";
import { MongoClient,Db } from "mongodb";

const uri = process.env.MONGO_URI ?? "mongodb://localhost:27017";
const dbName  = process.env.DB_NAME ?? "myadb";

let db: Db;
let client: MongoClient;

export async function connectDB(): Promise<void> {
  client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log(" MongoDB connected successfully! 🚀");
  } 

  export function getDB(): Db {
    if (!db) {
      throw new Error("⚠️Database not connected. Call connectDB() first.");
    } 
    return db;
}  

export async function closeDB(): Promise<void> {
  await client.close();
}
