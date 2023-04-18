const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const TasksType = require("./Typings/TasksType");
const {
  WorkType,
  WorkInputType,
  WorkWithoutIDInputType,
} = require("./Typings/WorkType");

const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");

// Schemas
const Tasks = require("../Schemas/Tasks");
const Work = require("../Schemas/Work");

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
    getCurrentAndNextWork: {
      type: new GraphQLList(WorkType),
      args: {},
      async resolve(_, args) {
        var currentWork = await Work.findOne({ current: true });
        var nextWork = await Work.findOne({ next: true });
        return [currentWork, nextWork];
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
        deliveryPrice: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(_, args) {
        const task = new Tasks({
          priority: args.priority,
          name: args.name,
          quantity: args.quantity,
          price: args.price,
          link: args.link,
          dateNeeded: args.dateNeeded,
          deliveryPrice: args.deliveryPrice,
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
        deliveryPrice: { type: GraphQLInt },
      },
      async resolve(_, args) {
        let opts = {};
        if (args.priority || args.priority === 0) opts.priority = args.priority;
        if (args.name) opts.name = args.name;
        if (args.quantity || args.quantity === 0) opts.quantity = args.quantity;
        if (args.price || args.price === 0) opts.price = args.price;
        if (args.link) opts.link = args.link;
        if (args.dateNeeded) {
          opts.dateNeeded = args.dateNeeded;
        }
        if (args.deliveryPrice || args.deliveryPrice === 0)
          opts.deliveryPrice = args.deliveryPrice;
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
              deliveryPrice: opts.deliveryPrice,
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
    editCurrentOrNextWork: {
      type: WorkType,
      args: WorkInputType.getFields(),
      async resolve(_, args) {
        const opts = {}
        if(args.type) opts.type = args.type;
        if(args.start_date) opts.start_date = args.start_date;
        if(args.end_date) opts.end_date = args.end_date;
        if(args.current) opts.current = args.current;
        if(args.next) opts.next = args.next;
        if(args.payment_type || args.payment || args.payment_date || args.holidays || args.amount_of_tickets_per_month || args.price_of_tickets) opts.benefits = {};
        if(args.payment_type) opts.benefits.payment_type = args.payment_type;
        if(args.payment) opts.benefits.payment = args.payment;
        if(args.holidays) opts.benefits.holidays = args.holidays;
        if(args.payment_date) opts.benefits.payment_date = args.payment_date;
        if(args.amount_of_tickets_per_month || args.price_of_tickets) opts.benefits.meal_tickets = {};
        if(args.amount_of_tickets_per_month) opts.benefits.meal_tickets.amount_of_tickets_per_month = args.amount_of_tickets_per_month;
        if(args.price_of_tickets) opts.benefits.meal_tickets.price_of_tickets = args.price_of_tickets;
        
        return await Work.findByIdAndUpdate(args._id, opts, {new: true});

      }
    },
    addCurrentOrNextWork: {
      type: WorkType,
      args: WorkWithoutIDInputType.getFields(),
      async resolve(_, args) {
        const work = await new Work({
          type: args.type,
          start_date: args.start_date,
          end_date: args.end_date,
          benefits: {
            payment_type: args.payment_type,
            payment: args.payment,
            holidays: args.holidays,
            payment_date: args.payment_date,
            meal_tickets: {
              amount_of_tickets_per_month: args.amount_of_tickets_per_month,
              price_of_tickets: args.price_of_tickets,
            },
          },
          current: args.current,
          next: args.next,
        }).save();
        return work;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutations,
});

module.exports = schema;
