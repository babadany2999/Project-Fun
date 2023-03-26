const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const TasksType = require("./Typings/TasksType");

const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

// Schemas
const Tasks = require("../Schemas/Tasks");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getTasks: {
      type: new GraphQLList(TasksType),
      args: {},
      async resolve(_, args) {
        const task = await Tasks.find();
        return task;
      },
    },
  },
});

const RootMutations = new GraphQLObjectType({
  name: "RootMutations",
  fields: {
    modifyTask: {
      type: TasksType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(_, args) {},
    },
    addTask: {
      type: TasksType,
      args: {
        priority: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        quantity: { type: new GraphQLNonNull(GraphQLInt) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        dateNeeded: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, args) {
        const splittedDate = args.dateNeeded.split("/");
        const task = new Tasks({
          priority: args.priority,
          name: args.name,
          quantity: args.quantity,
          price: args.price,
          link: args.link,
          dateNeeded: new Date(
            splittedDate[0],
            splittedDate[1],
            splittedDate[2]
          ),
        });
        return await task.save();
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutations,
});

module.exports = schema;
