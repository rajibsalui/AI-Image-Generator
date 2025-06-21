import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

export const GetPosts = async () => await API.get("/api/post/");  //get request to get all posts
export const CreatePost = async (data) => await API.post("/api/post/", data); //post request to create a new post
export const GenerateAIImage = async (data) =>
  await API.post("/api/generateImage/", data); //post request to generate an image using AI