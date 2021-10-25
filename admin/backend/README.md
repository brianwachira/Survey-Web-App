# Survey Web App Backend
#### By [Brian Wachira](https://www.github.com/brianwachira)

## Description
- This is the backend API for the Survey Web App

## Live Demo
[BACKEND PORTAL](https://secret-plateau-48735.herokuapp.com/)<br/>
[CLIENT SITE](https://survey-app25.herokuapp.com/)


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
        },
        {
            "passage": "Black or white?",
            "options":[
                {
                    "choice": "A",
                    "value": "Black"
                },
                {
                    "choice": "B",
                    "value": "White"
                }
            ]
        },
        {
            "passage": "BMW or Mercedes?",
            "options":[
                {
                    "choice": "A",
                    "value": "BMW"
                },
                {
                    "choice": "B",
                    "value": "Mercedes"
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
### create submission ( fill survey )
```
POST /submissions
```
#### Example
```
POST http://localhost:3002/api/submissions
content-type: application/json
Authorization:  bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaWFud2FjaGlyYSIsImlkIjoidjE3MTZmOGExOWY2ZmQwZTcxYzY3MzExIiwiaWF0IjoxNjM0ODMzNzA3fQ.3Utuus-GC56OQK0CoxcQK08PE7qG7sdXxf5QJ2i8wk1g

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
  },
  {
    "submission": {
      "_id": "61758ee63db914830fe5b5b1",
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
        "_id": "61758ee63db914830fe5b5b5"
      },
      {
        "question": "6171d9f6356db0b69915f566",
        "choice": "A",
        "_id": "61758ee63db914830fe5b5b6"
      },
      {
        "question": "6171d9f6356db0b69915f569",
        "choice": "B",
        "_id": "61758ee63db914830fe5b5b7"
      },
      {
        "question": "6171d9f6356db0b69915f56c",
        "choice": "A",
        "_id": "61758ee63db914830fe5b5b8"
      }
    ]
  },
  {
    "submission": {
      "_id": "617651087977d3b4e6c9f4d6",
      "firstname": "boruto",
      "lastname": "John",
      "email": "b@s.com",
      "phone": "0783975920",
      "survey": "6171d9f6356db0b69915f55f",
      "__v": 0
    },
    "response": [
      {
        "question": "6171d9f6356db0b69915f563",
        "choice": "B",
        "_id": "617651087977d3b4e6c9f4da"
      },
      {
        "question": "6171d9f6356db0b69915f566",
        "choice": "A",
        "_id": "617651087977d3b4e6c9f4db"
      },
      {
        "question": "6171d9f6356db0b69915f569",
        "choice": "B",
        "_id": "617651087977d3b4e6c9f4dc"
      },
      {
        "question": "6171d9f6356db0b69915f56c",
        "choice": "A",
        "_id": "617651087977d3b4e6c9f4dd"
      }
    ]
  },
  {
    "submission": {
      "_id": "617677e32961596b393fff03",
      "firstname": "random",
      "lastname": "guyy",
      "email": "randomguyy@gmail.com",
      "phone": "0707234562",
      "survey": "6171d9f6356db0b69915f55f",
      "__v": 0
    },
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
    ]
  }
]
```