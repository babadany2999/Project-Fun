import React from 'react';
import '../Styles/Welcome.css';
import Buttons from './Buttons';
import CountdownTimerWrapper from "./Misc/CountdownTimer.js";
import Icon from './Misc/Icon';
import ProjectTitle from './Misc/ProjectTitle';

const Welcome = () => {
  return (
    <div className="WelcomeContainer MainPage">
      <CountdownTimerWrapper></CountdownTimerWrapper>
      <Icon></Icon>
      <ProjectTitle></ProjectTitle>
      

      <Buttons link={"diet"} name={"Diet"}></Buttons>
      <Buttons link={"training"} name={"Training"}></Buttons>
      <Buttons link={"life"} name={"Life"}></Buttons>
      <Buttons link={"calendar"} name={"Calendar"}></Buttons>


    </div>
  );
};

export default Welcome;
