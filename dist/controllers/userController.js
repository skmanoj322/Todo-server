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
exports.deleteTodo = exports.editTodo = exports.postTodo = exports.registerOne = exports.loginOne = void 0;
const userServices_1 = require("../service/userServices");
const loginOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield (0, userServices_1.login)(req.body);
        // console.log(userFound);
        res.status(200).send(userFound);
    }
    catch (err) {
        return res.status(500).send("error");
    }
});
exports.loginOne = loginOne;
const registerOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, userServices_1.register)(req.body);
        res.status(200).send("inserted Sucessfully");
    }
    catch (error) {
        return res.status(500);
    }
});
exports.registerOne = registerOne;
const postTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.token;
        const updatedData = yield (0, userServices_1.postItem)(req.body, id);
        res.send(updatedData);
    }
    catch (error) {
        return res.status(500);
    }
});
exports.postTodo = postTodo;
const editTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.token;
        yield (0, userServices_1.editItem)(req.body, id);
        res.status(200).send("updated sucessfully");
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.editTodo = editTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.token;
        yield (0, userServices_1.deleteItem)(req.body, id);
        res.status(200).send("updated sucessfully");
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.deleteTodo = deleteTodo;
