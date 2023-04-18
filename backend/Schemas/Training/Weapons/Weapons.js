const mongoose = require("mongoose");
const TrainingSchema = require("../Training");
const SwordExercises = require("./Sword");

const WeaponsTrainingSchema = new mongoose.Schema({
  ...TrainingSchema.obj,
  sword_exercises: {
    type: [SwordExercises],
    required: true,
  },
  knife_exercises: {},
});


module.exports = mongoose.model("WeaponsTraining", WeaponsTrainingSchema)