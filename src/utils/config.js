const dotenv = require("dotenv");
dotenv.config();

module.exports = Object.freeze({
  SERVER_PORT: process.env.SERVER_PORT || "3000",
});
