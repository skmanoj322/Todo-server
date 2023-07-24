import { Request, Response } from "express";
import { User } from "../model/User";
import mongoose from "mongoose";
let users: User[] = [];
export const getUser = (req: Request, res: Response) => {
  res.json({ massage: "authenticated" });
};

export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
};
