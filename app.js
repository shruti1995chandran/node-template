const express = require("express");
const compression = require("compression");
const cors = require("cors");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(compression());
app.use(cors());

const port = process.env.SERVER_PORT;

app.use("/api/v1",require('./routes'));

//Generic Error
app.use((err, req, res) => {
    res.status(err.status_code).send({
        status: "failure",
        error: {
          status_code: err.status_code,
          error_key: err.error_key,
          error_message: err.error_message
        },
      });
  });

app.listen(port, function(){
    console.log("Server is running at port ", port)
})