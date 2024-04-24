import express from "express";
import mongoose from "mongoose";
import Router from "./routes/index.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import errorHandler from "./middlewares/ErrorHandling.js";
import { config } from 'dotenv';

config();

const DB_URL =
  "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+
  "@cluster0.ay4fv0i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Expose-Headers", "*");
  next();
});
app.use(express.static("static"));
app.use(fileUpload());
app.use("/api", Router);
app.use(errorHandler)

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(process.env.PORT, () => console.log("Server started on port " + process.env.PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
