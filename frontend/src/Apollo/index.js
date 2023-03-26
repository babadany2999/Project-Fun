import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });

  

  export default client;