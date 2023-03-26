import { gql } from "@apollo/client";

const getTasks = gql`
  query {
    getTasks {
      _id
      priority
      name
      quantity
      price
      link
      dateNeeded
    }
  }
`;

export { getTasks };
