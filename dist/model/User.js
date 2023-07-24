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
exports.todoModel = exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRound = 8;
const userSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    password: { type: String },
});
const todoSchema = new mongoose_1.Schema({
    todo: { type: String },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "Todo" },
    done: { type: Boolean },
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (user.isModified("password")) {
            user.password = yield bcrypt_1.default.hash(user.password, saltRound);
        }
        next();
    });
});
exports.userModel = (0, mongoose_1.model)("User", userSchema);
exports.todoModel = (0, mongoose_1.model)("Todo", todoSchema);
