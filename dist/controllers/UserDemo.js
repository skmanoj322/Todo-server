"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUser = void 0;
let users = [];
const getUser = (req, res) => {
    res.json({ massage: "authenticated" });
};
exports.getUser = getUser;
const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
};
exports.getUserById = getUserById;
