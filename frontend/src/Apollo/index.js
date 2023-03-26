import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "/graphql"
      : "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default client;
