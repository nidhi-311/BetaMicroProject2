// Import express and College model (schema)
import express from 'express';
import College from '../models/College.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Extracting data from the request body
        const { college_name, number_of_campuses, main_campus_location, established_year, is_public } = req.body;

        // check if any is empty
        if (!college_name || !number_of_campuses || !main_campus_location || !established_year) {
            return res.status(400).json({ message: 'All required fields must be provided.' });
        }

        // create a newCollege document
        const newCollege = new College({
            college_name,
            number_of_campuses,
            main_campus_location,
            established_year,
            is_public
        });

        // Save the new college to the database
        const savedCollege = await newCollege.save();
        // Return the saved college data with a 201 status
        res.status(201).json(savedCollege);

    } catch (error) {
        // res.status(400).send('Bad response!')
        res.status(400).json({ message: error.message });
    }
});
// exporting the router to use in the main application
export default router;