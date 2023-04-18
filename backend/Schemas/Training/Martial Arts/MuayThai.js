const MuayThaiExerciseType = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: [
      "punches",
      "knees",
      "elbows",
      "clinching",
      "kicks",
      "defense",
      "conditioning",
      "shadowboxing",
    ],
    required: true,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    validate: {
      validator: function (level) {
        return (
          ![
            "punches",
            "knees",
            "elbows",
            "clinching",
            "kicks",
            "defense",
          ].includes(this.type) || !!level
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
    required: false,
    description:
      "Relative path(to build dir) for a video showing how the exercise is done.",
  },
};

module.exports = MuayThaiExerciseType;
