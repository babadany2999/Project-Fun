const Diet = require("./Diet.js");


const DietModel = new Diet({
    type: "breakfast",
    meals: [{
        name: "Whole Eggs",
        amount: {
            type: "pcs",
            amount: 1
        },
        nutrition: {
            carbohydrates: 0.5,
            proteins: 6, 
            fats: 5,
            micronutrients: [
                {
                    vitamin: "A",
                    amount: 3.3
                },
                {
                    vitamin: "D",
                    amount: 5
                },
                {
                    vitamin: "B12",
                    amount: 33.3
                },
                {
                    trace_element: "Selenium",
                    amount: 14.6
                }
            ],
            kcal:71.6
        },
        price: 5,
        place_of_aquisition: "Profi"
}]
})

module.exports = DietModel;