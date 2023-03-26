import React, { useEffect, useState } from "react";
import "../Styles/Diet.css";
import Buttons from "./Buttons";

const Diet = () => {
  const [disabled, setDisabled] = useState(true);

  const [selectedIdx, setSelectedIdx] = useState(null);

  const [mealNumberString, setMealNumberString] = useState(null);

  const handleClick = (idx) => {
    if (selectedIdx === idx) {
      setSelectedIdx(null);
      setDisabled(true);
    } else {
      setSelectedIdx(idx);
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (selectedIdx !== null) {
      switch (selectedIdx) {
        case 0:
          setMealNumberString("menu_one");
          break;
        case 1:
          setMealNumberString("menu_two");
          break;
        case 2:
          setMealNumberString("menu_three");
          break;
        default:
          return;
      }
    }
  }, [selectedIdx]);

  return (
    <div className="DietWrapper MainPage">
      <div className="DietWrapperMealNumber">
        <div>
          <Buttons
            name={"Meal One"}
            rounded={true}
            onClick={() => handleClick(0)}
            selected={selectedIdx === 0}
          />
          <Buttons
            name={"Meal Two"}
            rounded={true}
            onClick={() => handleClick(1)}
            selected={selectedIdx === 1}
          />
        </div>
        <div>
          <Buttons
            name={"Meal Three"}
            rounded={true}
            onClick={() => handleClick(2)}
            selected={selectedIdx === 2}
          />
        </div>
      </div>
      <div className="DietWrapperType">
        <Buttons
          link={`diet/${mealNumberString}/breakfast`}
          name={"Breakfast"}
          disabled={disabled}
        />
        <Buttons
          link={`diet/${mealNumberString}/lunch`}
          name={"Lunch"}
          disabled={disabled}
        />
        <Buttons
          link={`diet/${mealNumberString}/dinner`}
          name={"Dinner"}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Diet;
