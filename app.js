import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import createCollegeRoute from './routes/createCollege.js';

const app = express();
const port = 3000;

// Calling the connection string from .env
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// This route handles the creation of a new college by posting data to the server
app.use('/api/colleges', createCollegeRoute);

// MongoDB URI from environment variables
const mongoConn = process.env.connStr;

// Condition to check if mongoConn is defined
if (!mongoConn) {
    console.error('Connection string is missing');
    process.exit(1)
}

// MongoDB connection
async function main() {
    try {
        mongoose.connect(mongoConn);;
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
}

// Calling the function to connect to the database
main();

// Starting the express server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});