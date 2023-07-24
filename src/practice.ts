import express, { Express, Request, Response } from "express";
import { Schema, model, connect } from "mongoose";

interface Iuser {
  email: string;
  password: string;
  avatar?: string;
}

const userSchaema = new Schema<Iuser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
});

const User = model<Iuser>("User", userSchaema);
run().catch((err) => console.log(err));

async function run() {
  await connect("mongodb+srv://skmanoj322:1234@cluster0.lzqieez.mongodb.net/");
}
