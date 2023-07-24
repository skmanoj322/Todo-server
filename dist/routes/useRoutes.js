"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserDemo_1 = require("../controllers/UserDemo");
const router = (0, express_1.Router)();
router.get("users/", UserDemo_1.getUser);
