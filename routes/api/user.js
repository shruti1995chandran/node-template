const express = require("express");
const router = express.Router();
const userhandler = require("../../endpoints/handler/userhandler");

// Get Something
router.get("/", async (req, res, next) => {
  try {
    let functionResponse = await userhandler.userFunction1();
    res.status(200).send({
      status: "success",
      data: functionResponse,
    });
  } catch (err) {
    next(err);
    return;
  }
});

// Post Something
router.post("/posting", (req, res, next) => {
  res.status(200).send({
    status: "success",
    data: "Post successful!!",
  });
});

module.exports = router;
