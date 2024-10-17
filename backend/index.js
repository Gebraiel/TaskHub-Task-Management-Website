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
const User = require("../models/userSchema");

const dbConnect = require("./config/dbConnect");

app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

app.get(`/`, (req, res) => {
  console.log("Hello world !!!!");

  res.send("Hello world !!!!");
});
app.get('/users',(req,res)=>{
    try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

});
const port = process.env.PORT || 8000;

app.listen(3000, () => {
  console.log("Hello");
  dbConnect();
  console.log(`Server is running on port : https://taskhubapi.vercel.app:${port}/`);
});
module.exports = app; // Export the app
