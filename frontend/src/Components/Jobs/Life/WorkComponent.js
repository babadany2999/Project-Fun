import { useEffect, useState } from "react";
import "../../../Styles/Jobs/Life/WorkComponent.css";
import Work from "./Work";
import { getCurrentAndNextJob } from "../../../Apollo/Queries/Work";
import { useQuery } from "@apollo/client";
import checkRegexWork from "../../../Logic/Work";
import { useMutation } from "@apollo/client";
import { addCurrentOrNextWork, editCurrentOrNextWork} from "../../../Apollo/Mutations/Work";
import { reverse_Date } from "../../../Logic/Date";
import client from "../../../Apollo";

const WorkComponent = () => {

  const { error, loading, data } = useQuery(getCurrentAndNextJob, {});

  const [addCurrentOrNextWorkMutation, {dataCurrentNext, loadingCurrentNext, errorCurrentNext}] = useMutation(addCurrentOrNextWork)
  const [editCurrentOrNextWorkMutation, {dataEditCurrentNext, loadingEditCurrentNext, errorEditCurrentNext}] = useMutation(editCurrentOrNextWork);


  const [isEditingCurrent, setIsEditingCurrent] = useState(false);
  const [isEditingNext, setIsEditingNext] = useState(false);

  const [warning, setWarning] = useState("");

  const [isSavingEdit, setIsSavingEdit] = useState(false);

  const [newObject, setNewObject] = useState([
    { type: "" },
    { start_date: "" },
    { end_date: "" },
    { payment_type: "" },
    { payment: "" },
    { payment_date: "" },
    { holidays: "" },
    { tickets_per_mo: "" },
    { price_per_ticket: "" },
  ]);

  const handleEditCurrent = () => {
    if (!isEditingNext) {
      if(data && data.getCurrentAndNextWork && data.getCurrentAndNextWork[0] !== null){
        const {type, start_date, end_date, benefits: {payment_type, payment, payment_date, holidays, meal_tickets: {amount_of_tickets_per_month, price_of_tickets}}} = data.getCurrentAndNextWork[0];
        // console.log(type, start_date, end_date, payment_date, payment_type, payment, holidays, amount_of_tickets_per_month, price_of_tickets)
        setNewObject([
          {type, start_date, end_date, payment_type, payment, payment_date, holidays, tickets_per_mo: amount_of_tickets_per_month, price_per_ticket: price_of_tickets}
        ])
      }
      setIsEditingCurrent(true);
    }
  };
  const handleEditNext = () => {
    if (!isEditingCurrent) {
      if(data && data.getCurrentAndNextWork && data.getCurrentAndNextWork[1] !== null){
        const {type, start_date, end_date, benefits: {payment_type, payment, payment_date, holidays, meal_tickets: {amount_of_tickets_per_month, price_of_tickets}}} = data.getCurrentAndNextWork[0];
        // console.log(type, start_date, end_date, payment_date, payment_type, payment, holidays, amount_of_tickets_per_month, price_of_tickets)
        setNewObject([
          {type, start_date, end_date, payment_type, payment, payment_date, holidays, tickets_per_mo: amount_of_tickets_per_month, price_per_ticket: price_of_tickets}
        ])
      }
      setIsEditingNext(true);
    }
  };

  const handleSaveEdit = () => {
    setIsSavingEdit(true);
  };
  const handleExitEdit = () => {
    if (isEditingCurrent) setIsEditingCurrent(false);
    else if (isEditingNext) setIsEditingNext(false);
    setNewObject([
      { type: "" },
      { start_date: "" },
      { end_date: "" },
      { payment_type: "" },
      { payment: "" },
      { payment_date: "" },
      { holidays: "" },
      { tickets_per_mo: "" },
      { price_per_ticket: "" },
    ]);
  };

  useEffect(()=>{
    if(isSavingEdit) {
      var obj = {
        type: "",
        start_date: "",
        end_date: "",
        payment_type: "",
        payment: "",
        payment_date: "",
        holidays: "",
        tickets_per_mo: "",
        price_per_ticket: "",
      };
      newObject.forEach((object) => {
        const object_key = Object.keys(object)[0];
        const object_val = Object.values(object)[0];
        obj[object_key] = object_val;
      });

  
      const regexResult = checkRegexWork(
        obj.type,
        obj.start_date,
        obj.end_date,
        obj.payment_type,
        obj.payment,
        obj.payment_date,
        obj.holidays,
        obj.tickets_per_mo,
        obj.price_per_ticket
      );
  
      if (regexResult === true && data) {
        if((data.getCurrentAndNextWork[0] === null && isEditingCurrent) || (data.getCurrentAndNextWork[1] === null && isEditingNext)){
          addCurrentOrNextWorkMutation({
            variables: {
              type: obj.type,
              start_date: reverse_Date(obj.start_date),
              end_date: reverse_Date(obj.end_date),
              current: isEditingCurrent,
              next: isEditingNext,
              payment_type: obj.payment_type,
              payment: parseInt(obj.payment),
              holidays: parseInt(obj.holidays),
              payment_date: parseInt(obj.payment_date),
              amount_of_tickets_per_month: parseInt(obj.tickets_per_mo),
              price_of_tickets: parseInt(obj.price_per_ticket)
            }
          }).then(res => {
            client.refetchQueries({
              include: [getCurrentAndNextJob]
            }).then(() => {
              setWarning(`Successfully edited ${isEditingCurrent ? "Current" : "Next"} Work.`)
              setTimeout(()=>{
                setWarning("")
                isEditingCurrent ? setIsEditingCurrent(false) : setIsEditingNext(false);
                setIsSavingEdit(false);
              }, 3000)
            })
          }).catch(err => {
  
          })
        }else {
          editCurrentOrNextWorkMutation({
            variables: {
              _id: data.getCurrentAndNextWork[isEditingCurrent ? 0 : 1]._id,
              type: obj.type,
              start_date: reverse_Date(obj.start_date),
              end_date: reverse_Date(obj.end_date),
              current: isEditingCurrent,
              next: isEditingNext,
              payment_type: obj.payment_type,
              payment: parseInt(obj.payment),
              holidays: parseInt(obj.holidays),
              payment_date: parseInt(obj.payment_date),
              amount_of_tickets_per_month: parseInt(obj.tickets_per_mo),
              price_of_tickets: parseInt(obj.price_per_ticket)
            }
          }).then(res => {
            client.refetchQueries({
              include: [getCurrentAndNextJob]
            }).then(() => {
              setWarning(`Successfully edited ${isEditingCurrent ? "Current" : "Next"} Work.`)
              setTimeout(()=>{
                setWarning("")
                isEditingCurrent ? setIsEditingCurrent(false) : setIsEditingNext(false);
                setIsSavingEdit(false);
              }, 3000)
            }).catch((err) => {
  
            })
          })
        }
        
      } 
      else if(!data) {
        setWarning("An error has occured. Please refresh the page.")
        setTimeout(() => {
          setWarning("");
        }, 3000)
      }
      else {
        setWarning(regexResult[1]);
        setTimeout(() => {
          setWarning("");
        }, 3000);
      }
    }
  }, [isSavingEdit])

  return (
    <div className="WorkComponent">
      <Work
        type={"Current"}
        object={
          data && data.getCurrentAndNextWork[0]
            ? data.getCurrentAndNextWork[0]
            : ""
        }
        isEditingTheOther={isEditingNext}
      />
      <Work
        type={"Next"}
        object={
          data && data.getCurrentAndNextWork[1]
            ? data.getCurrentAndNextWork[1]
            : ""
        }
        isEditingTheOther={isEditingCurrent}
      />
      {isEditingCurrent || isEditingNext ? (
        <Work
          warning={warning}
          type={"Editing"}
          object={
            data
              ? isEditingCurrent && data.getCurrentAndNextWork[0]
                ? data.getCurrentAndNextWork[0]
                : isEditingNext && data.getCurrentAndNextWork[1]
                ? data.getCurrentAndNextWork[1]
                : ""
              : ""
          }
          newObject={newObject[0]}
          setNewObject={setNewObject}
          isSavingEdit={isSavingEdit}
        />
      ) : (
        ""
      )}
      <div className="WorkComponentBtns">
        {isEditingCurrent || isEditingNext ? (
          <>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleExitEdit}>Exit</button>
          </>
        ) : (
          <>
            <button onClick={handleEditCurrent}>Edit Current</button>
            <button onClick={handleEditNext}>Edit Next</button>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkComponent;
