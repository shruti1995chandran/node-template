const axios = require("axios");
const https = require("https");
const logger = require("../../utility/logger");

exports.requestResponse = requestResponse;
function requestResponse(apiMethod, apiURL, reqHeaders = {}, reqBody) {
  logger.info("Origin URL:::: " + apiURL);
  return new Promise((resolve, reject) => {
    const options = {
      url: apiURL,
      method: apiMethod,
      headers: reqHeaders,
      json: true,
      data: reqBody,
      //strictSSL: false,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    };
    axios(options)
      .then((response) => {
        response.status = response.status;
        response.body = response.data;

        if (response.status >= 200 && response.status < 300) {
          const resp = {
            status: response.status,
            url: apiURL,
            method: apiMethod,
            body: response.body,
          };
          return resolve(resp);
        }
        return reject(response);
      })
      .catch((error) => {
        logger.error("Error while calling :::: " + apiURL);
        let resultantError = {};
        if (error.response) {
          resultantError = { ...error.response };
        } else {
          resultantError = { ...error };
        }
        resultantError.body = resultantError.data;
        reject(resultantError);
        return;
      });
  });
}
