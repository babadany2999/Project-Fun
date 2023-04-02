const Diet = require("./Diet.js");
const Training = require("./Training.js");
const User = require("./User.js");

const TrainingModel = new Training({
  program_name: "theta",
  duration: 60,
  exercises: [
    {
      order: 1,
      name: "Warm-Up",
      description:
        "Light jogging, jumping jacks, or dynamic stretches to raise your heart rates and prepare your body for exercise.",
      total_duration: [0, 10, 0],
      exercise: [
        {
          order: 1,
          name: "Light jogging/Jumping jacks/Dynamic Stretches",
          duration: {
            time: [0, 10, 0],
          },
        },
      ],
    },
    {
      order: 2,
      name: "HIIT",
      description:
        "This involves short bursts of high-intensity exercise followed by periods of rest.",
      total_duration: [0, 10, 0],
      exercise: [
        {
          order: 1,
          name: "Sprinting",
          sets: 10,
          duration: {
            time: [0, 0, 30],
          },
        },
        {
          order: 2,
          name: "Rest",
          sets: 10,
          duration: {
            time: [0, 0, 30],
          },
        },
      ],
    },
    {
      order: 3,
      name: "Plyometrics",
      description:
        "Plyometric exercises are explosive movements that can improve power and agility.",
      total_duration: [0, 9, 0],
      exercise: [
        {
          order: 1,
          name: "Jump Squats",
          sets: 3,
          reps: 12,
          duration: {
            time: [0, 1, 0],
          },
        },
        {
          order: 2,
          name: "Alternating Lunges with a jump",
          sets: 3,
          reps: 12,
          alternative: true,
          duration: [0, 1, 0],
        },
        {
          order: 3,
          name: "Rest",
          sets: 6,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 4,
      name: "Jump Rope",
      description:
        "Jumping rope is an excellent way to improve footwork, agility, and cardiovascular endurance. It also helps with coordination and timing.",
      total_duration: [0, 21, 0],
      exercise: [
        {
          order: 1,
          name: "Single Unders",
          sets: 6,
          duration: {
            time: [0, 3, 0],
          },
        },
        {
          order: 2,
          name: "Rest",
          sets: 6,
          duration: {
            time: [0, 0, 30],
          },
        },
      ],
    },
    {
      order: 5,
      name: "Cool Down",
      description:
        "Light jogging or walking to bring your heart rate down gradually and prevent dizziness or lightheadeadness",
      total_duration: [0, 10, 0],
      exercise: [
        {
          order: 1,
          name: "Light jog/Walking",
          duration: {
            time: [0, 10, 0],
          },
        },
      ],
    },
  ],
});

const TrainingModel2 = new Training({
  program_name: "zeta",
  duration: 60,
  exercises: [
    {
      order: 1,
      name: "Legs",
      description: "Improves leg musculature.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Bodyweight Squats",
          sets: 5,
          reps: 12,
          duration: [0, 1, 0],
        },
        {
          order: 2,
          name: "Rest",
          sets: 5,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 2,
      name: "Chest",
      description: "Improves chest musculature.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Regular push-ups",
          sets: 5,
          reps: 12,
          duration: [0, 1, 0],
        },
        {
          order: 2,
          name: "Rest",
          sets: 5,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 3,
      name: "Lateral legs",
      description: "Improves leg and hip musculature.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Walking lunges",
          sets: 5,
          reps: 12,
          alternative: true,
          duration: [0, 1, 0],
        },
        {
          order: 2,
          name: "Rest",
          sets: 5,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 4,
      name: "Back",
      description: "Improves back musculature.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Pull-ups",
          sets: 5,
          reps: 12,
          duration: [0, 1, 0],
        },
        {
          order: 2,
          name: "Rest",
          sets: 5,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 5,
      name: "Core",
      description: "Improves core musculature.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Plank",
          sets: 5,
          reps: 12,
          duration: [0, 1, 0],
        },
        {
          order: 2,
          name: "Rest",
          sets: 5,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 6,
      name: "Glutes",
      description: "Improves glute musculature.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Glute bridge",
          sets: 5,
          reps: 12,
          duration: [0, 1, 0],
        },
        {
          order: 2,
          name: "Rest",
          sets: 5,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 7,
      name: "Shoulder",
      description: "Improves shoulder musculature.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Pike push-up",
          sets: 5,
          reps: 12,
          duration: [0, 1, 0],
        },
        {
          order: 2,
          name: "Rest",
          sets: 5,
          duration: [0, 0, 30],
        },
      ],
    },
    {
      order: 8,
      name: "Foam Rolling",
      description: "Foam role all 7 groups of muscles.",
      total_duration: [0, 7, 30],
      exercise: [
        {
          order: 1,
          name: "Foam Roll",
          sets: 7,
          duration: [0, 1, 4],
          alternative: true,
        },
      ],
    },
  ],
});

