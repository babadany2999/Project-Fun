import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Diet from "./Components/Diet";
import Life from "./Components/Life";
import Training from "./Components/Training";
import Calendar from "./Components/Calendar";
import Inventory from "./Components/Inventory";
import Charts from "./Components/Charts";

// Jobs
import DietSelected from "./Components/Jobs/Diet";

// Wrappers
import NavButtonWrapper from "./Components/Wrappers_Global/NavButtonWrapper";
import Four0Four from "./Components/404";
import TrainingSelected from "./Components/Jobs/Training";
import CalendarSelected from "./Components/Jobs/Calendar";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      {/* Diet routing */}
      <Route exact path="/diet" element={NavButtonWrapper(Diet)} />
      <Route
        exact
        path="/diet/:number/:type"
        element={NavButtonWrapper(DietSelected)}
      />
      {/*******/}
      {/* Training routing */}
      <Route exact path="/training" element={NavButtonWrapper(Training)} />
      <Route
        exact
        path="/training/:type"
        element={NavButtonWrapper(TrainingSelected)}
      />
      {/*******/}
      <Route exact path="/life" element={NavButtonWrapper(Life)} />
      {/* Calendar routing */}
      <Route exact path="/calendar/" element={NavButtonWrapper(Calendar)} />
      <Route
        exact
        path="/calendar/:type/:day/:month/:year"
        element={NavButtonWrapper(CalendarSelected)}
      />
      {/*******/}
      {/* Inventory routing */}
      <Route
        exact
        path="/inventory"
        element={NavButtonWrapper(Inventory)}
      ></Route>
      {/*******/}
      {/* Chart routing */}
      <Route exact path="/charts" element={NavButtonWrapper(Charts)}></Route>
      {/* 404 Routing */}
      <Route exact path="/404" element={NavButtonWrapper(Four0Four)} />
      {/*******/}
    </Routes>
  );
}

export default App;
