import { gql } from "@apollo/client";

const getCurrentAndNextJob = gql`
  query {
    getCurrentAndNextWork {
      _id
      type
      start_date
      end_date
      benefits {
        payment_type
        payment
        holidays
        payment_date
        meal_tickets {
          amount_of_tickets_per_month
          price_of_tickets
        }
      }
      current
      next
    }
  }
`;

export { getCurrentAndNextJob };
