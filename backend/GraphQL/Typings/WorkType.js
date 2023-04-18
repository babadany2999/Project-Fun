const graphql = require("graphql");

const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInputObjectType,
} = require("graphql");

const WorkTypeEnum = {
  parents: "parents",
  three_shifts: "three_shifts",
  "12_with_24_48": "12_with_24_48",
  one_shift: "one_shift",
  two_shifts: "two_shifts",
};

const PaymentTypeEnum = {
  hourly: "hourly",
  daily: "daily",
  weekly: "weekly",
  biweekly: "biweekly",
  monthly: "monthly",
};

const meal_tickets_obj = {
  amount_of_tickets_per_month: {
    type: new GraphQLNonNull(GraphQLInt),
  },
  price_of_tickets: {
    type: new GraphQLNonNull(GraphQLInt),
  },
};

const MealTicketsType = new GraphQLObjectType({
  name: "MealTicketsType",
  fields: () => ({ ...meal_tickets_obj }),
});

const benefits_obj = {
  payment_type: {
    type: new GraphQLNonNull(GraphQLString),
    validate(value) {
      if (!Object.values(PaymentTypeEnum).includes(value)) {
        throw new Error(`Invalid payment type: ${value}`);
      }
    },
  },
  payment: {
    type: new GraphQLNonNull(GraphQLInt),
  },
  holidays: {
    type: new GraphQLNonNull(GraphQLInt),
  },
  meal_tickets: {
    type: new GraphQLNonNull(MealTicketsType),
  },
  payment_date: {
    type: new GraphQLNonNull(GraphQLInt),
  },
};
const BenefitsType = new GraphQLObjectType({
  name: "BenefitsType",
  fields: () => ({ ...benefits_obj }),
});

const work_type_obj = {
  _id: { type: new GraphQLNonNull(GraphQLID) },
  type: {
    type: new GraphQLNonNull(GraphQLString),
    validate(value) {
      if (!Object.values(WorkTypeEnum).includes(value)) {
        throw new Error(`Invalid work type: ${value}`);
      }
    },
  },
  start_date: {
    type: GraphQLString,
  },
  end_date: {
    type: GraphQLString,
  },
  benefits: {
    type: new GraphQLNonNull(BenefitsType),
  },
  current: {
    type: new GraphQLNonNull(GraphQLBoolean),
  },
  next: {
    type: new GraphQLNonNull(GraphQLBoolean),
  },
};

const WorkType = new GraphQLObjectType({
  name: "WorkType",
  fields: () => ({ ...work_type_obj }),
});

const { _id, benefits, ...otherWorkFields } = { ...work_type_obj };
const { meal_tickets, ...otherBenefitsFields } = { ...benefits_obj };

const WorkWithoutIDInputType = new GraphQLInputObjectType({
  name: "WorkWithoutIDInputType",
  fields: () => ({
    ...otherWorkFields,
    ...otherBenefitsFields,
    ...meal_tickets_obj,
  }),
});

const WorkInputType = new GraphQLInputObjectType({
  name: "WorkInputType",
  fields: () => ({
    _id,
    ...otherWorkFields,
    ...otherBenefitsFields,
    ...meal_tickets_obj,
  }),
});

module.exports.WorkType = WorkType;
module.exports.WorkInputType = WorkInputType;
module.exports.WorkWithoutIDInputType = WorkWithoutIDInputType;
