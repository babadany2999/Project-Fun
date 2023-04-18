const Diet = require("./Diet.js");
// const Training = require("./Training.js");
// const User = require("./User.js");
const WeaponsTraining = require("./Training/Weapons/Weapons.js");
const Work = require("./Work.js");
const MartiArts = require("./Training/Martial Arts/MartialArts.js");
const MartialArts = require("./Training/Martial Arts/MartialArts.js");
// User Model

// const UserModelBeginning = new User({
//   name: "Baba Dan Constantin",
//   age: 23,
//   weight: 90,
//   height: [1, 80],
//   bf_percentage: 30,
//   level_xp: {},
//   training_progress: {
//     calisthenics: {
//       separatedCalisthenicsProgress: [
//         {
//           type: "chest",
//           name: "Incline Push-up",
//           rank: "F",
//           experience_on_performing_daily: calculate_exp_based_on_daily("F", 0),
//           experience_on_achieving: calculate_exp_based_on_achieving("F"),
//         },
//       ],
//     },
//   },
// });

// const calculate_exp_based_on_daily = (diff, max_reps, max_time, max_weight) => {
//   switch (diff) {
//     case "F":
//       return (7 ^ 0)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "E":
//       return (7 ^ 1)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "D":
//       return (7 ^ 2)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "C":
//       return (7 ^ 3)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "B":
//       return (7 ^ 4)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "A":
//       return (7 ^ 5)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "S":
//       return (7 ^ 6)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "SS":
//       return (7 ^ 7)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "SSS":
//       return (7 ^ 8)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "Z":
//       return (7 ^ 9)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//     case "Z*":
//       return (7 ^ 10)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
//   }
// };

// normalize_based_on_parameters = (max_reps, max_time, max_weight, next_reps, next_time, next_weight) => {
//     // It should return a number between 1 and 3
//     // max_reps && next_reps > 0 ? max_time && max_weight && next_time && next_weight = 0;
//     // max_time && next_time > 0 ? max_reps && max_weight && next_reps && next_weight = 0;
//     // max_weight && next_weight > 0 ? max_reps && max_time && next_reps && next_time = 0;
//     // max_reps && next_reps >= 0 && max_reps && next_reps <= 30
//     // max_weight && next_weight >= 0 && max_weight && next_weight <= 100;
//     // max_time && next_time >= 0 && max_time && next_time <= 300(seconds)
//     // max_reps === 1 => return 1;
//     // max_weight === 5 => return 1;
//     // max_time === 15 => return 1;
//     // max_reps === next_time => return 3;
//     // max_weight === next_weight => return 3;
//     // max_time === next_time => return 3;
// }

// const calculate_exp_based_on_achieving = (diff) => {
//   return 3 * calculate_exp_based_on_daily(diff);
// };

// module.exports = UserModelBeginning;

