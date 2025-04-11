import mongoose from 'mongoose';

// College collection
const collegeSchema = new mongoose.Schema({
    // adding conditions
    college_name: {
        type: String,
        required: [true, 'College name is required'],
        trim: true,
    },
    number_of_campuses: {
        type: Number,
        required: true,
        min: [1, 'Must have at least one campus'],
    },
    main_campus_location: {
        type: String,
        required: true,
    },
    established_year: {
        type: Number,
        min: [1800, 'Year must be after 1800'],
        max: [new Date().getFullYear(), 'Cannot be in the future'],
    },
    is_public: {
        type: Boolean,
        default: true,
    }
});

// deploy schema to database
const College = mongoose.model('College', collegeSchema);

// export College
export default College;