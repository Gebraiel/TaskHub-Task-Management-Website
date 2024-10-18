const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const taskRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
dotenv.config();

const dbConnect = require("./config/dbConnect");

app.get(`/api`, (req, res) => {
  console.log("Hello API!!!!");

  res.send(`Hello API`);
});
