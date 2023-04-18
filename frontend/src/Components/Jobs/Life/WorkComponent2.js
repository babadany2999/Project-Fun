import { useEffect, useState } from "react";
import "../../../Styles/Jobs/Life/WorkComponent.css";
import Work2 from "./Work2";
import { getCurrentAndNextJob } from "../../../Apollo/Queries/Work";
import { useQuery } from "@apollo/client";
import checkRegexWork from "../../../Logic/Work";
import { useMutation } from "@apollo/client";
import {
  addCurrentOrNextWork,
  editCurrentOrNextWork,
} from "../../../Apollo/Mutations/Work";
import { reverse_Date } from "../../../Logic/Date";
import client from "../../../Apollo";

const WorkComponent2 = () => {
  const { error, loading, data } = useQuery(getCurrentAndNextJob, {});
  const getCurrentAndNextWork = data?.getCurrentAndNextWork;

  const [currentObj, setCurrentObj] = useState();
  const [nextObj, setNextObj] = useState();

  const [valueCurrentObj, setValueCurrentObj] = useState();
  const [valueNextObj, setValueNextObj] = useState();

  const [isEditingCurrent, setIsEditingCurrent] = useState(false);
  const [isEditingNext, setIsEditingNext] = useState(false);

  const [warning, setWarning] = useState("");

  // Buttons
  const handleSaveEdit = () => {};
  const handleExitEdit = () => {
    if (isEditingCurrent) setIsEditingCurrent(false);
    if (isEditingNext) setIsEditingNext(false);
  };

  const handleEditCurrent = () => {
    if (!isEditingNext) {
      setIsEditingCurrent(true);
    }
  };
  const handleEditNext = () => {
    if (!isEditingCurrent) {
      setIsEditingNext(true);
    }
  };

  useEffect(() => {
    if (getCurrentAndNextWork) {
      const return_based_on_index = (i) => {
        // i = 0 if current or i = 1 if next
        var {
          type,
          start_date,
          end_date,
          benefits: {
            payment_type,
            payment,
            payment_date,
            holidays,
            meal_tickets: { amount_of_tickets_per_month, price_of_tickets },
          },
        } = getCurrentAndNextWork[i];
        return {
          type,
          start_date,
          end_date,
          payment_type,
          payment,
          payment_date,
          holidays,
          amount_of_tickets_per_month,
          price_of_tickets,
        };
      };
      var new_obj = return_based_on_index(0);
      setCurrentObj(new_obj);
      setValueCurrentObj(new_obj);
      var new_obj = return_based_on_index(1);
      setNextObj(new_obj);
      setValueNextObj(new_obj);
    }
  }, [getCurrentAndNextWork]);

  return (
    <div className="WorkComponent">
      <Work2
        type={"Current"}
        object={currentObj ? currentObj : undefined}
        isEditingTheOther={isEditingNext}
      />
      <Work2
        type={"Next"}
        object={nextObj ? nextObj : undefined}
        isEditingTheOther={isEditingCurrent}
      />

      {isEditingCurrent || isEditingNext ? (
        <Work2
          warning={warning}
          type={"Editing"}
          object={isEditingCurrent ? valueCurrentObj : valueNextObj}
          setValue={isEditingCurrent ? setValueCurrentObj : setValueNextObj}
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

export default WorkComponent2;