// Calisthenics Model
// const TrainingModel = new CalisthenicsTraining({
//   program_name: "zeta",
//   duration: 60,
//   exercises: [
//     {
//       name: "Incline Push-Up",
//       rank: "F",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       achieved: true,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/incline_push-up.mp4",
//     },
//     {
//       name: "Wide Push-Up",
//       rank: "E",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/wide_push-up.mp4",
//     },
//     {
//       name: "Diamond Push-Up",
//       rank: "D",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/diamond_push-up.mp4",
//     },
//     {
//       name: "Shoulder Tap Push-Up",
//       rank: "C",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/shoulder_tap_push-up.mp4",
//     },
//     {
//       name: "Archer Push-Up",
//       rank: "B",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/archer_push-up.mp4",
//     },
//     {
//       name: "Pseudo Planche Push-Up",
//       rank: "A",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/pseudo_planche_push-up.mp4",
//     },
//     {
//       name: "One Arm Push-Up",
//       rank: "S",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/one_arm_push-up.mp4",
//     },
//     {
//       name: "Planche Hold",
//       rank: "SS",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/planche_hold.mp4",
//     },
//     {
//       name: "Planche Push-Up",
//       rank: "SSS",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/planche_push-up.mp4",
//     },
//     {
//       name: "One Arm Planche Walk",
//       rank: "Z",
//       type: "chest",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Chest/one_arm_planche_walk.mp4",
//     },
//     {
//       name: "Wall Angel",
//       rank: "F",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       achieved: true,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/wall_angel.mp4",
//     },
//     {
//       name: "Inverted Row",
//       rank: "E",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/inverted_row.mp4",
//     },
//     {
//       name: "Prone Cobra",
//       rank: "D",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/prone_cobra.mp4",
//     },
//     {
//       name: "Bar Hold",
//       rank: "C",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/bar_hold.mp4",
//     },
//     {
//       name: "Pull-Up",
//       rank: "B",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/pull-up.mp4",
//     },
//     {
//       name: "Typewriter Pull-up",
//       rank: "A",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/typewriter_pull-up.mp4",
//     },
//     {
//       name: "One Arm Pull-Up",
//       rank: "S",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/one_arm_pull-up.mp4",
//     },
//     {
//       name: "One Arm Back Lever Pull-Up",
//       rank: "SS",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/one_arm_back_lever_pull-up.mp4",
//     },
//     {
//       name: "One Finger Front Lever Pull-Up",
//       rank: "SSS",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/one_finger_front_lever_pull-up.mp4",
//     },
//     {
//       name: "One Finger Front Lever Pull-Up",
//       rank: "Z",
//       type: "back",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Back/one_finger_front_lever_pull-up.mp4",
//     },
//     {
//       name: "Shoulder Roll",
//       rank: "F",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       achieved: true,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/shoulder_roll.mp4",
//     },
//     {
//       name: "Scapular Push-Up",
//       rank: "E",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/scapular_push-up.mp4",
//     },
//     {
//       name: "Pike Push-Up",
//       rank: "D",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/pike_push-up.mp4",
//     },
//     {
//       name: "Wall Assisted Handstand Hold",
//       rank: "C",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/wall_assisted_handstand_hold.mp4",
//     },
//     {
//       name: "Handstand Hold",
//       rank: "B",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/handstand_hold.mp4",
//     },
//     {
//       name: "Handstand Push-Up",
//       rank: "A",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/handstand_push-up.mp4",
//     },
//     {
//       name: "One Arm Handstand Hold",
//       rank: "S",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/one_arm_handstand_hold.mp4",
//     },
//     {
//       name: "One Arm Handstand Walk",
//       rank: "SS",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/one_arm_handstand_walk.mp4",
//     },
//     {
//       name: "One Arm Handstand Push-Up",
//       rank: "SSS",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/one_arm_handstand_push-up.mp4",
//     },
//     {
//       name: "One Finger Handstand Hold",
//       rank: "Z",
//       type: "shoulders",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Shoulders/one_finger_handstand_hold.mp4",
//     },
//     {
//       name: "Bracing",
//       rank: "F",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       achieved: true,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/bracing.mp4",
//     },
//     {
//       name: "Dead Bug",
//       rank: "E",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/dead_bug.mp4",
//     },
//     {
//       name: "Russian Twist",
//       rank: "D",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/russian_twist.mp4",
//     },
//     {
//       name: "Bicycle Crunch",
//       rank: "C",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/bicycle_crunch.mp4",
//     },
//     {
//       name: "Plank",
//       rank: "B",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/plank.mp4",
//     },
//     {
//       name: "L Sit",
//       rank: "A",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/l_sit.mp4",
//     },
//     {
//       name: "V Sit",
//       rank: "S",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/v_sit.mp4",
//     },
//     {
//       name: "Human Flag",
//       rank: "SS",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/human_flag.mp4",
//     },
//     {
//       name: "Manna",
//       rank: "SSS",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/manna.mp4",
//     },
//     {
//       name: "High Manna",
//       rank: "Z",
//       type: "core",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Core/high_manna.mp4",
//     },
//     {
//       name: "Calf Raise",
//       rank: "F",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       achieved: true,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/calf_raise.mp4",
//     },
//     {
//       name: "Wall Sit",
//       rank: "E",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         time_to_beat: 60,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/wall_sit.mp4",
//     },
//     {
//       name: "Bodyweight Squat",
//       rank: "D",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/bodyweight_squat.mp4",
//     },
//     {
//       name: "Split Squat 1(Bodyweight)",
//       rank: "C",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/split_squat.mp4",
//     },
//     {
//       name: "Split Squat 2(10kg)",
//       rank: "B",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/split_squat.mp4",
//     },
//     {
//       name: "Split Squat 3(20kg)",
//       rank: "A",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/split_squat.mp4",
//     },
//     {
//       name: "Split Squat 4(30kg)",
//       rank: "S",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/split_squat.mp4",
//     },
//     {
//       name: "Split Squat 5(40kg)",
//       rank: "SS",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/split_squat.mp4",
//     },
//     {
//       name: "Split Squat 6(50kg)",
//       rank: "SSS",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         reps_to_beat: 30,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/split_squat.mp4",
//     },
//     {
//       name: "Split Squat 7(80kg)",
//       rank: "Z",
//       type: "legs",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Legs/split_squat.mp4",
//     },
//     {
//       name: "Assisted Victorian",
//       rank: "SS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/assisted_victorian.mp4",
//     },
//     {
//       name: "The Impossible Dip",
//       rank: "SS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/the_impossible_dip.mp4",
//     },
//     {
//       name: "Hefesto",
//       rank: "SS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/hefesto.mp4",
//     },
//     {
//       name: "Back Lever Muscle-Up",
//       rank: "SS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/back_lever_muscle-up.mp4",
//     },
//     {
//       name: "Iron Cross",
//       rank: "SS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/iron_cross.mp4",
//     },
//     {
//       name: "Maltese",
//       rank: "SS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/maltese.mp4",
//     },
//     {
//       name: "Inverted Iron Cross",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/inverted_iron_cross.mp4",
//     },
//     {
//       name: "Reverse Muscle-Up",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/reverse_muscle-up.mp4",
//     },
//     {
//       name: "Nakayama",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/nakayama.mp4",
//     },
//     {
//       name: "Pineda",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/pineda.mp4",
//     },
//     {
//       name: "Azarian",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/azarian.mp4",
//     },
//     {
//       name: "Butterfly",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/butterfly.mp4",
//     },
//     {
//       name: "One Arm Muscle-Up",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/one_arm_muscle-up.mp4",
//     },
//     {
//       name: "One Arm Planche",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/one_arm_planche.mp4",
//     },
//     {
//       name: "Finger Planche",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/finger_planche.mp4",
//     },
//     {
//       name: "Finger Maltese",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/finger_maltese.mp4",
//     },
//     {
//       name: "Victorian Cross",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/victorian_cross.mp4",
//     },
//     {
//       name: "Pelican",
//       rank: "SSS",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/pelican.mp4",
//     },
//     {
//       name: "VanGelder",
//       rank: "Z",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/vangelder.mp4",
//     },
//     {
//       name: "Carmona",
//       rank: "Z",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/carmona.mp4",
//     },
//     {
//       name: "Zanetti",
//       rank: "Z",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/zanetti.mp4",
//     },
//     {
//       name: "Caruso",
//       rank: "Z",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/caruso.mp4",
//     },
//     {
//       name: "Perfect One Arm Diamond Push-Up",
//       rank: "Z",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/perfect_one_arm_diamond_push-up.mp4",
//     },
//     {
//       name: "Reverse Planche",
//       rank: "Z",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/reverse_planche.mp4",
//     },
//     {
//       name: "One Arm Hefesto",
//       rank: "Z",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/one_arm_hefesto.mp4",
//     },
//     {
//       name: "CTI",
//       rank: "Z*",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/cti.mp4",
//     },
//     {
//       name: "Reverse VanGelder",
//       rank: "Z*",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/reverse_vangelder.mp4",
//     },
//     {
//       name: "Reverse Zanetti",
//       rank: "Z*",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/reverse_zanetti.mp4",
//     },
//     {
//       name: "CTI Muscle-Up",
//       rank: "Z*",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/cti_muscle-up.mp4",
//     },
//     {
//       name: "Straight Arm Reverse Mu(Straight Arm Inverted Butterfly)",
//       rank: "Z*",
//       type: "special",
//       experience_on_performing_daily: 0,
//       experience_on_achieving: 0,
//       progress_to_advance: {
//         no_progress: true,
//       },
//       tutorial_video_path:
//         "./assets/Video/Training/Calisthenics/Special/straight_arm_reverse_mu.mp4",
//     },
//   ],
// });

