const mongoose = require("mongoose");
const FoodType = require("./Food.js");


const DietSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["breakfast", "lunch", "dinner"],
        required: true,
    },
    meals: {
        type: [FoodType],
        required: true
    }
})


module.exports = mongoose.model("Diet", DietSchema);