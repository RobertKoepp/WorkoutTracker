const mongoose = require("mongoose")
const Schema = mongoose.Schema


const excerciseSchema = new Schema(
    {
        day:{
            type: Date,
            default: () => new Date()
        }, 
        excercises: [
            {
                type:{
                    type: String,
                    required: "Please Type an Exercise"
                }, 
                 name: {
                     type: String,
                     required: "Please Enter Exercise Name"
                 },
                 duration: {
                     type: Number,
                     required: "Enter Exercise Duration"
                 },
                 weight: {
                     type: Number,
                     required: "Enter Weight for Exercise"
                 },
                 reps: {
                     type: Number,
                     required: "Enter Number of Reps for Exercise"
                 },
                 sets: {
                     type: Number, 
                     required: "Enter Number of Sets for Exercise"
                 }
            }
]
        },
        {
            toJSON: {
                virtuals: true,
            }
        })
excerciseSchema.virtual("total time").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
})
const Workout = mongoose.model("Workout", excerciseSchema)

module.exports = Workout