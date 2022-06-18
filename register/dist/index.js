"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
const port = 5002;
app.get('/events', (_, res) => {
    console.log('register service got an event');
    res.status(200);
});
app.listen(port, () => console.log(`Register service running on port ${port}`));
//# sourceMappingURL=index.js.map