import { Todo, User, todoModel, userModel } from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../middleware/auth";
import mongoose from "mongoose";
// import { DocumentDefinition } from "mongoose";

export async function login(user: User) {
  try {
    const userFound = await userModel.findOne({
      username: user.username,
    });
    console.log(userFound);

    if (!userFound) {
      throw new Error("Name is not found");
    }
    const isMatch = bcrypt.compareSync(user.password, userFound.password);
    if (isMatch) {
      const token = jwt.sign(
        { username: userFound.username, id: userFound._id },
        SECRET,
        {
          expiresIn: "7d",
        }
      );
      return { username: userFound.username, token, id: userFound._id };
    } else {
      throw new Error("password is not correct");
    }
  } catch (error) {
    throw error;
  }
}

export async function register(user: User): Promise<void> {
  try {
    await userModel.create(user);
  } catch (error) {
    throw error;
  }
}

export async function postItem(body: any, id: any) {
  try {
    const todo = new todoModel({
      todo: body.todo,
      user: new mongoose.Types.ObjectId(id),
      done: false,
    });

    todo.save();
    return todo;
  } catch (err) {
    throw err;
  }
}

export async function editItem(data: any, id: any) {
  try {
    await todoModel.updateOne(
      {
        _id: new mongoose.Types.ObjectId(data.id),
        user: new mongoose.Types.ObjectId(id),
      },
      { done: data.done }
    );
  } catch (err) {
    throw err;
  }
}
export async function deleteItem(data: any, id: any) {
  try {
    await todoModel.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(data.id),
      user: new mongoose.Types.ObjectId(id),
    });
  } catch (error) {
    throw error;
  }
}
export async function getItem(data: any, id: any) {
  try {
    const data = await todoModel.find({
      user: new mongoose.Types.ObjectId(id),
    });
    return data;
  } catch (error) {
    throw error;
  }
}
