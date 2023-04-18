const mongoose = require("mongoose");
const TrainingSchema = require("./Training");

const StretchingExerciseType = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: [
      "chest",
      "back",
      "shoulders",
      "hips",
      "quads",
      "hamstrings",
      "calves",
      "forearms",
      "biceps",
      "triceps",
      "core",
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
    description: "Information about the stretch.",
  },
  experience_on_performing_daily: {
    type: Number,
    required: true,
    min: 0,
  },
};

const StretchingTrainingSchema = new mongoose.Schema({
  ...TrainingSchema.obj,
  exercises: {
    type: [StretchingExerciseType],
    required: true,
  },
});

module.exports = mongoose.model("StretchingTraining", StretchingTrainingSchema);
