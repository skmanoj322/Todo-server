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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchaema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: String,
});
const User = (0, mongoose_1.model)("User", userSchaema);
run().catch((err) => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)("mongodb+srv://skmanoj322:1234@cluster0.lzqieez.mongodb.net/");
    });
}
