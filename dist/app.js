"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const Logger_1 = __importDefault(require("./utils/Logger"));
mongoose_1.default
    .connect(config_1.default.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => console.log('connected to mongoose and mongodb'))
    .catch((error) => console.log(error.message));
const app = (0, express_1.default)();
app.set('port', 3000);
app.get('/', (req, res) => {
    console.log(req.query);
    res.json('Running node server');
});
Logger_1.default.log('Running node server');
app.listen(app.get('port'), () => console.log('listening on port'));
