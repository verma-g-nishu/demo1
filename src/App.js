import React from "react";
import './App.css';
import NavBar from './NavBar.js';
import {
  BrowserRouter as Router, Switch, Route, Routes, Link
} from "react-router-dom";
import About from './About'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route element={<About />}>

          </Route>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
