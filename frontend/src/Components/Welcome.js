import React from 'react';
import '../Styles/Welcome.css';
import Buttons from './Buttons';
import CountdownTimerWrapper from "./Wrappers_Global/CountdownTimer.js";

const Welcome = () => {
  return (
    <div className="WelcomeContainer MainPage">
      <CountdownTimerWrapper></CountdownTimerWrapper>
      

      <Buttons link={"diet"} name={"Diet"}></Buttons>
      <Buttons link={"training"} name={"Training"}></Buttons>
      <Buttons link={"life"} name={"Life"}></Buttons>
      <Buttons link={"calendar"} name={"Calendar"}></Buttons>


    </div>
  );
};

export default Welcome;
