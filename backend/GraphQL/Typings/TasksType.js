const graphql = require("graphql");
const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

const TasksType = new GraphQLObjectType({
  name: "TasksType",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    priority: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    quantity: { type: new GraphQLNonNull(GraphQLInt) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    link: {
      type: new GraphQLNonNull(GraphQLString),
    },
    dateNeeded: { type: new GraphQLNonNull(GraphQLString) },
    deliveryPrice: {type: new GraphQLNonNull(GraphQLInt)}
  }),
});


module.exports = TasksType;