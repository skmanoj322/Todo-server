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
exports.connectDb = void 0;
const mongoose_1 = require("mongoose");
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "mongodb+srv://skmanoj322:1234@cluster0.lzqieez.mongodb.net/auth";
    try {
        yield (0, mongoose_1.connect)(url);
    }
    catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
});
exports.connectDb = connectDb;
