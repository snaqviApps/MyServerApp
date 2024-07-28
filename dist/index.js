"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (request, response) => {
    response.send('<h1>Hi from React-Native</h1>');
});
const PORT = 8000;
app.listen(PORT, () => {
    console.log("server is listening at port: " + PORT);
});
