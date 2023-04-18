import "../../../Styles/Jobs/Life/Work.css";
import { return_Date, reverse_Date } from "../../../Logic/Date";
import { useEffect, useState } from "react";

const Work2 = ({ type, object, isEditingTheOther, warning, setValue }) => {
  /// TODO: Make sure thrre's no more warning.

  const handleChange = (e) => {
    const new_obj = { object, [e.target.name]: e.target.value };
    setValue(new_obj);
  };

  const object_keys = [
    "type",
    "start_date",
    "end_date",
    "payment_type",
    "payment",
    "payment_date",
    "holidays",
    "amount_of_tickets_per_month",
    "price_of_tickets",
  ];

  const return_data_jsx = () => {
    const return_mapper_over_td_input = () => {
      const arr = [];
      for (let i = 0; i < 9; i++) {
        arr.push(
          <td key={i}>
            {object ? (
              <input
                value={object[object_keys[i]]}
                name={object_keys[i]}
                onChange={handleChange}
              ></input>
            ) : (
              <input></input>
            )}
          </td>
        );
      }

      return arr;
    };

    const return_mapper_over_td_value = () => {
      const arr = [];
      for (let i = 0; i < 9; i++) {
        arr.push(<td key={i}>{object ? object[object_keys[i]] : "-"}</td>);
      }
      return arr;
    };

    if (type === "Editing") {
      return <tr>{return_mapper_over_td_input()}</tr>;
    } else {
      return <tr>{return_mapper_over_td_value()}</tr>;
    }
  };

  return (
    <div
      className="Work"
      style={{ display: isEditingTheOther ? "none" : "flex" }}
    >
      <div className="WorkTitle">
        {type === "Editing" ? "Editing" : type + " Workplace"}
      </div>
      <table
        className={warning ? "WorkTableWarning" : ""}
        data-custom-content={warning ? warning : ""}
      >
        <tbody>
          <tr>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Payment Type</th>
            <th>Payment</th>
            <th>Payment Date</th>
            <th>Holidays</th>
            <th>Tickets/Mo</th>
            <th>Lei/Ticket</th>
          </tr>
          {return_data_jsx()}
        </tbody>
      </table>
    </div>
  );
};

export default Work2;
