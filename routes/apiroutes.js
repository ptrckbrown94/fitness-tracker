const express = require("express");
// const app = express.Router();
const db = require("../models")

module.exports = function(app){
    
    
    
    // Import the model to use its database functions.
    // Create all our routes and set up logic within those routes where required.
    // Add exercises to a previous workout plan.
    // Add new exercises to a new workout plan.
    
    //get last workout
    app.get("/api/workouts", function(req, res) {
        db.Workout.find().then(dbWorkout => res.json(dbWorkout))
    });
    
    // adding workout
    app.post("/api/workouts", function(req, res){

        db.Workout.create({}).then(dbWorkout => res.json(dbWorkout))
    });

    app.put("/api/workouts/:id", function(req, res){
        let id = req.params.id
        let data = req.body

        db.Workout.findByIdAndUpdate(id,
             {$push:{exercises: data}},{new:true,runValidators:true} )
             .then(dbWorkout => res.json(dbWorkout))

    });

    app.get("/api/workouts/range", function(req, res) {
        console.log("HELLO")
        db.Workout.find().then(dbWorkout => res.json(dbWorkout))
    });






    // Export routes for server.js to use.
    
}
