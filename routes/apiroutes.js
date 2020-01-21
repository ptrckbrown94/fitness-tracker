const express = require("express");
// const app = express.Router();
const db = require("../models")

module.exports = function(app){
    
    
    
    // Import the model to use its database functions.
    
    
    
    // Create all our routes and set up logic within those routes where required.
    
    // Add exercises to a previous workout plan.
    
    // Add new exercises to a new workout plan.
    
    app.get("/api/workouts", function(req, res) {
        console.log("HELLO")
        db.Workout.find().then(dbWorkout => console.log(dbWorkout))
    });
    
    
    // Export routes for server.js to use.
    
}
