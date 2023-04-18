// const mongoose = require("mongoose");

// const LevelExperienceType = {
//   _id: false,
//   level: {
//     type: Number,
//     min: 1,
//     required: true,
//     description: "Level of user. No maximum exists.",
//     default: 1,
//   },
//   experience: {
//     type: Number,
//     min: 0,
//     required: true,
//     description:
//       "Experience of current level. Maximum is different for each level.",
//     default: 0,
//   },
//   max_xp: {
//     type: Number,
//     min: 0,
//     required: true,
//     description:
//       "Experience needed to reach next level. When experience === max_xp => level ++ && experience = 0.",
//   },
// };

// const UserHistoryType = {
//   date: {
//     type: Date,
//     required: true,
//     unique: true,
//     immutable: true,
//   },
//   training: {},
// };

// // Calisthenics
// const CalisthenicsProgressType = {
//   _id: false,
//   chest_exercise_id: {
//     type: mongoose.Schema.ObjectID,
//     required: true,
//     unique: true,
//   },
//   back_exercise_id: {
//     type: mongoose.Schema.ObjectID,
//     required: true,
//     unique: true,
//   },
//   shoulders_exercise_id: {
//     type: mongoose.Schema.ObjectID,
//     required: true,
//     unique: true,
//   },
//   core_exercise_id: {
//     type: mongoose.Schema.ObjectID,
//     required: true,
//     unique: true,
//   },
//   legs_exercise_id: {
//     type: mongoose.Schema.ObjectID,
//     required: true,
//     unique: true,
//   },
//   special_exercise_ids: {
//     type: [mongoose.Schema.ObjectID],
//     required: true,
//   },
// };

// const TrainingProgressType = {
//   _id: false,
//   //   cardiovascular: {
//   //     type: CardiovascularProgressType,
//   //   },
//   calisthenics: {
//     type: CalisthenicsProgressType,
//     required: true,
//   },
//   //   athleticism: {
//   //     type: AthleticismProgressType,
//   //   },
//   //   stretching: {
//   //     type: StretchingProgressType,
//   //   },
//   //   martial_arts: {
//   //     type: MartialArtsProgressType,
//   //   },
//   //   weapons: {
//   //     type: WeaponsProgressType,
//   //   },
//   //   mountain_hiking: {
//   //     type: MountainHikingProgressType,
//   //   },
//   //   reaction: {
//   //     type: ReactionProgressType,
//   //   },
//   //   meditation: {
//   //     type: MeditationProgressType,
//   //   },
//   //   acrobatics: {
//   //     type: AcrobaticsProgressType,
//   //   },
//   //   powerlifting: {
//   //     type: PowerliftingProgressType,
//   //   },
// };

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     description: "Name of user.",
//     immutable: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   weight: {
//     type: [Number, Number],
//     description: "Weight in [KG,G]",
//     required: true,
//   },
//   height: {
//     type: [Number, Number],
//     description: "Height in [M, CM]",
//     required: true,
//   },
//   bf_percentage: {
//     type: Number,
//     description: "The approximate bf percentage.",
//     max: 30,
//     min: 5,
//     required: true,
//   },
//   level_xp: {
//     type: LevelExperienceType,
//     required: true,
//     description: "Custom Type representing level and experience.",
//   },
//   training_progress: {
//     type: TrainingProgressType,
//     required: true,
//     description: "The progress of the user based on training.",
//   },
//   history: {
//     type: [UserHistoryType],
//     required: true,
//     description: "The History of a single day.",
//   },
// });

// module.exports = mongoose.model("User", UserSchema);
