# JSMicroProject2
A RESTful API built with Node.js, Express, and MongoDB to manage college data including campus info, location, and history.

# Features
- Create operation implemented to add college data
- Schema validation using Mongoose
- Secure connection using MongoDB Atlas and environment variables
- Organized using the MEN folder structure

# How to Use
- Clone the repository
- Run `npm install` to install dependencies (express, nodemon, dotenv, mongoose)
- Create a `.env` file and add your MongoDB connection string
- Start the server using `nodemon` or `node app.js`
- Use Postman to send POST requests to `/api/colleges`

# Folder structure:
colleges-app/
│
├── models/
│   └── College.js
├── routes/
│   └── createCollege.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
