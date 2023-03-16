import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Diet from './Components/Diet';
import Life from "./Components/Life";
import Training from './Components/Life';
import Calendar from './Components/Calendar';
import HomeButton from './Components/HomeButton';

function App() {
  return (
    <Router>
              <HomeButton/>
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route exact path ="/diet" element={<Diet/>} />
        <Route exact path ="/training" element={<Training/>} />
        <Route exact path ="/life" element={<Life/>} />
        <Route exact path ="/calendar" element={<Calendar/>} />
      </Routes>
    </Router>
  );
}

export default App;
