import { gql } from "@apollo/client";

const addTask = gql`
  mutation (
    $priority: Int!
    $name: String!
    $quantity: Int!
    $price: Int!
    $link: String!
    $dateNeeded: String!
    $deliveryPrice: Int!
  ) {
    addTask(
      priority: $priority
      name: $name
      quantity: $quantity
      price: $price
      link: $link
      dateNeeded: $dateNeeded
      deliveryPrice: $deliveryPrice
    ) {
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

const editTask = gql`
  mutation (
    $_id: ID!
    $priority: Int
    $name: String
    $quantity: Int
    $price: Int
    $link: String
    $dateNeeded: String
    $deliveryPrice: Int
  ) {
    editTask(
      _id: $_id
      priority: $priority
      name: $name
      quantity: $quantity
      price: $price
      link: $link
      dateNeeded: $dateNeeded
      deliveryPrice: $deliveryPrice
    ) {
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

const deleteTask = gql`
  mutation ($_id: ID!) {
    deleteTask(_id: $_id) {
      _id
    }
  }
`;

export { addTask, editTask, deleteTask };
