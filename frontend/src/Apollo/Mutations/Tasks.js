import { gql } from "@apollo/client";

const addTask = gql`
  mutation (
    $priority: Int!
    $name: String!
    $quantity: Int!
    $price: Int!
    $link: String!
    $dateNeeded: String!
  ) {
    addTask(
      priority: $priority
      name: $name
      quantity: $quantity
      price: $price
      link: $link
      dateNeeded: $dateNeeded
    ) {
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

const editTask = gql`
  mutation (
    $_id: ID!
    $priority: Int
    $name: String
    $quantity: Int
    $price: Int
    $link: String
    $dateNeeded: String
  ) {
    editTask(
      _id: $_id
      priority: $priority
      name: $name
      quantity: $quantity
      price: $price
      link: $link
      dateNeeded: $dateNeeded
    ) {
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

const deleteTask = gql`
  mutation ($_id: ID!) {
    deleteTask(_id: $_id) {
      _id
    }
  }
`;

export { addTask, editTask, deleteTask };
