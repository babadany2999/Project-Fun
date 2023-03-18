import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Diet from './Components/Diet';
import Life from "./Components/Life";
import Training from './Components/Life';
import Calendar from './Components/Calendar';

// Jobs
import DietSelected from './Components/Jobs/Diet';

// Wrappers
import NavButtonWrapper from './Components/Wrappers_Global/NavButtonWrapper';
import Four0Four from './Components/404';

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        {/* Diet routing */}
        <Route exact path ="/diet" element={NavButtonWrapper(Diet)} />
        <Route exact path="/diet/:number/:type" element={NavButtonWrapper(DietSelected)}/>
        {/*******/}
        <Route exact path ="/training" element={NavButtonWrapper(Training)} />
        <Route exact path ="/life" element={NavButtonWrapper(Life)} />
        <Route exact path ="/calendar" element={NavButtonWrapper(Calendar)} />
        <Route exact path ="/404" element={NavButtonWrapper(Four0Four)}/>
      </Routes>
  );
}

export default App;
