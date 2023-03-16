import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Welcome from '.Components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Link exact path="/" component={Welcome} />
      </Routes>
    </Router>
  );
}

export default App;
