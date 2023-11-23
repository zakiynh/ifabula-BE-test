# How To Use This App

This is how to run this app: 
 
 - Clone this repo.

 - Write in terminal npm install.
 
 - Create file .env and copy all key from .env.example.

 - Create DataBase with name "book_store".
 
 - Write in terminal npx sequelize db:migrate:all for database table.
 
 - Write in terminal npx sequelize db:seed:all.

 - Write npx nodemon start.
 

# API Docs

### List of Available Endpoints:

 - POST /users/register

 - POST /users/login

 - GET /books

 - POST /books

 - PUT /books/:id

 - DELETE /books/:id

 - GET /userbooks

 - POST /userbooks

 - DELETE /userbooks/:id

---

### **POST /register**

**Description**

 - Create New Account For Customer.

**Request**

 - body

 ``` 
    {
        "email": "customernew@gmail.com",
        "password": "qwertyQ1"
    }
 ```

**Response**

*201 - Created*

```
{
    "id": 10,
    "email": "customernew@gmail.com",
    "msg": "Successfully registered"
}
```

*400 - Bad Request*

```
{
    "message": "Password must contain at least one uppercase letter"
}
```

---

### **POST /login**

**Description**

 - Sign in to App.

**Request**

 - body

 ``` 
    {
        "email": "customernew@gmail.com",
        "password": "qwertyQ1"
    }
 ```

**Response**

*200 - OK*

```
{
    "msg": "Successfully logged in",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiY3VzdG9tZXJuZXdAZ21haWwuY29tIiwiaWF0IjoxNzAwNzYwNzM2fQ.b-Cemy-TKgQUmQoIDmC7ioZpW6T5J4D2XDCIJ1g41y4"
}
```

*401 - Unauthorized*

```
{
    "message": "Invalid email or password"
}
```

---

### **GET /books**

**Description**

 - Get All Book from Database.


**Response**

*200 - OK*

```
[
    {
        "id": 1,
        "title": "Petualang Tidak Berujung",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi.",
        "createdAt": "2023-11-23T16:46:31.259Z",
        "updatedAt": "2023-11-23T16:46:31.259Z"
    }
]
```

---

### **POST /books**

**Description**

 - Add New Book to Database.

**Request**

 - headers

  ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA3NjExNjR9.PEilPmBBFJtkZXnkoGrBb4E9HTTJAbYEZ2PqlOH3-Iw"
    }
  ```

 - body

 ``` 
    {
        "title": "30 hari Pandai Bermain Gitar",
        "description": "Ini dalah buku klasik untuk belajar gitar dengan kunci kunci rahasia"
    }
 ```

**Response**

*201 - Created*

```
{
    "book": {
        "id": 3,
        "title": "Petualang Asal Indonesia Serie 3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi.",
        "updatedAt": "2023-11-23T17:39:45.073Z",
        "createdAt": "2023-11-23T17:39:45.073Z"
    },
    "msg": "Successfully added a book"
}
```

*403 - Forbidden*

```
{
    "message": "You are not authorized to access this page"
}
```

---

### **PUT /books/:id**

**Description**

 - Edit Existing Book From Database.

**Request**

 - headers

  ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA3NjExNjR9.PEilPmBBFJtkZXnkoGrBb4E9HTTJAbYEZ2PqlOH3-Iw"
    }
  ```

 - body

 ``` 
    {
        "title": "30 hari Pandai Bermain Gitar Sampai Jago",
        "description": "Ini dalah buku klasik untuk belajar gitar dengan kunci kunci rahasia"
    }
 ```

**Response**

*200 - OK*

```
{
    "msg": "Successfully updated a book"
}
```

*401 - Unauthorized*

```
{
    "message": "You need to login first"
}
```

---

### **DELETE /books/:id**

**Description**

 - Delete Existing Book From Database.

**Request**

 - headers

  ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA3NjExNjR9.PEilPmBBFJtkZXnkoGrBb4E9HTTJAbYEZ2PqlOH3-Iw"
    }
  ```

**Response**

*200 - OK*

```
{
    "msg": "Successfully deleted a book"
}
```

*401 - Unauthorized*

```
{
    "message": "You need to login first"
}
```

---

### **GET /userbooks**

**Description**

 - Edit Existing Book From Database.

**Request**

 - headers

  ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA3NjExNjR9.PEilPmBBFJtkZXnkoGrBb4E9HTTJAbYEZ2PqlOH3-Iw"
    }
  ```

**Response**

*200 - OK*

```
[
    {
        "id": 2,
        "borrowed_at": "2023-11-23T17:51:12.344Z",
        "borrowed_exp": "2023-11-30T17:51:12.344Z",
        "user_id": 2,
        "book_id": 1,
        "createdAt": "2023-11-23T17:51:12.343Z",
        "updatedAt": "2023-11-23T17:51:12.343Z"
    },
    {
        "id": 4,
        "borrowed_at": "2023-11-23T17:51:12.344Z",
        "borrowed_exp": "2023-11-30T17:51:12.344Z",
        "user_id": 1,
        "book_id": 1,
        "createdAt": "2023-11-23T17:54:55.883Z",
        "updatedAt": "2023-11-23T17:54:55.883Z"
    }
]
```

*401 - Unauthorized*

```
{
    "message": "You need to login first"
}
```

---

### **POST /userbooks**

**Description**

 - Edit Existing Book From Database.

**Request**

 - headers

  ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA3NjExNjR9.PEilPmBBFJtkZXnkoGrBb4E9HTTJAbYEZ2PqlOH3-Iw"
    }
  ```

 - body

 ``` 
    {
        "user_id": "1",
        "book_id": "1",
        "borrowed_at": "2023-11-23T17:51:12.344Z",
        "borrowed_exp": "2023-11-30T17:51:12.344Z"
    }
 ```

**Response**

*200 - OK*

```
{
    "userBook": {
        "id": 4,
        "user_id": 1,
        "book_id": 1,
        "borrowed_at": "2023-11-23T17:51:12.344Z",
        "borrowed_exp": "2023-11-30T17:51:12.344Z",
        "updatedAt": "2023-11-23T17:54:55.883Z",
        "createdAt": "2023-11-23T17:54:55.883Z"
    },
    "msg": "Book successfully borrowed"
}
```

*400 - Bad Request*

```
{
    "message": "You already borrowed a book"
}
```

---

### **DELETE /userbooks/:id**

**Description**

 - Delete Existing Book From Database.

**Request**

 - headers

  ```
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA3NjExNjR9.PEilPmBBFJtkZXnkoGrBb4E9HTTJAbYEZ2PqlOH3-Iw"
    }
  ```

**Response**

*200 - OK*

```
{
    "msg": "Successfully returned a book"
}
```

*404 - Not Found*

```
{
    "message": "Book not found"
}
```