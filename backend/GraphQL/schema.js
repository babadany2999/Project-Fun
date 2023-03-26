import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {},
});

const RootMutations = new GraphQLObjectType({
  name: "RootMutationsType",
  fields: {},
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutations,
});

export default schema;
