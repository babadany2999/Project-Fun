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
    // Tasks mutations
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
            splittedDate[2],
            splittedDate[1] - 1,
            splittedDate[0]
          ),
        });
        return await task.save();
      },
    },
    editTask: {
      type: TasksType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        priority: { type: GraphQLInt },
        name: { type: GraphQLString },
        quantity: { type: GraphQLInt },
        price: { type: GraphQLInt },
        link: { type: GraphQLString },
        dateNeeded: { type: GraphQLString },
      },
      async resolve(_, args) {
        let opts = {};
        if (args.priority || args.priority === 0) opts.priority = args.priority;
        if (args.name) opts.name = args.name;
        if (args.quantity || args.quantity === 0) opts.quantity = args.quantity;
        if (args.price || args.price === 0) opts.price = args.price;
        if (args.link) opts.link = args.link;
        if (args.dateNeeded) {
          const splittedDate = args.dateNeeded.split("/");
          opts.dateNeeded = new Date(
            splittedDate[2],
            splittedDate[1] - 1,
            splittedDate[0]
          );
        }
        return await Tasks.findOneAndUpdate(
          { _id: args._id },
          {
            $set: {
              priority: opts.priority,
              name: opts.name,
              quantity: opts.quantity,
              price: opts.price,
              link: opts.link,
              dateNeeded: opts.dateNeeded,
            },
          }
        );
      },
    },
    deleteTask: {
      type: TasksType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(_, args) {
        return await Tasks.findOneAndDelete({ _id: args._id });
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutations,
});

module.exports = schema;
