const mongoose = require("mongoose");
const TrainingSchema = require("../Training");
const BJJExercisesType = require("./BJJ");
const MuayThaiExercisesType = require("./MuayThai");
const BoxingExercisesType = require("./Boxing");
const WrestlingExercisesType = require("./Wrestling");



const validator = (timestamp) => {
  if (!timestamp || !timestamp.length !== 3) return false;
    for (x, i in timestamp) {
      if (typeof x !== "number") return false;
      const truth = true
      switch(i) {
        case 0: {
          if (timestamp[i] < 0 || timestamp[i] >= 2){
            truth = false;
          }
        }
        case 1: {
          if(timestamp[i] < 0 || timestamp[i] >= 60) {
            truth = false;
          }
        }
        case 2: {
          if(timestamp[i] < 0 || timestamp[i] >= 60) {
            truth = false
          }
        }
        default: truth = false
      }
      return truth;
    }
}

const TutorialVideoTimeStamp = {
  _id: false,
  time_start: {
    type: [Number, Number, Number],
    description: "Gives the start time in [hours, minutes, seconds].",
    validate: {
      validator: validator
    }
  },
  time_end: {
    type: [Number, Number, Number],
    description: "Gives the end time in [hours, minutes, seconds].",
    validate: {
      validator: validator
    },
  },
};

const MartialArtsTraining = new mongoose.Schema({
  ...TrainingSchema.obj,
  bjj_exercises: {
    type: [BJJExercisesType],
    required: true,
  },
  muaythai_exercises: {
    type: [MuayThaiExercisesType],
    required: true,
  },
  boxing_exercises: {
    type: [BoxingExercisesType],
    required: true,
  },
  wrestling_exercises: {
    type: [WrestlingExercisesType],
    required: true,
  },
});

module.exports = mongoose.model("MartialArts", MartialArtsTraining);
module.exports = TutorialVideoTimeStamp;
