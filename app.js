const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config({ path: "./.env" });

//Middlewares: execute app.use() to add middleware logic for routes or a specific route
// app.use("/posts", (req, res) => {
//   console.log("\nHello from middleware");
//   res.send('Hello from middleware of "localhost:3000/posts" route ')
// });

//Connect to db
connectDB();

//Routes
app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.get("/posts", (req, res) => {
  res.send("Hello from posts");
});

//Server Listening
PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listening for " + PORT);
});
