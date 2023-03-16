import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Welcome.css';

const Welcome = () => {
  return (
    <div className="WelcomeContainer">
      <div className="WelcomeButtonContainer">
        <Link to="/diet" className="WelcomeLink DietLink">
          <div className="WelcomeLinkInner">
            <span className="WelcomeLinkText">Diet</span>
          </div>
        </Link>
        <Link to="/training" className="WelcomeLink TrainingLink">
          <div className="WelcomeLinkInner">
            <span className="WelcomeLinkText">Training</span>
          </div>
        </Link>
        <Link to="/life" className="WelcomeLink LifeLink">
          <div className="WelcomeLinkInner">
            <span className="WelcomeLinkText">Life</span>
          </div>
        </Link>
        <Link to="/calendar" className="WelcomeLink CalendarLink">
          <div className="WelcomeLinkInner">
            <span className="WelcomeLinkText">Calendar</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
