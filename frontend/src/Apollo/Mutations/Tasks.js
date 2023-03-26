import { gql } from "@apollo/client";

const addTask = gql`
    mutation (
        priority: Int!
        name: String!
        quantity: Int!
        price: Int!
        link: String!
        dateNeeded: String!
    ) {
        addTask (
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

export { addTask };
