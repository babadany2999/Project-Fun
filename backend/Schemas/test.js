const Diet = require("./Diet.js");
const Training = require("./Training.js");


const TrainingModel = new Training({
    program_name: "theta",
    duration: 60,
    exercises: [
        {
            order: 1,
            name: "Warm-Up",
            description: "Light jogging, jumping jacks, or dynamic stretches to raise your heart rates and prepare your body for exercise.",
            total_duration: [0, 10, 0],
            exercise: [
                {
                    order: 1,
                    name: "Light jogging/Jumping jacks/Dynamic Stretches",
                    duration: {
                        time: [0, 10, 0]
                    }
                },
            ]
        },
        {
            order: 2,
            name: "HIIT",
            description: "This involves short bursts of high-intensity exercise followed by periods of rest.",
            total_duration: [0, 10, 0],
            exercise: [
                {
                    order: 1,
                    name: "Sprinting",
                    sets: 10,
                    duration: {
                        time: [0, 0, 30]
                    }
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 10,
                    duration: {
                        time: [0, 0, 30]
                    }
                }
            ]
        },
        {
            order: 3,
            name: "Plyometrics",
            description: "Plyometric exercises are explosive movements that can improve power and agility.",
            total_duration: [0, 9, 0],
            exercise: [
                {
                    order: 1,
                    name: "Jump Squats",
                    sets: 3,
                    reps: 12,
                    duration: {
                        time: [0, 1, 0]
                    }
                },
                {
                    order: 2,
                    name: "Alternating Lunges with a jump",
                    sets: 3,
                    reps: 12,
                    alternative: true,
                    duration: [0, 1, 0]
                },
                {
                    order: 3,
                    name: "Rest",
                    sets: 6,
                    duration: [0, 0, 30]
                }
            ]
        },
        {
            order: 4,
            name: "Jump Rope",
            description: "Jumping rope is an excellent way to improve footwork, agility, and cardiovascular endurance. It also helps with coordination and timing.",
            total_duration: [0, 21, 0],
            exercise: [
                {
                    order: 1,
                    name: "Single Unders",
                    sets: 6,
                    duration: {
                        time: [0, 3, 0]
                    }
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 6,
                    duration: {
                        time: [0, 0, 30]
                    }
                }
            ]
        },
        {
            order: 5,
            name: "Cool Down",
            description: "Light jogging or walking to bring your heart rate down gradually and prevent dizziness or lightheadeadness",
            total_duration: [0, 10, 0],
            exercise: [
                {
                    order: 1,
                    name: "Light jog/Walking",
                    duration: {
                        time: [0, 10, 0]
                    }
                }
            ]
        }
    ]
})

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
                    duration: [0, 1, 0]
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 5,
                    duration: [0, 0, 30]
                }
            ]
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
                    duration: [0, 1, 0]
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 5,
                    duration: [0, 0, 30]
                }
            ]
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
                    duration: [0,1,0]
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 5,
                    duration: [0, 0, 30]
                }
            ]
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
                    duration: [0,1,0]
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 5,
                    duration: [0, 0, 30]
                }
            ]
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
                    duration: [0, 1, 0]
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 5,
                    duration: [0, 0, 30]
                }
            ]
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
                    duration: [0, 1, 0]
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 5,
                    duration: [0, 0, 30]
                }
            ]
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
                    duration: [0, 1, 0]
                },
                {
                    order: 2,
                    name: "Rest",
                    sets: 5,
                    duration: [0, 0, 30]
                }
            ]
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
                    alternative: true
                }
            ]
        }
    ]
})

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

// module.exports = DietModel;