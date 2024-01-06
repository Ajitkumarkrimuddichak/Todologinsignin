import express from "express";
import { DB_CONNECT } from "./utils/constants.js";
import apiRoute, { apiProtected } from "./routes/api.js";
import mongoose from "mongoose";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";
import cors from "cors";

const app = express();

mongoose.connect(DB_CONNECT, { useNewUrlParser: true }, (e) => console.log(e));
const port = 8000;

app.use(cors());
app.use(express.json());
app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);

app.listen(port, () => {
  console.log(`Server is Connect Post.. ${port}`);
});
