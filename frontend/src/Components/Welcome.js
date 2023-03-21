import React from 'react';
import '../Styles/Welcome.css';
import Buttons from './Buttons';
import TestButtons from './TestButtons';

const Welcome = () => {
  return (
    <div className="WelcomeContainer MainPage">
      

      <Buttons link={"diet"} name={"Diet"}></Buttons>
      <Buttons link={"training"} name={"Training"}></Buttons>
      <Buttons link={"life"} name={"Life"}></Buttons>
      <Buttons link={"calendar"} name={"Calendar"}></Buttons>
      
      {/* <TestButtons link={"diet"} name={"Diet"}></TestButtons>
      <TestButtons link={"training"} name={"Training"}></TestButtons>
      <TestButtons link={"life"} name={"Life"}></TestButtons>
      <TestButtons link={"calendar"} name={"Calendar"}></TestButtons> */}

    </div>
  );
};

export default Welcome;
