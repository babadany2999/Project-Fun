const BoxingExercisesType = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["shadowboxing", "combinations", "footwork_and_movement", "defense"],
    required: true,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    validate: {
      validator: function (level) {
        return (
          !["combinations", "footwork_and_movement", "defense"].includes(
            this.type
          ) || !!level
        );
      },
    },
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

module.exports = BoxingExercisesType;
