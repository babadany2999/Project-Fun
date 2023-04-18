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
      deliveryPrice
    }
  }
`;

export { getTasks };
