const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const message =
    "My name is Biruk.I aspire to be a problem solver and a creative thinker. " +
    "I want to build an AI company where many developers can work, " +
    "and through this company, I aim to address the needs of all Ethiopian rural students.";

  res.status(200).send(message);
});

module.exports = router;
