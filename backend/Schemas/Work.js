const mongoose = require("mongoose");

const MealTicketsType = {
  _id: false,
  amount_of_tickets_per_month: {
    type: Number,
    required: true,
    min: 0,
    max: 31,
    default: 0,
    description:
      "Get the number of tickets per month. If 0 that means no tickets.",
  },
  price_of_tickets: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0,
    description: "Get the value of 1 meal ticket. The price is in Lei.",
  },
};

const BenefitsType = {
  _id: false,
  payment_type: {
    type: String,
    enum: ["hourly", "daily", "weekly", "biweekly", "monthly",],
    required: true,
  },
  payment: {
    type: Number,
    min: 0,
    max: 999999,
    description: "Payment is in Lei. It is given based on payment_type.",
    required: true,
  },
  holidays: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 31,
    description:
      "The amount of holiday days per year. If none, then it will be 0.",
  },
  meal_tickets: {
    type: MealTicketsType,
    required: true,
  },
  payment_date: {
    type: Number,
    required: true,
    min: 0,
    max: 31,
    default: 0,
    description:
      "If payment_type is hourly or daily -> The value will be 1." +
      "If payment_type is weekly -> The value can range from 1 to 7(based on day of the week)" +
      "If payment_type is biweekly -> The value can range from 1 to 14(based on day of the week + week 1 or 2)" +
      "If payment_type is monthly -> The value can range from 1 to 31(based on day of the month)" +
      "If the value is 0 then it is unknown.",
  },
};

const WorkSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      "parents",
      "three_shifts",
      "12_with_24_48",
      "one_shift",
      "two_shifts",
    ],
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
    default: new Date()
  },
  end_date: {
    type: Date,
    required: false,
  },
  benefits: {
    type: BenefitsType,
    required: true,
  },
  current: {
    type: Boolean,
    default: false,
    required: true,
  },
  next: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = mongoose.model("Work", WorkSchema);
