import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";
import * as fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};

// Create Post
export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;
    if (!name || !prompt || !photo) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Save the base64 image to file
    const base64Data = photo.replace(/^data:image\/jpeg;base64,/, "");
    const filename = `./${Date.now()}.jpeg`;
    fs.writeFileSync(filename, base64Data, "base64");

    const photoUrl = await cloudinary.uploader.upload(filename, {
      folder: "posts",
    });

    // Delete the file
    fs.unlink(filename, (err) => {
      if (err) {
        console.error(err);
      }
    });

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.secure_url,
    });
    console.log(newPost);
    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error.message
      )
    );
  }
};
