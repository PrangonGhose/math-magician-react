import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="main-div">
      <nav className="navbar flex">
        <div className="logo">
          <h1>Math Magicians</h1>
        </div>
        <div className="menu flex">
          <Link to="/" className="link">Home</Link>
          <Link to="/calculator" className="link">Calculator</Link>
          <Link to="/quote" className="link">Quote</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calculator" exact element={<Calculator />} />
        <Route path="/quote" exact element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
