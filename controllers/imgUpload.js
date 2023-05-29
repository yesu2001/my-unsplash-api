import ImagesDB from "../models/imgUploadModal.js";
import mongoose from "mongoose";

export const fetchImages = async (req, res) => {
  try {
    const data = await ImagesDB.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postImage = async (req, res) => {
  const data = {
    label: req.body.label,
    imageUrl: req.body.imageUrl,
  };
  const saveImage = new ImagesDB(data);
  try {
    await saveImage.save();
    res.status(201).json({ message: "Image saved successfully" });
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

export const deleteImage = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `No post with id: ${id}` });
  }
  await ImagesDB.findOneAndRemove(id);
  res.status(200).json({ message: "Successfully deleted the image" });
};
