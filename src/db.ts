import { connect, ConnectOptions } from "mongoose";

export const connectDb = async () => {
  const url = "mongodb+srv://skmanoj322:1234@cluster0.lzqieez.mongodb.net/auth";
  try {
    await connect(url);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
