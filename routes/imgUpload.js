import express from "express";
import {
  fetchImages,
  postImage,
  deleteImage,
} from "../controllers/imgUpload.js";

const router = express.Router();

router.get("/", fetchImages);

router.post("/", postImage);

router.delete("/:id", deleteImage);

export default router;
