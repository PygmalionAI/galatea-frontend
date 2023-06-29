import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
dotenv.config();

export async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(process.env.MONGODBURL);
    console.log('Connected to MongoDB!');
    // Use the client object to perform database operations
    // ...
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}