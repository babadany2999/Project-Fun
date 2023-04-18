const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  image_src: {
    type: String,
    required: false,
  },
  special_day: {
    type: String,
    enum: ["dday", "startday"],
    required: false,
  },
});

module.exports = mongoose.model("Calendar", CalendarSchema);
