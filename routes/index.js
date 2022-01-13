const express = require("express");
const router = express.Router({
    caseSensitive: true,
  });


router.use("/user", require("./api/user"));


module.exports = router;