import { Request, Response } from "express";
import {
  register,
  login,
  postItem,
  editItem,
  deleteItem,
} from "../service/userServices";
import { CustomRequest } from "../middleware/auth";

export const loginOne = async (req: Request, res: Response) => {
  try {
    const userFound = await login(req.body);
    // console.log(userFound);
    res.status(200).send(userFound);
  } catch (err) {
    return res.status(500).send("error");
  }
};
export const registerOne = async (req: Request, res: Response) => {
  try {
    await register(req.body);
    res.status(200).send("inserted Sucessfully");
  } catch (error) {
    return res.status(500);
  }
};

export const postTodo = async (req: Request, res: Response) => {
  try {
    const id = (req as CustomRequest).token;
    const updatedData = await postItem(req.body, id);
    res.send(updatedData);
  } catch (error) {
    return res.status(500);
  }
};

export const editTodo = async (req: Request, res: Response) => {
  try {
    const id = (req as CustomRequest).token;
    await editItem(req.body, id);
    res.status(200).send("updated sucessfully");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = (req as CustomRequest).token;
    await deleteItem(req.body, id);
    res.status(200).send("updated sucessfully");
  } catch (error) {
    return res.status(500).send(error);
  }
};
