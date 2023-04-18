const TutorialVideoTimeStamp = require("./MartialArts");

const BJJExercisesType = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  experience_on_performing_weekly: {
    type: Number,
    required: true,
    min: 0,
  },
  tutorial_video_path: {
    type: String,
    required: true,
    default: function () {
      return this.manequinn_position === "solo"
        ? "./assets/Video/Training/Martial Arts/BJJ/bjj_solo_drills.mp4"
        : "./assets/Video/Training/Martial Arts/BJJ/bjj_mannequin_drills.mp4";
    },
    description:
      "Relative path(to build dir) for a video showing how the exercise is done.",
  },
  manequinn_position: {
    type: String,
    enum: [
      "bottom_guard",
      "top_guard",
      "pin_escape",
      "top_pin",
      "leg_lock",
      "turtle",
      "back_control",
      "solo",
    ],
    required: true,
  },
  tutorial_video_timestamp: {
    type: TutorialVideoTimeStamp,
    required: true,
  },
  extra_tutorials_video_paths: {
    type: [String],
    required: false,
    unique: true,
    description:
      "An exercise can have an additional array of strings containing the relative path(to build dir) representative of video tutorials.",
  },
};

module.exports = BJJExercisesType;
