const mongoose = require("mongoose");

// const DurationExerciseType = {
//   _id: false,
//   time: {
//     type: [Number],
//     required: true,
//     description:
//       "Gives the time. It is an array of length 3. Index 0 represents hours, index 1 represents minutes and index 2 represents seconds. Leave index x with value 0 if not needed.",
//   },
// };

// const SpecificExerciseType = {
//   _id: false,
//   order: {
//     type: Number,
//     required: true,
//     min: 1,
//     description: "Same purpose as the ExerciseType order property.",
//   },
//   name: {
//     type: String,
//     required: true,
//     description: "Name of the specific exercise.",
//   },
//   sets: {
//     type: Number,
//     required: false,
//     description:
//       "Number of sets per exercise."
//   },
//   reps: {
//     type:  Number,
//     required: false,
//     description: "Number of reps per set.",
//   },
//   duration: {
//     type:  DurationExerciseType,
//     required: false,
//     description: "The duration of the exercise.",
//   },
//   distance: {
//     type: Number,
//     required: false,
//     min: 1,
//     description: "The distance of the exercise in meters."
//   },
//   weight: {
//     type: Number,
//     required: false,
//     min: 1,
//     description: "The weight used in the exercise in kilograms."
//   },
//   alternative: {
//     type: Boolean,
//     required: false,
//     description: "If it is an alternative exercise, ex: alternating lunges with a jump. It means the reps are done for each body part."
//   }
// };

// const ExerciseType = {
//   _id: false,
//   order: {
//     type: Number,
//     required: true,
//     min: 1,
//     description:
//       "Starts at 1 for the first exercise and increases by 1 for each subsequent exercise.",
//   },
//   name: {
//     type: String,
//     required: false,
//     description:
//       "The name of the exercise. This is more of a general encompass for similar exercises. Example: HIIT - name, exercise - sprinting + rest",
//   },
//   exercise: {
//     type: [SpecificExerciseType],
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//     description: "Lengthy explanation of the exercise.",
//   },
//   total_duration: {
//     type: Number,
//     required: true,
//     description: "Total duration of completing exercise. It is an approximative value."
//   }
// };

// const TrainingSchema = new mongoose.Schema({
//   program_name: {
//     type: String,
//     enum: [
//       "chi",
//       "xi",
//       "epsilon",
//       "omikron",
//       "theta",
//       "zeta",
//       "psi",
//       "omega",
//       "delta",
//       "gamma",
//     ],
//     required: true,
//   },
//   duration: {
//     type: Number,
//     required: true,
//     min: 0,
//     description: "Duration is in minutes.",
//   },
//   exercises: {
//     type: [ExerciseType],
//     required: true,
//   },
// });

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
});

const CalisthenicsTrainingSchema = new Schema({
  ...TrainingSchema.obj,
  exercises: {
    type: [CalisthenicsExerciseType],
    required: true,
  },
});

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
};

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
    description: "If time is 0 that means it is not time based.",
  },
  weight_to_beat: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
    description: "If weight is 0 that means it is not weight based.",
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
      "In case it is the last in its progress. You reached peaked calisthenics on that body part"+
      " For example the Z* in the special type." + 
      "If this is true, then reps_to_beat, time_to_beat, weight_to_beat will all be 0.",
  },
};

module.exports = mongoose.model("Training", TrainingSchema);
