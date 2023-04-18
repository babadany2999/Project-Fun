const mongoose = require("mongoose");
const TrainingSchema = require("./Training");

const ProgressExerciseToAdvanceType = {
  _id: false,
  reps_to_beat: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
    description: "If reps is 0 that means it is not rep based.",
  },
  time_to_beat: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
    description:
      "If time is 0 that means it is not time based. It is in seconds.",
  },
  weight_to_beat: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
    description:
      "If weight is 0 that means it is not weight based. It is in kilograms.",
  },
  record: {
    type: [Number, Number, Number],
    required: true,
    default: [0, 0, 0],
    description:
      "Record for exercise. It is [Reps, Time, Weight]. Only one entry can have a value > 0.",
  },
  no_progress: {
    type: Boolean,
    required: true,
    default: false,
    description:
      "In case it is the last in its progress. You reached peaked calisthenics on that body part" +
      " For example the Z* in the special type." +
      " If this is true, then reps_to_beat, time_to_beat, weight_to_beat will all be 0.",
  },
};  

const CalisthenicsExerciseType = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rank: {
    type: String,
    enum: ["F", "E", "D", "C", "B", "A", "S", "SS", "SSS", "Z", "Z*"],
    required: true,
  },
  type: {
    type: String,
    enum: ["chest", "back", "shoulders", "core", "legs", "special"],
    required: true,
  },
  experience_on_performing_daily: {
    type: Number,
    required: true,
    min: 0,
  },
  experience_on_achieving: {
    type: Number,
    required: true,
    min: 0,
  },
  achieved: {
    type: Boolean,
    default: false,
    required: true,
  },
  progress_to_advance: {
    type: ProgressExerciseToAdvanceType,
    required: true,
  },
  tutorial_video_path: {
    type: String,
    required: true,
    description:
      "Relative path(to build dir) for a video showing how the exercise is done.",
  },
};

const CalisthenicsTrainingSchema = new mongoose.Schema({
  ...TrainingSchema.obj,
  exercises: {
    type: [CalisthenicsExerciseType],
    required: true,
  },
});

module.exports = mongoose.model(
  "CalisthenicsTraining",
  CalisthenicsTrainingSchema
);
