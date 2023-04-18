const mongoose = require("mongoose");

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
    unique: true,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
    description: "Duration is in minutes.",
  },
});

module.exports = TrainingSchema;
