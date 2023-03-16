import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import GlobalStyle from './Styles/GlobalStyles';
import OverlaidBackground from './Components/OverlaidBackground';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle />
      <OverlaidBackground/>
        <App/>
  </React.StrictMode>
);
