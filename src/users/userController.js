const express = require("express");
const router = express.Router();
const { userFunction1 } = require("./userHandler");

// Get Something
router.get("/", async (req, res, next) => {
  try {
    let response = await userFunction1();
    res.status(200).send({
      status: "success",
      data: response,
    });
  } catch (err) {
    next(err);
    return;
  }
});

// Post Something
router.post("/posting", (req, res, next) => {
  try {
    res.status(200).send({
      status: "success",
      data: "Post successful!!",
    });
  } catch (err) {
    next(err);
    return;
  }
});

module.exports = router;
