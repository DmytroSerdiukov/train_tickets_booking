"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
const port = 5001;
app.use(cors({
    credentials: true,
    AccessControlAllowCredentials: true,
    AccessControlAllowOrigin: '*',
}));
app.use(bodyParser.json());
app.post('/events', (req, res) => {
    console.log('auth event');
    res.send('dsdasda');
    res.json({ res: 'working' });
});
app.post('/auth', (req, res) => {
    console.log('User data', req.body);
});
app.listen(port, () => console.log(`Auth service running on ${port} port`));
//# sourceMappingURL=index.js.map