// const hama_hyoho_niten_ichi_ryu = [
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Sassen",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/sassen_one.mp4",
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/sassen_two.mp4",
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/sassen_hasso-hidari_uke-nagashi-hidari.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Hasso Hidari",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/sassen_hasso-hidari_uke-nagashi-hidari.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Uke Nagashi Hidari",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/sassen_hasso-hidari_uke-nagashi-hidari.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Moji Gamae",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/moji-gamae_haritsuke_nagashi-uchi.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Haritsuke",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/moji-gamae_haritsuke_nagashi-uchi.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Nagashi Uchi",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/moji-gamae_haritsuke_nagashi-uchi.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Tora Buri",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/tora-buri_kazuki_aisen-uchidome_amashi-uchi.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Kazuki Aisen",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/tora-buri_kazuki_aisen-uchidome_amashi-uchi.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Uchidome",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/tora-buri_kazuki_aisen-uchidome_amashi-uchi.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Amashi Uchi",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/tora-buri_kazuki_aisen-uchidome_amashi-uchi.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "one",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Chudan",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/chudan.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "two",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Gedan",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/gedan.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "two",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Hidari Waki No Kamae",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/hidari-waki-no-kamae.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "two",
//   },
//   {
//     type: "HAMA",
//     name: "Niten Ichi-Ryu Migi Waki No Kamae",
//     tutorial_video_path: [
//       "./assets/Video/Training/Weapons/Swords/HAMA/Hyoho Niten Ichi Ryu/migi-waki-no-kamae.mp4",
//     ],
//     experience_on_performing_weekly: 0,
//     books_path: "",
//     hands: "two",
//   },
// ];

