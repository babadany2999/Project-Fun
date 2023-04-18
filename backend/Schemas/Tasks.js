const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  priority: {
    type: Number,
    enum: [0, 1, 2],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  dateNeeded: {
    type: Date,
    required: true,
  },
  deliveryPrice: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Tasks", TasksSchema);
