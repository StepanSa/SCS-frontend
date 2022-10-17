import React from "react"
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Football from './Pages/Football';
import Volleyball from './Pages/Volleyball';
import Basketball from './Pages/Basketball';
import Contacts from './Pages/Contacts';
import Badminton from './Pages/Badminton';
import "./index.css";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Football />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/badminton" element={<Badminton />} />
        </Routes>
    
      </Router>
    </>
  );
}

export default App;
