import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "./routes/Posts.js";
import  GenerateImageRouter  from "./routes/GenerateImage.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Somethimg went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

//default get
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

//connect to the database

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.log("Error connecting to the database: ", error));
};

//function to start the server
const startServer = async () => {
  try {
    connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error starting server: ", error);
  }
};

startServer();
