const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//Routes

//gets all posts
router.get("/", async (req, res) => {
  try {
      const posts = await Post.find();
      res.json(posts);
  } catch (err) {
      res.status(400).json({message: err.message});
  }
});

//submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
    //Try to save the post
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        console.error('Something went wrong: ', err.message);
        res.status(400).send({ErrorMessage: err.message});
    }
});

//Gets a specific post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.json({ErrorMsg: err.message});
    }
});

//deletes a specific post
router.delete('/:id', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.id });
        res.json(removedPost);
    } catch (err) {
        res.status(400).send({msg: err.message});
    }
});

//updates a post
router.patch('/:id', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.id}, 
            {$set: {title: req.body.title}});
            res.json(updatedPost);
    } catch (err) {
        res.status.send({err: err.message});
    }
})

module.exports = router;
