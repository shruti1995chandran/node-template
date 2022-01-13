# node-template-project

A barebones Node.js app using [Express 4](http://expressjs.com/).

## Project Structure

Top Level Directory Layout:
.
├── app.js                      # App entrypoint
├── .env                        # Environment file
├── Dockerfile                  # App  Dockerfile
├── routes                      # Express route controllers for all the endpoints of the app
├── routes -> api                # Component specific routing placed here
├── utility                     # Logger and configuration related files
├── endpoints -> handler         # All the business logic is here
├── endpoints -> utils           # All endpoint/API utilities placed here
├── tests                       # Manual/Automated Tests

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/shruti1995chandran/node-template-project.git
cd node-template-project
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).
Code running on version 1. All APIs must have /api/v1 prepended to it.

## Postman Testing

Sample postman API : http://localhost:3000/api/v1/user
