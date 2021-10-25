# Survey Web App
#### By [Brian Wachira](https://www.github.com/brianwachira)

## Description
- This is a test to build the backend API, web portal and client site for a survey web app

## Prerequites
- NodeJS required
- NPM 
- ReactJS

## Backend API
## Example Endpoints
### login
```
POST /login
```
#### Example
```
POST http://localhost:3002/api/login 
Content-Type: application/json

{
    "username": "admin@admin.com", "password": "admin123"

}
```
### response
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCIfIkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud2FjaGlyYSIsImlkIjoiNjE3MTZmOGExOWY2ZmQwfTcxYzY3MzExIiwiaWF0IjoxNjM1MTUzNDUxfQ.5jbe5DTlPihkULocV7wVGZiTP4zMYwTDWNhTBz7A8Qc",
  "username": "admin@admin.com",
  "id": "61716f8a19f6fd0e71c67311"
}
```

### create survey
```
POST /survey
```
## Technologies used (frontend)
 - <b>ReactJS (Create React App) </b> : Allows one to Create React apps with no build configuration. [https://create-react-app.dev/](https://create-react-app.dev/)
 - <b>axios</b> : Promise based HTTP client for the browser and node.js [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)
 - <b>react-leaflet</b> : React components for Leaflet maps [https://react-leaflet.js.org// ](https://react-leaflet.js.org/)
 - <b>react-redux</b> :  library for managing application state. [https://react-redux.js.org/](https://react-redux.js.org/)
 - <b>redux-thunk</b> : Thunk middleware for Redux. Used for running redux asynchronously [https://github.com/reduxjs/redux-thunk](https://github.com/reduxjs/redux-thunk)
 - <b>react-router-dom</b> : A routing library for reactjs [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)
 - <b>formik</b> : Build Forms without the tears [https://formik.org/](https://formik.org/)
 - <b>yup</b> : It is a Javascript builder for value parsing and validation [https://github.com/jquense/yup](https://github.com/jquense/yup)


## Technologies used
 - <b>Express</b> : NodeJS-based framework for buidling API'S [https://expressjs.com/ ](https://expressjs.com/)
 - <b>MongoDB</b> : It is a document object database [https://www.mongodb.com/ ](https://www.mongodb.com/)
 - <b>Mongoose</b> : Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js that makes it easy to do mongoDB operations [https://mongoosejs.com/](https://mongoosejs.com/) 
 - <b>Jsonwebtoken</b>: A library that allows one to create Json Web Tokens. [https://www.npmjs.com/package/jsonwebtoken ](https://www.npmjs.com/package/jsonwebtoken )
 - <b>Dotenv</b>: A package that loads environment variables from a .env file into process.env. [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
 - <b>Cors</b> : package for providing a Connect/Express middleware that can be used to enable CORS with various options.[ https://www.npmjs.com/package/cors]( https://www.npmjs.com/package/cors)

## Support and contact details
Contact me on brianwachira7@gmail.com for any comments, reviews or advice.
