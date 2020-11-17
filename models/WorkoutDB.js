const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
    },
    weight: { 
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    duration: {
        type: TimeRanges,
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;