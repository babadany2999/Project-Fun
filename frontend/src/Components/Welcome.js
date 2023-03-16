import React from 'react';
import '../Styles/Welcome.css';
import WelcomeLink from './WelcomeLink';

const Welcome = () => {
  return (
    <div className="WelcomeContainer">
      

      <WelcomeLink link={"diet"} name={"Diet"}></WelcomeLink>
      <WelcomeLink link={"training"} name={"Training"}></WelcomeLink>
      <WelcomeLink link={"life"} name={"Life"}></WelcomeLink>
      <WelcomeLink link={"calendar"} name={"Calendar"}></WelcomeLink>

    </div>
  );
};

export default Welcome;
