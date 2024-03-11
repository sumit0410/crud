import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

// database connection...

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});

app.use("/api", route);
