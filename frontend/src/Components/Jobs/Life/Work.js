import "../../../Styles/Jobs/Life/Work.css";
import { return_Date, reverse_Date } from "../../../Logic/Date";
import { useEffect, useState } from "react";

const Work = ({
  type,
  object,
  isEditingTheOther,
  setNewObject,
  newObject,
  warning,
  isSavingEdit
}) => {

  const [dummyObject, setDummyObject] = useState(newObject);

  const handleChange = (e) => {
    setDummyObject({...dummyObject, [e.target.name]: e.target.value})
  };

  useEffect(()=>{
    if(newObject) {
      setDummyObject({...newObject, 
        start_date: return_Date(new Date(parseInt(newObject.start_date))),
         end_date: return_Date(new Date(parseInt(newObject.end_date)))})
    }
  }, [newObject])

  useEffect(()=>{
    if(isSavingEdit) {
      setNewObject([dummyObject,])
    }
  }, [isSavingEdit])

  return (
    <div
      className={"Work"}
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
          {type === "Editing" ? (
            <tr>
              <td>
                <input
                  value={dummyObject.type}
                  placeholder={"parent"}
                  name="type"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.start_date}
                  placeholder={"20/05/2023"}
                  name="start_date"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.end_date}
                  placeholder={"20/05/2023"}
                  name="end_date"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.payment_type}
                  placeholder={"hourly"}
                  name="payment_type"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.payment}
                  placeholder={"300"}
                  name="payment"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.payment_date}
                  placeholder={"10"}
                  name="payment_date"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.holidays}
                  placeholder={"21"}
                  name="holidays"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.tickets_per_mo}
                  placeholder={"20"}
                  name="tickets_per_mo"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  value={dummyObject.price_per_ticket}
                  placeholder={"30"}
                  name="price_per_ticket"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
          ) : (
            <tr>
              <td>{object.type ? object.type : "-"}</td>
              <td>{object.start_date ? return_Date(new Date(parseInt(object.start_date))) : "-"}</td>
              <td>{object.end_date ? return_Date(new Date(parseInt(object.end_date))) : "-"}</td>
              {object.benefits ? <>
                <td>{object.benefits.payment_type ? object.benefits.payment_type : "-"}</td>
                <td>{object.benefits.payment ? object.benefits.payment : "-"}</td>
                <td>{object.benefits.payment_date ? object.benefits.payment_date : "-"}</td>
                <td>{object.benefits.holidays ? object.benefits.holidays : "-"}</td>
                {object.benefits.meal_tickets ?
                 <>
                 <td>{object.benefits.meal_tickets.amount_of_tickets_per_month ? object.benefits.meal_tickets.amount_of_tickets_per_month : "-"}</td>
                 <td>{object.benefits.meal_tickets.price_of_tickets ? object.benefits.meal_tickets.price_of_tickets : "-"}</td>
                 </> 
                 : 
                 <>
                 <td>-</td>
                 <td>-</td>
                 </>}
              </> : 
              <>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              </>
              }
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Work;
