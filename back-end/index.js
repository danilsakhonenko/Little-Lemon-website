import express from "express";
import mongoose from "mongoose";
import menuRouter from "./menuRouter.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:user@cluster0.ay4fv0i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Expose-Headers", "*");
  next();
});
app.use(express.static("static"));
app.use(fileUpload());
app.use("/menu", menuRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
