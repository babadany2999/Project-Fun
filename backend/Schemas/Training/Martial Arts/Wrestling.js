const WrestlingExercisesType = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["solo", "manequinn"],
  },
  experience_on_performing_weekly: {
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

module.exports = WrestlingExercisesType;
