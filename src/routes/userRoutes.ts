import express, { Router } from "express";
import { getUser } from "../controllers/UserDemo";
import * as userController from "../controllers/userController";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/users/", auth, userController.getTodo);
router.post("/login", userController.loginOne);
router.post("/register", userController.registerOne);
router.post("/addtodo", auth, userController.postTodo);
router.put("/edittodo", auth, userController.editTodo);
router.delete("/deletetodo", auth, userController.deleteTodo);

export default router;
