"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.deleteItem = exports.editItem = exports.postItem = exports.register = exports.login = void 0;
const User_1 = require("../model/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const mongoose_1 = __importDefault(require("mongoose"));
// import { DocumentDefinition } from "mongoose";
function login(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userFound = yield User_1.userModel.findOne({
                username: user.username,
            });
            console.log(userFound);
            if (!userFound) {
                throw new Error("Name is not found");
            }
            const isMatch = bcrypt_1.default.compareSync(user.password, userFound.password);
            if (isMatch) {
                const token = jsonwebtoken_1.default.sign({ username: userFound.username, id: userFound._id }, auth_1.SECRET, {
                    expiresIn: "7d",
                });
                return { username: userFound.username, token, id: userFound._id };
            }
            else {
                throw new Error("password is not correct");
            }
        }
        catch (error) {
            throw error;
        }
    });
}
exports.login = login;
function register(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield User_1.userModel.create(user);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.register = register;
function postItem(body, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = new User_1.todoModel({
                todo: body.todo,
                user: new mongoose_1.default.Types.ObjectId(id),
                done: false,
            });
            todo.save();
            return todo;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.postItem = postItem;
function editItem(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield User_1.todoModel.updateOne({
                _id: new mongoose_1.default.Types.ObjectId(data.id),
                user: new mongoose_1.default.Types.ObjectId(id),
            }, { done: data.done });
        }
        catch (err) {
            throw err;
        }
    });
}
exports.editItem = editItem;
function deleteItem(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield User_1.todoModel.findOneAndDelete({
                _id: new mongoose_1.default.Types.ObjectId(data.id),
                user: new mongoose_1.default.Types.ObjectId(id),
            });
        }
        catch (error) {
            throw error;
        }
    });
}
exports.deleteItem = deleteItem;
function getItem(data, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield User_1.todoModel.find({
                user: new mongoose_1.default.Types.ObjectId(id),
            });
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getItem = getItem;
