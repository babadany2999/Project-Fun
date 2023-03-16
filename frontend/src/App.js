import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Diet from './Components/Diet';
import Life from "./Components/Life";
import Training from './Components/Life';
import Calendar from './Components/Calendar';
import NavButtonWrapper from './Components/NavButtonWrapper';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route exact path ="/diet" element={NavButtonWrapper(Diet)} />
        <Route exact path ="/training" element={NavButtonWrapper(Training)} />
        <Route exact path ="/life" element={NavButtonWrapper(Life)} />
        <Route exact path ="/calendar" element={NavButtonWrapper(Calendar)} />
      </Routes>
    </Router>
  );
}

export default App;
