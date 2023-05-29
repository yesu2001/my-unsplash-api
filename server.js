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
app.use("/", routes);

const PORT = process.env.PORT || 5000;
const URL = process.env.DB_URL;

mongoose.connect(URL).then(() => {
  app.listen(PORT, () => {
    console.log(
      "DB is connected and Server listening on port " + process.env.PORT
    );
  });
});

// yesu2001
// SwM2imKNNpKe1fPp
