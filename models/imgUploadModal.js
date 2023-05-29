import mongoose from "mongoose";
import express from "express";

const imagesSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

var ImagesDB = mongoose.model("ImagesDB", imagesSchema);

export default ImagesDB;
