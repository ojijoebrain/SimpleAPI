# 📝  SimpleAPI

A minimal RESTful API built with Node.js and Express for basic CRUD operations on an in-memory store

---

## 🚀 Features

- CRUD operations for items (GET, POST, PUT, DELETE)

- Express.js middleware for JSON parsing

- Error handling for invalid routes and server issues

- In-memory data store (no database required)

---

## 📂 API Endpoints

 Base URL: http:// localhost:5000/api/items
    Method | Endpoint         | Description               | Request Body (JSON)          | Response Example                      |
| ------ | ---------------- | ------------------------- | ---------------------------- | ------------------------------------- |
| GET    | `/api/items`     | Get all items             | -                            | `[{ "id": 1, "name": "Item One" }]`   |
| GET    | `/api/items/:id` | Get a specific item by ID | -                            | `{ "id": 1, "name": "Item One" }`     |
| POST   | `/api/items`     | Create a new item         | `{ "name": "New Item" }`     | `{ "id": 3, "name": "New Item" }`     |
| PUT    | `/api/items/:id` | Update an item by ID      | `{ "name": "Updated Name" }` | `{ "id": 1, "name": "Updated Name" }` |
| DELETE | `/api/items/:id` | Delete an item by ID      | -                            | `{ "id": 1, "name": "Item One" }`     |

## 📦 Installation

1 Clone the repository:

```bash
git clone https://github.com/ojijoebrain/SimpleAPI.git
 cd SimpleAPI

2 Install dependencies:
 npm install

3 Start the server:  
  npm start

4 Access the API at:
  http://localhost:5000

-------------

## 🌐 Testing the API
## Using Postman or cURL:

--Get all items:
  curl http://localhost:5000/api/items

--Create a new item:
  curl -X POST -H "Content-Type: application/json" -d '{"name":"My Item"}' http://localhost:5000/api/items

-- Update an item:
  curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Item"}' http://localhost:5000/api/items/1
-- Delete an item:
   curl -X DELETE http://localhost:5000/api/items/1

--------------

## 📦 Project Structure
SimpleAPI/
├── node_modules/
├── routes/
│   └── items.js
├── package.json
├── package-lock.json
├── server.js
└── README.md


### POST /api/items
'''json
{
  "name": "Laptop",
  "description": "15-inch display"
}





