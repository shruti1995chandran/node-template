# node-template-project

A barebones Node.js app using [Express 4](http://expressjs.com/).

## Project Structure

Top Level Directory Layout:

```sh
src
├── app.js                      # App entrypoint
├── routes.js                   # Express route controllers for all the endpoints of the app
├── utils                       # Logger and configuration related files
├── logic-folders               # Codebase logic seperated by fucntionality

Apart from the above mentioned folder, business logic is split according to the functionality it performs. For eg. users folder has the handler, controller and test files for easy access.
```

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
