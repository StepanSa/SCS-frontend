import React from "react"
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"
import Header2 from "./Components/Header2"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Football from './Pages/Football';
import Volleyball from './Pages/Volleyball';
import Basketball from './Pages/Basketball';
import Contacts from './Pages/Contacts';
import Badminton from './Pages/Badminton';
import TableTennis from './Pages/Tennis';
import Billiards from './Pages/Billiards';
import Profile from './Pages/Profile';
import "./index.css";


function App() {
  return (
    // <>
    //   <Router>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/football" element={<Football />} />
    //       <Route path="/volleyball" element={<Volleyball />} />
    //       <Route path="/basketball" element={<Basketball />} />
    //       <Route path="/contacts" element={<Contacts />} />
    //       <Route path="/badminton" element={<Badminton />} />
    //       <Route path="/tabletennis" element={<TableTennis />} />
    //       <Route path="/billiards" element={<Billiards />} />
    //     </Routes>
    
    //   </Router>
    // </>
    <>
      <Router>
        <Header2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Football />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/tabletennis" element={<TableTennis />} />
          <Route path="/billiards" element={<Billiards />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    
      </Router>
    </>
  );
}

export default App;
