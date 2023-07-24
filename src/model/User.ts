import { Document, Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";
const saltRound = 8;

export interface User extends Document {
  username: string;
  password: string;
}
export interface Todo extends Document {
  todo: string;
  user: Types.ObjectId | User;
  done: boolean;
}

const userSchema = new Schema<User>({
  username: { type: String, unique: true },
  password: { type: String },
});

const todoSchema = new Schema<Todo>({
  todo: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "Todo" },
  done: { type: Boolean },
});
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRound);
  }
  next();
});
export const userModel = model<User>("User", userSchema);
export const todoModel = model<Todo>("Todo", todoSchema);
