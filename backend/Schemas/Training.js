const mongoose = require("mongoose");


const DurationExerciseType = {
  _id: false,
  time: {
    type: [Number],
    required: true,
    description:
      "Gives the time. It is an array of length 3. Index 0 represents hours, index 1 represents minutes and index 2 represents seconds. Leave index x with value 0 if not needed.",
  },
};

const SpecificExerciseType = {
  _id: false,
  order: {
    type: Number,
    required: true,
    min: 1,
    description: "Same purpose as the ExerciseType order property.",
  },
  name: {
    type: String,
    required: true,
    description: "Name of the specific exercise.",
  },
  sets: {
    type: Number,
    required: false,
    description:
      "Number of sets per exercise."
  },
  reps: {
    type:  Number,
    required: false,
    description: "Number of reps per set.",
  },
  duration: {
    type:  DurationExerciseType,
    required: false,
    description: "The duration of the exercise.",
  },
  distance: {
    type: Number,
    required: false,
    min: 1,
    description: "The distance of the exercise in meters."
  },
  weight: {
    type: Number,
    required: false,
    min: 1,
    description: "The weight used in the exercise in kilograms."
  },
//   height: {
//     type: Number,
//     required: false,
//     description: "Height at which to do the exercise. Measured in centimeters. It is an approximate value. For example it could be used in Jump Squats."
//   },
  alternative: {
    type: Boolean,
    required: false,
    description: "If it is an alternative exercise, ex: alternating lunges with a jump. It means the reps are done for each body part."
  }
};


const ExerciseType = {
  _id: false,
  order: {
    type: Number,
    required: true,
    min: 1,
    description:
      "Starts at 1 for the first exercise and increases by 1 for each subsequent exercise.",
  },
  name: {
    type: String,
    required: false,
    description:
      "The name of the exercise. This is more of a general encompass for similar exercises. Example: HIIT - name, exercise - sprinting + rest",
  },
  exercise: {
    type: [SpecificExerciseType],
    required: true,
  },
  description: {
    type: String,
    required: true,
    description: "Lengthy explanation of the exercise.",
  },
  total_duration: {
    type: Number,
    required: true,
    description: "Total duration of completing exercise. It is an approximative value."
  }
};


const TrainingSchema = new mongoose.Schema({
  program_name: {
    type: String,
    enum: [
      "chi",
      "xi",
      "epsilon",
      "omikron",
      "theta",
      "zeta",
      "psi",
      "omega",
      "delta",
      "gamma",
    ],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
    description: "Duration is in minutes.",
  },
  exercises: {
    type: [ExerciseType],
    required: true,
  },
});


module.exports = mongoose.model("Training", TrainingSchema);