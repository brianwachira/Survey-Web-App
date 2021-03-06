# Survey Web App Backend
#### By [Brian Wachira](https://www.github.com/brianwachira)

## Table Of Contents
- [Description](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#description)
- [Demo Links](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#live-demo)
- [Setting up](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#setting-up)
  - [Prerequisites](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#prerequisites)
  - [Setup](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#setup)
  - [Install](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#install)
  - [Usage](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#usage)
- [Example Endpoints](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#example-endpoints)
  - [Create admin account](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#create-account)
  - [Account authentication (login)](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#login)
  - [Create survey](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#create-survey)
  - [Get surveys (public)](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-surveys-public)
  - [Get surveys (protected)](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-surveys-protected)
  - [Get survey by id](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-survey-by-id)
  - [Delete survey](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#delete-survey)
  - [Get survey by adminID](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-survey-by-adminid)
  - [Get all q/a](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-all-qa)
  - [Get all q/a by id](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-qa-by-id)
  - [Get all q/a by survey id](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-qa-by-survey-id)
  - [Create submission (fill survey)](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#create-submission--fill-survey-)
  - [Get survey submissions by survey id](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-submissions-by-survey-id)
  - [Get survey submissions by phone number](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-submissions-by-phone-number)
  - [Get survey responses](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-responses)
  - [Get survey responses by id](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-responses-by-id)
  - [Get survey responses by submission id](https://github.com/brianwachira/Survey-Web-App/tree/main/admin/backend#get-responses-by-submission-id)
  
## Description
- This is the backend API for the Survey Web App

## Live Demo
[BACKEND PORTAL](https://secret-plateau-48735.herokuapp.com/)<br/>
```
username: admin 
password:admin
```
[CLIENT SITE](https://survey-app25.herokuapp.com/) 

## Setting up

To get a local copy up and running follow these simple example steps.

### Prerequisites
- NodeJS required
### Setup
- Clone the Repository
- Go to https://www.mongodb.com/cloud/atlas
- Create  new cluster
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster1.png" alt="cluster 1"></a>
<br/>

- Choose AWS provider and any free-tier data center
<br/>
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster2.png" alt="cluster 1"></a>
<br/>  

- use the database access tab for creating user credentials for the database. 
Please note that these are not the same credentials you use for logging into MongoDB Atlas. 
These will be used for your application to connect to the database.
<br/>
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster3.png" alt="cluster 1"></a>
<br/>

- grant the user with permissions to read and write to the databases.
<br/>
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster5.png" alt="cluster 1"></a>    
<br/>

- Define the IP addresses that are allowed access to the database.
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster6.png" alt="cluster 1"></a> 
<br/>

- For the sake of simplicity we will allow access from all IP addresses: 
<br/>
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster7.png" alt="cluster 1"></a> 
<br/>

- Finally we are ready to connect to our database. Start by clicking connect:
<br/>
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster8.png" alt="cluster 1"></a> 
<br/>

- Choose ```  Connect your application:``` 
<br/>
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster9.png" alt="cluster 1"></a> 
<br/>The view displays the MongoDB URI, which is the address of the database that we will supply to the MongoDB client library we will add to our application.
<br/><a href="https://www.mongodb.com/cloud/atlas" target="_blank"><img src="https://github.com/brianwachira/rides-backend/blob/main/assets/cluster10.png" alt="cluster 1"></a> 
<br/>The address looks like this:
```mongodb+srv://<USERNAME>:<PASSWORD>@cluster0-ostce.mongodb.net/<DB-NAME><DB_NAME>?retryWrites=true```

- Copy the Address
- Create a .env file in the root of your the backend folder.
- Use the following syntax to save mongoDB URI as shown in env.example
    ``` 
    MONGODB_URI=MONGODB_URL
    PORT=3001
    SECRET=SECRET_NUMBER
    JWT_SECRET=SECRET_STRING

    ```
- Replace ``` MONGODB_URL ``` with the address you got from mongoDB cloud atlas
- Replace ``` SECRET_NUMBER ``` with an integer eg *10* . This will be used when generating a JWT token

### Install
- Navigate to the backend folder ```cd  backend```
- Run ``` npm install``` . This will install all the dependencies needed for the project dependencies needed for the project

### Usage
- Navigate to the backend folder ```cd  backend```
- Run ``` npm run dev``` . This will initialize the backend
- 
## Example Endpoints

### create account
```
POST /admin
```
#### Example
```
POST http://localhost:3002/api/admin
content-type: application/json

{
    "username": "admin",
    "password": "admin"
} 
```
#### response
```
{
  "username": "admin2",
  "password": "$2b$10$3u3.XfP.4cV5aYvaetZsGeElNtQ5TgIgJYwwbchuZhYgoH4yRvuIa",
  "_id": "6176fb842961596b393fff26",
  "createdAt": "2021-10-25T18:46:32.254Z",
  "updatedAt": "2021-10-25T18:46:32.254Z",
  "__v": 0
}
```

### login
```
POST /auth
```
#### Example
```
POST http://localhost:3002/api/auth 
Content-Type: application/json

{
    "username": "admin@admin.com", "password": "admin123"

}
```
#### response
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
#### Example
```
POST http://localhost:3002/api/survey
content-type: application/json
Authorization:  bearer eyJhbIUzI1NifIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud2FjaGlyYSIsImlkIjoiNjE3MTZmOGExOWY2ZmQwZTcxYzY3MzExIiwiaWF0IjoxNjM0ODMzNzA3fQ.3Utuus-GC56OQK0fCoxcQK08PE7qG78Xxf5QJ2i8wk1g

{
    "admin":"61716f8a19f6fd0e71c67311",
    "title": "Another  Survey",
    "questions": [
        {
            "passage": "What do you dislike?",
            "options":[
                {
                    "choice": "A",
                    "value": "Waking up early"
                },
                {
                    "choice": "B",
                    "value": "Sleeping late"
                }
            ]
        },
        {
            "passage": "Squares or circles?",
            "options":[
                {
                    "choice": "A",
                    "value": "square"
                },
                {
                    "choice": "B",
                    "value": "circles"
                }
            ]
        }
    ]

}
```
#### response
```
{
  "title": "urvey for readme demo",
  "questions": [
    {
      "passage": "What do you dislike?",
      "options": [
        {
          "choice": "A",
          "value": "Waking up early",
          "_id": "617677182961596b393ffef7"
        },
        {
          "choice": "B",
          "value": "Sleeping late",
          "_id": "617677182961596b393ffef8"
        }
      ],
      "survey": "617677172961596b393ffef2",
      "_id": "617677182961596b393ffef6",
      "__v": 0
    },
    {
      "passage": "Squares or circles?",
      "options": [
        {
          "choice": "A",
          "value": "square",
          "_id": "617677182961596b393ffefa"
        },
        {
          "choice": "B",
          "value": "circles",
          "_id": "617677182961596b393ffefb"
        }
      ],
      "survey": "617677172961596b393ffef2",
      "_id": "617677182961596b393ffef9",
      "__v": 0
    },
    {
      "passage": "Black or white?",
      "options": [
        {
          "choice": "A",
          "value": "Black",
          "_id": "617677182961596b393ffefd"
        },
        {
          "choice": "B",
          "value": "White",
          "_id": "617677182961596b393ffefe"
        }
      ],
      "survey": "617677172961596b393ffef2",
      "_id": "617677182961596b393ffefc",
      "__v": 0
    },
    {
      "passage": "BMW or Mercedes?",
      "options": [
        {
          "choice": "A",
          "value": "BMW",
          "_id": "617677182961596b393fff00"
        },
        {
          "choice": "B",
          "value": "Mercedes",
          "_id": "617677182961596b393fff01"
        }
      ],
      "survey": "617677172961596b393ffef2",
      "_id": "617677182961596b393ffeff",
      "__v": 0
    }
  ]
}
```

### Get surveys (public)
```
GET /survey/all
```
#### Example
```
GET http://localhost:3002/api/survey/all
```
#### Response
```
[
    {
    "survey": {
      "_id": "6171d9f6356db0b69915f55f",
      "title": "1st Survey To Test",
      "admin": "61716f8a19f6fd0e71c67311",
      "__v": 0
    },
    "questions": [
      {
        "_id": "6171d9f6356db0b69915f563",
        "passage": "What do you like?",
        "options": [
          {
            "choice": "A",
            "value": "Meat",
            "_id": "6171d9f6356db0b69915f564"
          },
          {
            "choice": "B",
            "value": "Vegetables",
            "_id": "6171d9f6356db0b69915f565"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      },
      {
        "_id": "6171d9f6356db0b69915f566",
        "passage": "What do you like even more?",
        "options": [
          {
            "choice": "A",
            "value": "Fish",
            "_id": "6171d9f6356db0b69915f567"
          },
          {
            "choice": "B",
            "value": "Chicken",
            "_id": "6171d9f6356db0b69915f568"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      }
    ]
  },
]
```


### Get surveys (protected)
```
GET /survey/protected/all
```
#### Example
```
GET http://localhost:3002/api/survey/protected/all
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
[
     {
    "survey": {
      "_id": "6171d9f6356db0b69915f55f",
      "title": "1st Survey To Test",
      "admin": {
        "_id": "61716f8a19f6fd0e71c67311",
        "username": "brianwachira"
      },
      "__v": 0
    },
    "questions": [
      {
        "_id": "6171d9f6356db0b69915f563",
        "passage": "What do you like?",
        "options": [
          {
            "choice": "A",
            "value": "Meat",
            "_id": "6171d9f6356db0b69915f564"
          },
          {
            "choice": "B",
            "value": "Vegetables",
            "_id": "6171d9f6356db0b69915f565"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      },
      {
        "_id": "6171d9f6356db0b69915f566",
        "passage": "What do you like even more?",
        "options": [
          {
            "choice": "A",
            "value": "Fish",
            "_id": "6171d9f6356db0b69915f567"
          },
          {
            "choice": "B",
            "value": "Chicken",
            "_id": "6171d9f6356db0b69915f568"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      }
    ]
  },
]
```



### Get survey by id
```
GET /survey/:id
```
#### Example
```
GET http://localhost:3002/api/survey/6171d9f6356db0b69915f55f
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
{
    "survey": {
      "_id": "6171d9f6356db0b69915f55f",
      "title": "1st Survey To Test",
      "admin": {
        "_id": "61716f8a19f6fd0e71c67311",
        "username": "brianwachira"
      },
      "__v": 0
    },
    "questions": [
      {
        "_id": "6171d9f6356db0b69915f563",
        "passage": "What do you like?",
        "options": [
          {
            "choice": "A",
            "value": "Meat",
            "_id": "6171d9f6356db0b69915f564"
          },
          {
            "choice": "B",
            "value": "Vegetables",
            "_id": "6171d9f6356db0b69915f565"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      },
      {
        "_id": "6171d9f6356db0b69915f566",
        "passage": "What do you like even more?",
        "options": [
          {
            "choice": "A",
            "value": "Fish",
            "_id": "6171d9f6356db0b69915f567"
          },
          {
            "choice": "B",
            "value": "Chicken",
            "_id": "6171d9f6356db0b69915f568"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      }
    ]
  },
```
### Get survey by adminID
```
GET /survey/admin/:id
```
#### Example
```
GET http://localhost:3002/api/survey/admin/61716f8a19f6fd0e71c67311
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
{
    "survey": {
      "_id": "6171d9f6356db0b69915f55f",
      "title": "1st Survey To Test",
      "admin": {
        "_id": "61716f8a19f6fd0e71c67311",
        "username": "brianwachira"
      },
      "__v": 0
    },
    "questions": [
      {
        "_id": "6171d9f6356db0b69915f563",
        "passage": "What do you like?",
        "options": [
          {
            "choice": "A",
            "value": "Meat",
            "_id": "6171d9f6356db0b69915f564"
          },
          {
            "choice": "B",
            "value": "Vegetables",
            "_id": "6171d9f6356db0b69915f565"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      },
      {
        "_id": "6171d9f6356db0b69915f566",
        "passage": "What do you like even more?",
        "options": [
          {
            "choice": "A",
            "value": "Fish",
            "_id": "6171d9f6356db0b69915f567"
          },
          {
            "choice": "B",
            "value": "Chicken",
            "_id": "6171d9f6356db0b69915f568"
          }
        ],
        "survey": "6171d9f6356db0b69915f55f",
        "__v": 0
      }
    ]
  },
```
### Delete survey
```
DELETE /survey/:id
```
#### Example
```
DELETE http://localhost:3002/api/survey/6171d9f6356db0b69915f55f
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: *
Date: Mon, 25 Oct 2021 20:22:04 GMT
Connection: close
```

### Get all q/a
```
GET qandas/all
```
#### Example
```
GET http://localhost:3002/api/qandas/all
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud26OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
[
      {
    "_id": "6171d9f6356db0b69915f563",
    "passage": "What do you like?",
    "options": [
      {
        "choice": "A",
        "value": "Meat",
        "_id": "6171d9f6356db0b69915f564"
      },
      {
        "choice": "B",
        "value": "Vegetables",
        "_id": "6171d9f6356db0b69915f565"
      }
    ],
    "survey": {
      "_id": "6171d9f6356db0b69915f55f",
      "title": "1st Survey To Test"
    },
    "__v": 0
  },
  {
    "_id": "6171d9f6356db0b69915f566",
    "passage": "What do you like even more?",
    "options": [
      {
        "choice": "A",
        "value": "Fish",
        "_id": "6171d9f6356db0b69915f567"
      },
      {
        "choice": "B",
        "value": "Chicken",
        "_id": "6171d9f6356db0b69915f568"
      }
    ],
    "survey": {
      "_id": "6171d9f6356db0b69915f55f",
      "title": "1st Survey To Test"
    },
    "__v": 0
]
```
### Get q/a by id
```
GET /qandas/:id
```
#### Example
```
GET http://localhost:3002/api/qandas/6171d9f6356db0b69915f563
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud2FjaGlyYGC56OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
{
  "_id": "6171d9f6356db0b69915f563",
  "passage": "What do you like?",
  "options": [
    {
      "choice": "A",
      "value": "Meat",
      "_id": "6171d9f6356db0b69915f564"
    },
    {
      "choice": "B",
      "value": "Vegetables",
      "_id": "6171d9f6356db0b69915f565"
    }
  ],
  "survey": {
    "_id": "6171d9f6356db0b69915f55f",
    "title": "1st Survey To Test"
  },
  "__v": 0
}
```
### Get q/a by survey id
```
GET /qandas/:id
```
#### Example
```
GET http://localhost:3002/api/qandas/6171d9f6356db0b69915f563
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud2FjaG6OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
{
  "_id": "6171d9f6356db0b69915f563",
  "passage": "What do you like?",
  "options": [
    {
      "choice": "A",
      "value": "Meat",
      "_id": "6171d9f6356db0b69915f564"
    },
    {
      "choice": "B",
      "value": "Vegetables",
      "_id": "6171d9f6356db0b69915f565"
    }
  ],
  "survey": {
    "_id": "6171d9f6356db0b69915f55f",
    "title": "1st Survey To Test"
  },
  "__v": 0
}
```
### create submission ( fill survey )
```
POST /submissions
```
#### Example
```
POST http://localhost:3002/api/submissions
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud2FjaGlyYSIsImlkIoxcQK08PE7qG7sdXxf5QJ2i8wk1g

{
"firstName" : "random",
"lastName" : "guyy",
"email" : "randomguyy@gmail.com",
"phone" : "0707234562",
"surveyId": "6171d9f6356db0b69915f55f",
"response": [
        {
            "question": "6171d9f6356db0b69915f563",
            "choice": "A"
        },
        {
            "question": "6171d9f6356db0b69915f566",
            "choice": "B"
        },
        {
            "question": "6171d9f6356db0b69915f569",
            "choice": "A"
        },
        {
            "question": "6171d9f6356db0b69915f56c",
            "choice": "A"
        }
    ]
}
```
#### response
```
{
  "savedSubmission": {
    "firstname": "random",
    "lastname": "guyy",
    "email": "randomguyy@gmail.com",
    "phone": "0707234562",
    "survey": "6171d9f6356db0b69915f55f",
    "_id": "617677e32961596b393fff03",
    "__v": 0
  },
  "savedResponse": {
    "submission": "617677e32961596b393fff03",
    "response": [
      {
        "question": "6171d9f6356db0b69915f563",
        "choice": "A",
        "_id": "617677e32961596b393fff07"
      },
      {
        "question": "6171d9f6356db0b69915f566",
        "choice": "B",
        "_id": "617677e32961596b393fff08"
      },
      {
        "question": "6171d9f6356db0b69915f569",
        "choice": "A",
        "_id": "617677e32961596b393fff09"
      },
      {
        "question": "6171d9f6356db0b69915f56c",
        "choice": "A",
        "_id": "617677e32961596b393fff0a"
      }
    ],
    "_id": "617677e32961596b393fff06",
    "__v": 0
  }
}
```
### Get submissions by survey id
```
GET submissions/survey/id
```
#### Example
```
GET http://localhost:3002/api/submissions/survey/6171d9f6356db0b69915f55f
content-type: application/json
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud2FjaGlyYSIsImlkIjoiNjE3MTZmOGExOWY2ZmQwZTcxYzY3MzExIiwiaWF0IjoxNjM0ODMzNzA3fQ.3Utuus-GC56OQK0CoxcQK08Pxf5QJ2i8wk1g
```
#### Response
```
[
  {
    "submission": {
      "_id": "61729f8137eee5aa283da876",
      "firstname": "Brian",
      "lastname": "Wachira",
      "email": "brianwachira7@gmail.com",
      "phone": "0707234567",
      "survey": "6171d9f6356db0b69915f55f",
      "__v": 0
    },
    "response": [
      {
        "question": "6171d9f6356db0b69915f563",
        "choice": "A",
        "_id": "61729f8237eee5aa283da87a"
      },
      {
        "question": "6171d9f6356db0b69915f566",
        "choice": "B",
        "_id": "61729f8237eee5aa283da87b"
      },
      {
        "question": "6171d9f6356db0b69915f569",
        "choice": "A",
        "_id": "61729f8237eee5aa283da87c"
      },
      {
        "question": "6171d9f6356db0b69915f56c",
        "choice": "A",
        "_id": "61729f8237eee5aa283da87d"
      }
    ]
  },
  {
    "submission": {
      "_id": "61758e683db914830fe5b5a8",
      "firstname": "Ryan",
      "lastname": "John",
      "email": "erenyaegar@aot.rumblin",
      "phone": "0738942048",
      "survey": "6171d9f6356db0b69915f55f",
      "__v": 0
    },
    "response": [
      {
        "question": "6171d9f6356db0b69915f563",
        "choice": "B",
        "_id": "61758e693db914830fe5b5ac"
      },
      {
        "question": "6171d9f6356db0b69915f566",
        "choice": "A",
        "_id": "61758e693db914830fe5b5ad"
      },
      {
        "question": "6171d9f6356db0b69915f569",
        "choice": "B",
        "_id": "61758e693db914830fe5b5ae"
      },
      {
        "question": "6171d9f6356db0b69915f56c",
        "choice": "A",
        "_id": "61758e693db914830fe5b5af"
      }
    ]
  }
]
```

### Get submissions by phone number
```
GET /submissions/phone/:phone
```
#### Example
```
GET http://localhost:3002/api/submissions/phone/0707234567
content-type: application/json
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VFjaGlyYOWY2ZmQwZTcxYzY3MzExIiwiaWF0IjoxNjM0ODMzNzA3fQ.3Utuus-GC56OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
[
  {
    "submission": {
      "_id": "61729f8137eee5aa283da876",
      "firstname": "Brian",
      "lastname": "Wachira",
      "email": "brianwachira7@gmail.com",
      "phone": "0707234567",
      "survey": {
        "_id": "6171d9f6356db0b69915f55f",
        "title": "1st Survey To Test"
      },
      "__v": 0
    },
    "response": [
      {
        "_id": "61729f8237eee5aa283da879",
        "submission": "61729f8137eee5aa283da876",
        "response": [
          {
            "question": {
              "_id": "6171d9f6356db0b69915f563",
              "passage": "What do you like?",
              "options": [
                {
                  "choice": "A",
                  "value": "Meat",
                  "_id": "6171d9f6356db0b69915f564"
                },
                {
                  "choice": "B",
                  "value": "Vegetables",
                  "_id": "6171d9f6356db0b69915f565"
                }
              ]
            },
            "choice": "A",
            "_id": "61729f8237eee5aa283da87a"
          },
        ],
        "__v": 0
      }
    ]
  }
]
```

### get responses
```
GET /responses
```
#### Example
```
GET http://localhost:3002/api/responses/all
content-type: application/json
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmmJyaWFud2FjaGlyYSIsImlkIjoiNjE3MTZmOGExOWY2ZmQwZTcxYzY3MzExIiwiaWF0IjoxNjM0ODMzNzA3fQ.3Utuus-GC56OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### response
```
[
 {
    "_id": "61729f8237eee5aa283da879",
    "submission": {
      "_id": "61729f8137eee5aa283da876",
      "firstname": "Brian",
      "lastname": "Wachira",
      "email": "brianwachira7@gmail.com",
      "phone": "0707234567"
    },
    "response": [
      {
        "question": {
          "_id": "6171d9f6356db0b69915f563",
          "passage": "What do you like?",
          "options": [
            {
              "choice": "A",
              "value": "Meat",
              "_id": "6171d9f6356db0b69915f564"
            },
            {
              "choice": "B",
              "value": "Vegetables",
              "_id": "6171d9f6356db0b69915f565"
            }
          ]
        },
        "choice": "A",
        "_id": "61729f8237eee5aa283da87a"
      },
      {
        "question": {
          "_id": "6171d9f6356db0b69915f566",
          "passage": "What do you like even more?",
          "options": [
            {
              "choice": "A",
              "value": "Fish",
              "_id": "6171d9f6356db0b69915f567"
            },
            {
              "choice": "B",
              "value": "Chicken",
              "_id": "6171d9f6356db0b69915f568"
            }
          ]
        },
        "choice": "B",
        "_id": "61729f8237eee5aa283da87b"
      },
    ],
    "__v": 0
  },
]
```

### get responses by id
```
GET /responses/:id
```
#### Example
```
GET http://localhost:3002/api/responses/61729f8237eee5aa283da879
content-type: application/json
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmjE3MTZmOGExOWY2ZmQwZTcxYzY3MzExIiwiaWF0IjoxNjM0ODMzNzA3fQ.3Utuus-GC56OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
{
  "_id": "61729f8237eee5aa283da879",
  "submission": {
    "_id": "61729f8137eee5aa283da876",
    "firstname": "Brian",
    "lastname": "Wachira",
    "email": "brianwachira7@gmail.com",
    "phone": "0707234567"
  },
  "response": [
    {
      "question": {
        "_id": "6171d9f6356db0b69915f56c",
        "passage": "Soft drink?",
        "options": [
          {
            "choice": "A",
            "value": "Martinis",
            "_id": "6171d9f6356db0b69915f56d"
          },
          {
            "choice": "B",
            "value": "Water",
            "_id": "6171d9f6356db0b69915f56e"
          }
        ]
      },
      "choice": "A",
      "_id": "61729f8237eee5aa283da87d"
    }
  ],
  "__v": 0
}
```

### get responses by submission id
```
GET /responses/submission/:id
```
#### Example
```
GET http://localhost:3002/api/responses/submission/61729f8137eee5aa283da876
content-type: application/json
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyjoiNjE3MTZmOGExOWY2ZmQwZTcxYzY3MzExIiwiaWF0IjoxNjM0ODMzNzA3fQ.3Utuus-GC56OQK0CoxcQK08PE7qG78Xxf5QJ2i8wk1g
```
#### Response
```
[
  {
    "_id": "61729f8237eee5aa283da879",
    "submission": "61729f8137eee5aa283da876",
    "response": [
      {
        "question": {
          "_id": "6171d9f6356db0b69915f563",
          "passage": "What do you like?",
          "options": [
            {
              "choice": "A",
              "value": "Meat",
              "_id": "6171d9f6356db0b69915f564"
            },
            {
              "choice": "B",
              "value": "Vegetables",
              "_id": "6171d9f6356db0b69915f565"
            }
          ]
        },
        "choice": "A",
        "_id": "61729f8237eee5aa283da87a"
      }
    ],
    "__v": 0
  }
]
```

