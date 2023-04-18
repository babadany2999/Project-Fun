const mongoose = require("mongoose");
const TrainingSchema = require("./Training");

const CardiovascularExerciseType = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  experience_on_performing_daily: {
    type: Number,
    required: true,
    min: 0,
  },
  tutorial_video_path: {
    type: String,
    required: true,
    description:
      "Relative path(to build dir) for a video showing how the exercise is done.",
  },
};

const CardiovascularTrainingSchema = new mongoose.Schema({
  ...TrainingSchema.obj,
  exercies: {
    type: [CardiovascularExerciseType],
    required: true,
  },
});

module.exports = mongoose.Model("CardiovascularTraining", CardiovascularTrainingSchema)
