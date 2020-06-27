const express = require('express');
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  res.send("Hello from posts");
});

router.get("/specific", (req, res) => {
  res.send("Hello from specific");
});


module.exports = router;