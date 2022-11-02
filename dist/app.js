"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const userRoute_1 = __importDefault(require("./routers/userRoute"));
const Logger_1 = __importDefault(require("./utils/Logger"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.default.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => Logger_1.default.log('connected to mongoose and mongodb'))
    .catch((error) => Logger_1.default.error(error.message));
// const startServer = () => {
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '* ');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Origin, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json();
    }
    next();
});
app.use((req, res, next) => {
    Logger_1.default.log(`Incoming request: -> Method: [${req.method}] -> Url [${req.url}] 
    -> IP [${req.socket.remoteAddress}]`);
    // On request method
    res.on('finish', () => {
        Logger_1.default.log(`Incoming request: -> Method: [${req.method}] -> Url [${req.url}] 
    -> IP [${req.socket.remoteAddress}] -> status: [${req.statusCode}]`);
    });
    next();
});
app.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));
app.use((req, res, next) => {
    const error = new Error('Not found');
    Logger_1.default.error(error);
    return res.status(404).json({ message: error.message });
    // next(error);
});
// Routes
app.use('/users', userRoute_1.default);
http_1.default.createServer(app).listen(config_1.default.server.port, () => {
    Logger_1.default.log('listening on port ' + config_1.default.server.port);
});
// };
// startServer();
