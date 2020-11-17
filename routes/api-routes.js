const Workout = require ("../models/WorkoutDB");

module.exports = function(app) {
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
}