// const WeaponsModel = new WeaponsTraining({
//   program_name: "gamma",
//   duration: 240,
//   sword_exercises: [...hama_hyoho_niten_ichi_ryu],
//   knife_exercises: [],
// });

/*
{
  name: "",
  experience_on_performing_daily: 0,
  tutorial_video_path: "./assets/Video/Training/Martial Arts/BJJ/sit-outs.mp4",
  manequinn_position: "bottom_guard" -> ["bottom_guard, "top_guard", "pin_escape", "top_pin", "leg_lock", "turtle", "back_control", "solo"] 
}
*/
const BJJExercisesModelSolo = [
  {
    name: "Sit-Outs",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 0, 38],
      time_end: [0, 0, 46],
    },
  },
  {
    name: "Sit-Arounds",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 0, 46],
      time_end: [0, 0, 55],
    },
  },
  {
    name: "Low Sit Push Up",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 0, 55],
      time_end: [0, 1, 13],
    },
  },
  {
    name: "High Kick Push Up",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 1, 13],
      time_end: [0, 1, 35],
    },
  },
  {
    name: "Side to Side Bridges",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 1, 35],
      time_end: [0, 1, 46],
    },
  },
  {
    name: "Side Bridge Turns",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 1, 46],
      time_end: [0, 2, 5],
    },
  },
  {
    name: "Leg Circles",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 2, 5],
      time_end: [0, 2, 23],
    },
  },
  {
    name: "Hip Ups",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 2, 23],
      time_end: [0, 2, 40],
    },
  },
  {
    name: "Triangle Hip Ups",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 2, 40],
      time_end: [0, 3, 0],
    },
  },
  {
    name: "Shin Rock Ups",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 3, 0],
      time_end: [0, 3, 15],
    },
  },
  {
    name: "Shin Rock Up Shots",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 3, 15],
      time_end: [0, 3, 35],
    },
  },
  {
    name: "Hip Bumps",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 3, 35],
      time_end: [0, 3, 53],
    },
  },
  {
    name: "S-Turns",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 3, 53],
      time_end: [0, 4, 4],
    },
  },
  {
    name: "S-Turn Hip Drives",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 4, 4],
      time_end: [0, 4, 15],
    },
  },
  {
    name: "Compass Drill",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 4, 15],
      time_end: [0, 4, 31],
    },
  },
  {
    name: "Srimp In Place",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 4, 31],
      time_end: [0, 4, 45],
    },
  },
  {
    name: "Circle Shrimps",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 4, 45],
      time_end: [0, 5, 0],
    },
  },
  {
    name: "Half Circle Pass",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 5, 0],
      time_end: [0, 5, 11],
    },
  },
  {
    name: "Up Downs",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 5, 11],
      time_end: [0, 5, 23],
    },
  },
  {
    name: "Alligator Push-ups",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 5, 23],
      time_end: [0, 5, 36],
    },
  },
  {
    name: "Scorpions",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 5, 36],
      time_end: [0, 5, 50],
    },
  },
  {
    name: "Explosive Pops",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 5, 50],
      time_end: [0, 5, 58],
    },
  },
  {
    name: "Plank Hops",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 5, 58],
      time_end: [0, 6, 10],
    },
  },
  {
    name: "Long Steps",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 6, 10],
      time_end: [0, 6, 26],
    },
  },
  {
    name: "Crazy Legs",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 6, 26],
      time_end: [0, 6, 42],
    },
  },
  {
    name: "One Foot Hop Knee Cuts",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 6, 42],
      time_end: [0, 7, 1],
    },
  },
  {
    name: "Shoulder Drops",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 7, 1],
      time_end: [0, 7, 26],
    },
  },
  {
    name: "Headstand Hops",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 7, 26],
      time_end: [0, 7, 50],
    },
  },
  {
    name: "Flat Rolls - Back and Forward",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 7, 50],
      time_end: [0, 8, 15],
    },
  },
  {
    name: "Backward Shrimps",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 8, 15],
      time_end: [0, 8, 22],
    },
  },
  {
    name: "Forward Shrimps",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 8, 22],
      time_end: [0, 8, 31],
    },
  },
  {
    name: "Shoulder Walks",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 8, 31],
      time_end: [0, 8, 43],
    },
  },
  {
    name: "Sitting Granby's",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 8, 43],
      time_end: [0, 8, 56],
    },
  },
  {
    name: "Half Granby's",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 8, 56],
      time_end: [0, 9, 11],
    },
  },
  {
    name: "Side Shrimps Back",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 9, 11],
      time_end: [0, 9, 19],
    },
  },
  {
    name: "Side Shrimps Forward",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 9, 19],
      time_end: [0, 9, 28],
    },
  },
  {
    name: "Elbow Drags",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 9, 28],
      time_end: [0, 9, 40],
    },
  },
  {
    name: "Seal Walks",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 9, 40],
      time_end: [0, 9, 53],
    },
  },
  {
    name: "Bear Crawl Forward and Back",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 9, 53],
      time_end: [0, 10, 10],
    },
  },
  {
    name: "Crab Walk Forward and Back",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 10, 10],
      time_end: [0, 10, 30],
    },
  },
  {
    name: "Break Fall/Technical Stand",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 10, 30],
      time_end: [0, 10, 46],
    },
  },
  {
    name: "Wrestler Shots",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 10, 46],
      time_end: [0, 10, 58],
    },
  },
  {
    name: "Fast Feet/Sprawls",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 10, 58],
      time_end: [0, 11, 19],
    },
  },
  {
    name: "Scoots Forward",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 11, 19],
      time_end: [0, 11, 30],
    },
  },
  {
    name: "Scoots Backward",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 11, 30],
      time_end: [0, 11, 36],
    },
  },
  {
    name: "Scoots Sideways",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 11, 36],
      time_end: [0, 11, 51],
    },
  },
  {
    name: "Imaginary Rope Pulls",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 11, 51],
      time_end: [0, 12, 2],
    },
  },
  {
    name: "Heel Drives Back",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 12, 2],
      time_end: [0, 12, 12],
    },
  },
  {
    name: "Forward Rolls",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 12, 12],
      time_end: [0, 12, 25],
    },
  },
  {
    name: "Backward Rolls",
    experience_on_performing_weekly: 0,
    manequinn_position: "solo",
    tutorial_video_timestamp: {
      time_start: [0, 12, 25],
      time_end: [0, 12, 40],
    },
  },
];

