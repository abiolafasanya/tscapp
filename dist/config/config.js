"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URI = 'mongodb://localhost/tscapp';
// 'mongodb+srv://fastbeet:' +
//   MONGO_PASSWORD +
//   '@cluster0.uhz9qsw.mongodb.net/tscapp' || 'mongodb://localhost/fidelity';
const PORT = process.env.PORT || 3000;
const config = {
    mongo: {
        url: MONGO_URI,
    },
    server: {
        port: PORT,
    },
    env: process.env.NODE_ENV
};
exports.default = config;
