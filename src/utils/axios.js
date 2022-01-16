const axios = require("axios");
const https = require("https");
const logger = require("./logger");

exports.makeAxiosCall = makeAxiosCall;
async function makeAxiosCall(apiMethod, apiURL, reqBody, reqHeaders = {}) {
  const options = {
    url: apiURL,
    method: apiMethod,
    headers: reqHeaders,
    json: true,
    data: reqBody,
  };
  let response = await axios(options);
  if (response.status >= 200 && response.status < 300) {
    //const resp = response;
    const resp = {
      status: response.status,
      url: apiURL,
      method: apiMethod,
      body: response.body || response.data,
    };
    return resp;
  }
  return response;
}
