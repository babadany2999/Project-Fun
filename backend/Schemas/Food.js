
const AmountType = {
    _id: false,
    type: {
        type: String,
        required: true,
        enum: ["tbsp","g", "pcs"]
    },
    amount: {
        type: Number,
        required: true
    }
}

const MicronutrientsType = {
    _id: false,
    mineral: {
        type: String,
        enum: ["Calcium", "Sulfur", "Phosphorus", "Magnesium", "Sodium", "Potassium", "Iron", "Zinc"]
    },
    trace_element: {
        type: String,
        enum: ["Boron", "Copper", "Selenium", "Manganese", "Molybdenum", "Cobalt", "Fluorine", "Iodine"]
    },
    vitamin: {
        type: String,
        enum: ["B1", "B2", "B3", "B5", "B6", "B7", "B9", "B12", "Choline", "A", "C", "D", "E", "K1", "K2", "K3"]
    },
    omega_3: {
        type: String,
        enum: ["Omega_3"],
        description: "It is on it's own because of convinience. In reality it is a macronutrient."
    },
    amount: {
        type: Number,
        description: "The number is in %. It can exceed 100, since it represents the RDI.",
        required: true
    }
}

const NutritionType = {
    _id: false,
    carbohydrates: {
        type: Number,
        required: true,
        min: 0
    },
    proteins: {
        type: Number,
        required: true,
        min: 0
    },
    fats: {
        type: Number,
        required: true,
        min: 0
    },
    micronutrients: {
        type: [MicronutrientsType],
        required: true
    },
    kcal:{
        type: Number,
        required: true,
        min: 0,
        max: 2000
    }
}



const FoodType = {
    _id: false,
    name: {
        type: String, 
        required: true
    },
    amount: {
            _id: false,
                type: {
                    type: String,
                    required: true,
                    enum: ["tbsp","g", "pcs"]
                },
                amount: {
                    type: Number,
                    required: true
                }
            
    },
    nutrition: {
        type: NutritionType,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        description: "Price is in LEI.",
        min: 0
    },
    place_of_aquisition: {
        type: String,
        enum: ["Profi", "Carrefour", "Lidl", "Mega-Image"],
        required: true,
        description: "Where I can buy this item."
    }

}

module.exports = FoodType;