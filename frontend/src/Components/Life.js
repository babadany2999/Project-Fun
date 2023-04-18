import React from "react";
import "../Styles/Life.css";
import ToBuyComponent from "./Jobs/Life/ToBuyComponent";
// import WorkComponent from "./Jobs/Life/WorkComponent";
import WorkComponent2 from "./Jobs/Life/WorkComponent2";

const Life = () => {
  return (
    <div className="LifeWrapper MainPage">
      <WorkComponent2 />
      <ToBuyComponent />
    </div>
  );
};

export default Life;
