const SwordExercises = {
  type: {
    type: String,
    enum: ["HAMA", "HEMA", "HMEMA"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tutorial_video_path: {
    type: [String],
    required: true,
    description:
      "Relative path(to build dir) for a video showing how the exercise is done.",
  },
  experience_on_performing_weekly: {
    type: Number,
    required: true,
    min: 0,
  },
  books_path: {
    type: String,
    required: false,
    description:
      "Relative path(to build dir) for a book/manuscript showing/explaining how the exercise is done.",
  },
  hands: {
    type: String,
    enum: ["one", "two", "one_or_two"],
    required: true,
  },
  // type_drill: {
  //   type: String,
  //   enum: ["guard", "attack", "foot_work", "combination", "gripping", "misc"],
  //   required: true,
  // },
};

module.exports = SwordExercises;
