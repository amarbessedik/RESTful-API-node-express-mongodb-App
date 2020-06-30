const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db");
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config({ path: "./.env" });

//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares: execute app.use() to add middleware logic for routes 
app.use(cors())
app.use(bodyParser.json());
app.use('/posts', postsRoute);

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
