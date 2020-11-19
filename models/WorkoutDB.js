const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
    name: {
        type: String,
        trim: true,
        }
    },
    {
    type: {
        type: String,
        trim: true,
        }
    },
    {
    weight: { 
        type: Number,
        },
    },
    {
    sets: {
        type: Number,
        }
    },
    {
    reps: {
        type: Number,
        }
    },
    {
    duration: {
        type: Number,
        }
    },
    {
    distane: {
        type: Number,
        }
    }]
})
//Includes virtual properties
{
    toJSON: {
        virtuals: true
    }
};


WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;