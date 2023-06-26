import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Beta, Landing } from './pages';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing /> } />
        <Route path="/beta" element={<Beta />} />
      </Routes>
    </Router>
  );
};

export default App;
