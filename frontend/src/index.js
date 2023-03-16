import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import GlobalStyle from './Styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
