//All User Logic to be written here
const logger = require("../../utility/logger");
const apiConstants = require("../utils/api_constants");
const requestManager = require("../utils/request_manager");

/**
 * This is a sample custom function
 */
module.exports.userFunction1 = userFunction1;
function userFunction1() {
  return new Promise(async (resolve, reject) => {
    logger.info("Inside UserFunction1 in [userhandler.js] ::::");
    let dummyAPI = apiConstants.dummyAPITest;
    try {
      let response = await requestManager.requestResponse(
        "GET",
        dummyAPI,
        null,
        null
      );
      return resolve(response);
    } catch (err) {
      logger.error("Test API Error ::::" + JSON.stringify(err));
      return reject(err);
    }
  });
}

module.exports.userTestFuction1 = userTestFuction1;
function userTestFuction1(name) {
  return ["test1", "Sam", "Eli"].includes(name);
}
