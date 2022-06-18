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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//download axios for sending events to services
const cors = require("cors");
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.post("/events", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('event', req.body);
    // const response = await axios.post("http://localhost:5001/events")
    // console.log(response.data)
    // const data = req.body;
    // switch (data.event) {
    //   case "SIGN_IN":
    //     return;
    //   case "SIGN_UP":
    // axios.post("http://localhost:5002/events");
    //     return;
    //   case "TRAIN_TICKETS":
    //     return;
    //   case "TICKET_ORDERED":
    //     return;
    //   case "MY_TICKETS":
    //     return;
    //   default:
    //     res.json(400);
    // }
}));
app.listen(port, () => console.log(`Event router running on port ${port}`));
//# sourceMappingURL=index.js.map