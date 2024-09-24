import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from "./pages/React"
import Next from "./pages/Next"

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" Component={React} />
          <Route exact path="/next" Component={Next} />
        </Routes>
    </Router>
  );
}

export default App;
