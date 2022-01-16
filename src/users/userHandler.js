//All User Logic to be written here
const logger = require("../utils/logger");
const { dummyAPITest } = require("../utils/apiConstants");
const { makeAxiosCall } = require("../utils/axios");

/**
 * This is a sample custom function
 */
module.exports.userFunction1 = userFunction1;
async function userFunction1() {
  logger.info("Inside UserFunction1 in [userhandler.js] ::::");
  let dummyAPI = dummyAPITest;
  try {
    let response = await makeAxiosCall("GET", dummyAPI);
    return response;
  } catch (err) {
    logger.error("Test API Error ::::" + JSON.stringify(err));
    return err;
  }
}

module.exports.userTestFuction1 = userTestFuction1;
function userTestFuction1(name) {
  return ["test1", "Sam", "Eli"].includes(name);
}
