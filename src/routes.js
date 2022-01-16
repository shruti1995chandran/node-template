const express = require("express");
const router = express.Router({
  caseSensitive: true,
});

router.use("/user", require("./users/userController"));

module.exports = router;