// const DietModel = new Diet({
//     type: "breakfast",
//     meals: [{
//         name: "Whole Eggs",
//         amount: {
//             type: "pcs",
//             amount: 1
//         },
//         nutrition: {
//             carbohydrates: 0.5,
//             proteins: 6,
//             fats: 5,
//             micronutrients: [
//                 {
//                     vitamin: "A",
//                     amount: 3.3
//                 },
//                 {
//                     vitamin: "D",
//                     amount: 5
//                 },
//                 {
//                     vitamin: "B12",
//                     amount: 33.3
//                 },
//                 {
//                     trace_element: "Selenium",
//                     amount: 14.6
//                 }
//             ],
//             kcal:71.6
//         },
//         price: 5,
//         place_of_aquisition: "Profi"
// }]
// })

const UserModelBeginning = new User({
  name: "Baba Dan Constantin",
  age: 23,
  weight: 90,
  height: [1, 80],
  bf_percentage: 30,
  level_xp: {},
  training_progress: {
    calisthenics: {
      separatedCalisthenicsProgress: [
        {
          type: "chest",
          name: "Incline Push-up",
          rank: "F",
          experience_on_performing_daily: calculate_exp_based_on_daily("F", 0),
          experience_on_achieving: calculate_exp_based_on_achieving("F"),
        },
      ],
    },
  },
});

const calculate_exp_based_on_daily = (diff, max_reps, max_time, max_weight) => {
  switch (diff) {
    case "F":
      return (7 ^ 0)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "E":
      return (7 ^ 1)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "D":
      return (7 ^ 2)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "C":
      return (7 ^ 3)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "B":
      return (7 ^ 4)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "A":
      return (7 ^ 5)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "S":
      return (7 ^ 6)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "SS":
      return (7 ^ 7)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "SSS":
      return (7 ^ 8)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "Z":
      return (7 ^ 9)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
    case "Z*":
      return (7 ^ 10)*normalize_based_on_parameters(max_reps, max_time, max_weight, next_reps, next_time, next_weight);
  }
};


normalize_based_on_parameters = (max_reps, max_time, max_weight, next_reps, next_time, next_weight) => {
    // It should return a number between 1 and 3
    // max_reps && next_reps > 0 ? max_time && max_weight && next_time && next_weight = 0;
    // max_time && next_time > 0 ? max_reps && max_weight && next_reps && next_weight = 0;
    // max_weight && next_weight > 0 ? max_reps && max_time && next_reps && next_time = 0;
    // max_reps && next_reps >= 0 && max_reps && next_reps <= 30
    // max_weight && next_weight >= 0 && max_weight && next_weight <= 100;
    // max_time && next_time >= 0 && max_time && next_time <= 300(seconds)
    // max_reps === 1 => return 1;
    // max_weight === 5 => return 1;
    // max_time === 15 => return 1;
    // max_reps === next_time => return 3;
    // max_weight === next_weight => return 3;
    // max_time === next_time => return 3;
}

const calculate_exp_based_on_achieving = (diff) => {
  return 3 * calculate_exp_based_on_daily(diff);
};


module.exports = UserModelBeginning;

// module.exports = DietModel;
