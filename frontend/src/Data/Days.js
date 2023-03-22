const SaturdayDay = {
    TimeDuration: {
        Sleep: 600,
        MartialArts: 240,
        MountainClimbing: 240,
        Meditation: 60,
        Eating: 45,
        MealPrep: 30,
        Hygene: 60,
        Learning: 60,
        ReflexesTraining: 60
    },
    TimeIntervals: {
        "00:00-08:00": {
            Activity: "Sleep",
            Duration: 480
        },
        "08:00:08:10": {
            Activity: "Hygene",
            Duration: 10,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Brush Teeth",
                    Duration: 5
                },
                {
                    Activity: "Wash Face + (Pee/Poo)",
                    Duration: 5
                }
            ]
        },
        "08:10-08:25": {
            Activity: "Eating",
            Duration: 15
        },
        "08:25-11:25": {
            Activity: "Martial Arts",
            Duration: 180,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Box",
                    Duration: 60
                },
                {
                    Activity: "BJJ",
                    Duration: 60
                },
                {
                    Activity: "Freestyle Wrestling",
                    Duration: 60
                }
            ]
        },
        "11:25-13:55": {
            Activiy: "Program Lambda",
            Duration: 150,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Mountain Climbing",
                    Duration: 150
                }
            ]
        },
        "13:55-14:55": {
            Activity: "Muay Thai",
            Duration: 60
        },
        "14:55-15:10": {
            Activity: "Eating",
            Duration: 15
        },
        "15:10-16:40": {
            Activity: "Program Lambda",
            Duration: 90,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Mountain Descending",
                    Duration: 90
                }
            ]
        },
        "16:40-17:40": {
            Activity: "Program Xi",
            Duration: 60
        },
        "17:40-18:00": {
            Activity: "Hygene",
            Duration: 20,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Brush Teeth",
                    Duration: 5
                },
                {
                    Activity: "Shower",
                    Duration: 15
                }
            ]
        },
        "18:00-19:00": {
            Activity: "Program Chi",
            Duration: 60
        },
        
    }
}


const NormalDay = {
    TimeDuration: {
        Work: 510,
        Travel: 120,
        Training: 210,
        Sleep: 480,
        Drawing: 30,
        Eating: 30,
        MealPrep: 30,
        Hygene: 30
    },
    TimeIntervals: {
        "00:00-06:00": {
            Activity: "Sleep",
            Duration: 360
        },
        "06:00-06:10": {
            Activity: "Hygene",
            Duration: 10,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Brush Teeth",
                    Duration: 5
                },
                {
                    Activity: "Wash Face + (Pee/Poo)",
                    Duration: 5
                }
            ]
        },
        "06:10-06-25": {
            Activity: "Eating",
            Duration: 15
        },
        "6:25-7:05": {
            Activity: "Travel",
            Duration: 40
        },
        "7:05-15:35": {
            Activity: "Work",
            Duration: 510
        },
        "15:35-16:15": {
            Activity: "Travel",
            Duration: 40
        },
        "16:15-16:30": {
            Activity: "Eating",
            Duration: 15
        },
        "16:30-16:50": {
            Activity: "Travel",
            Duration: 20
        },
        "16:50-20:20": {
            Activity: "Training",
            Duration: 210,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Program Theta",
                    duration: 30
                },
                {
                    Activity: "Program Zeta",
                    duration: 30
                },
                {
                    Activity: "Program Alpha",
                    duration: 30
                },
                {
                    Activity: "Program Theta",
                    duration: 30
                },
                {
                    Activity: "Program Zeta",
                    duration: 30
                },
                {
                    Activity: "Program Alpha",
                    duration: 30
                },
                {
                    Activity: "Program Omega",
                    duration: 30
                }
            ]
        },
        "20:20-20:40": {
            Activity: "Travel",
            Duration: 20
        },
        "20:40-21:10": {
            Activity: "Meal Prep",
            Duration: 30
        },
        "21:10-21:30": {
            Activity: "Hygene",
            Duration: 20,
            Subdivided: true,
            Subdivisions: [
                {
                    Activity: "Brush Teeth",
                    Duration: 5
                },
                {
                    Activity: "Shower",
                    Duration: 15
                }
            ]
        },
        "21:30-22:00": {
            Activity: "Drawing",
            Duration: 30
        },
        "22:00-24:00": {
            Activity: "Sleep",
            Duration: 30
        }
    }
}

console.log(NormalDay);


// export {NormalDay};