import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/imgUpload.js";

const app = express();

config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/unsplash", routes);

app.get("/", (req, res) =>
  res.json(200).json({ message: "The server is running" })
);

const PORT = process.env.PORT || 5000;
const URL = process.env.DB_URL;

mongoose.connect(URL).then(() => {
  app.listen(PORT, () => {
    console.log(
      "DB is connected and Server listening on port " + process.env.PORT
    );
  });
});
