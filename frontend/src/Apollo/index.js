import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import {onError} from '@apollo/client/link/error';


const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === "production" ? "/graphql" : "http://localhost:5000/graphql"
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
