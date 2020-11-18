const Workout = require ("../models/WorkoutDB");

module.exports = function(app) {
    app.post("/api/workouts", function(req, res) {
        Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts", function(req, res) {
        Workout.find({}, function(error, data) {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });

    app.put("/api/workouts/:id", function({ body, params}, res) {
        Workout.findByIdAndUpdate(params.id, { $push: {exercises: body }},
            {new: true, runValidators: true })
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.get("/api/workouts/range", function(req, res){
        Workout.find({}.limit(10), (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });
}