const BJJExercisesModelMannequin = {
  chokes: [
    {
      name: "Rear Naked Choke",
      experience_on_performing_weekly: 0,
    },
  ],
  joint_locks: [],
  sweeps: [],
  positional_grappling: [],
};

const MuayThaiExercisesModel = [
  // Punches
  {
    name: "Jab",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab.mp4",
  },
  {
    name: "Cross",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/cross.mp4",
  },
  {
    name: "Jab-Cross",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab-cross.mp4",
  },
  {
    name: "Hook",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/hook.mp4",
  },
  {
    name: "Jab-Hook",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab-hook.mp4",
  },
  {
    name: "Cross-Hook",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab-cross-hook-cross.mp4",
  },
  {
    name: "Uppercut",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/uppercut.mp4",
  },
  {
    name: "Jab-Uppercut",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab-uppercut.mp4",
  },
  {
    name: "Cross-Uppercut",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/cross-uppercut.mp4",
  },
  {
    name: "Overhand",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/overhand.mp4",
  },
  {
    name: "Jab-Overhand",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab-overhand.mp4",
  },
  {
    name: "Cross-Overhand",
    type: "punches",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/cross-overhand.mp4",
  },
  {
    name: "Jab-Cross-Hook",
    type: "punches",
    level: "intermediate",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab-cross-hook-cross.mp4",
  },
  {
    name: "Jab-Cross-Hook-L.Uppercut",
    type: "punches",
    level: "intermediate",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Boxing/Punches/jab-cross-hook-uppercut.mp4",
  },
  {
    name: "Jab-Overhand-Cross",
    type: "punches",
    level: "intermediate",
    experience_on_performing_weekly: 0,
  },
  {
    name: "Jab-Cross-Uppercut-L.Hook",
    type: "punches",
    level: "intermediate",
    experience_on_performing_weekly: 0,
  },
  {
    name: "Cross-Hook-Cross-Overhand",
    type: "punches",
    level: "intermediate",
    experience_on_performing_weekly: 0,
  },
  {
    name: "Jab-Cross-L.Hook-Overhand",
    type: "punches",
    level: "advanced",
    experience_on_performing_weekly: 0,
  },
  {
    name: "Jab-Cross-Hook-L.Uppercut-Overhand",
    type: "punches",
    level: "advanced",
    experience_on_performing_weekly: 0,
  },
  {
    name: "Jab-Overhand-Cross-L.Hook",
    type: "punches",
    level: "advanced",
    experience_on_performing_weekly: 0,
  },
  {
    name: "Jab-Cross-Uppercut-L.Hook-Overhand",
    type: "punches",
    level: "advanced",
    experience_on_performing_weekly: 0,
  },

  {
    name: "Straight Knee Strike",
    type: "knees",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Muay Thai/knees/straight-knee.mp4",
  },
  {
    name: "Diagonal Knee Strike",
    type: "knees",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Muay Thai/knees/diagonal-knee.mp4",
  },
  {
    name: "Switch Knee Strike",
    type: "knees",
    level: "beginner",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Muay Thai/knees/switch-knee.mp4",
  },
  {
    name: "Curving Knee Strike",
    type: "knees",
    level: "intermediate",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Muay Thai/knees/curving-knee.mp4",
  },
  {
    name: "Side Knee Strike",
    type: "knees",
    level: "intermediate",
    experience_on_performing_weekly: 0,
    tutorial_video_path:
      "./assets/Video/Training/Martial Arts/Muay Thai/knees/curving-knee.mp4",
  },
  
];

const BoxingExercisesModel = [];

const WrestlingExercisesModel = [];

const MartialArtsModel = new MartialArts({
  program_name: "delta",
  duration: 240,
  bjj_exercises: [...BJJExercisesModelSolo, ...BJJExercisesModelMannequin],
  muaythai_exercises: MuayThaiExercisesModel,
  boxing_exercises: BoxingExercisesModel,
  wrestling_exercises: WrestlingExercisesModel,
});

// module.exports = TrainingModel;

// module.exports = DietModel;
