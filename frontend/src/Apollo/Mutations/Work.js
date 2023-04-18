import { gql } from "@apollo/client";


const addCurrentOrNextWork = gql`
    mutation(
            $type: String!
            $start_date: String
            $end_date: String
            $current: Boolean!
            $next: Boolean!
            $payment_type: String!
            $payment: Int!
            $holidays: Int!
            $payment_date: Int!
            $amount_of_tickets_per_month: Int!
            $price_of_tickets: Int!
            ) {
                addCurrentOrNextWork(
                    type: $type
                    start_date: $start_date
                    end_date: $end_date
                    current: $current
                    next: $next
                    payment_type: $payment_type
                    payment: $payment
                    holidays: $holidays
                    payment_date: $payment_date
                    amount_of_tickets_per_month: $amount_of_tickets_per_month
                    price_of_tickets: $price_of_tickets
                ) {
                    _id
                    type
                    start_date
                    end_date
                    current
                    next
                    benefits {
                        payment_type
                        payment
                        payment_date
                        holidays
                        meal_tickets {
                            amount_of_tickets_per_month
                            price_of_tickets
                        }
                    }
               }
            }
`

const editCurrentOrNextWork = gql`
    mutation(
        $_id: ID!
        $type: String!
        $start_date: String
        $end_date: String
        $current: Boolean!
        $next: Boolean!
        $payment_type: String!
        $payment: Int!
        $holidays: Int!
        $payment_date: Int!
        $amount_of_tickets_per_month: Int!
        $price_of_tickets: Int!
        )  {
            editCurrentOrNextWork
            (
                _id: $_id
                type: $type
                start_date: $start_date
                end_date: $end_date
                current: $current
                next: $next
                payment_type: $payment_type
                payment: $payment
                holidays: $holidays
                payment_date: $payment_date
                amount_of_tickets_per_month: $amount_of_tickets_per_month
                price_of_tickets: $price_of_tickets
            ) {
                _id
                    type
                    start_date
                    end_date
                    current
                    next
                    benefits {
                        payment_type
                        payment
                        payment_date
                        holidays
                        meal_tickets {
                            amount_of_tickets_per_month
                            price_of_tickets
                        }
                    }
            }   
        }
`


export {addCurrentOrNextWork, editCurrentOrNextWork};