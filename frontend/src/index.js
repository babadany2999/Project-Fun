import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import GlobalStyle from './Styles/GlobalStyles';
import OverlaidBackground from './Components/Wrappers_Global/OverlaidBackground';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle />
      <OverlaidBackground/>
      <Router>
        <App/>
        </Router>
  </React.StrictMode>
);
