import express from "express";
import axios from "axios";
import { traceDeprecation } from "process";
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
const port = 5000;

app.use(cors({
  credentials: true,
  AccessControlAllowCredentials: true,
  AccessControlAllowOrigin: '*',
}));
app.use(bodyParser.json())

app.post("/events", async(req, res) => {
  await axios.post("http://auth-clusterip-srv/5001/events", req.body)
  await axios.post("http://register-clusterip-srv/5002/events", req.body)
  
});

app.get('/events', (req, res) => {
  res.send('dsdasda')
})

app.listen(port, () => console.log(`Event router running on port ${port}`));
