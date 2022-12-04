import React, {useState, useEffect} from "react"
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
import Cookies from 'universal-cookie';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('csrftoken')) {
      console.log('user is logged in')
      setIsLoggedIn(true)
    } else {
      console.log('user is not logged in')
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Football isLoggedIn={isLoggedIn} />} />
          <Route path="/volleyball" element={<Volleyball isLoggedIn={isLoggedIn} />} />
          <Route path="/basketball" element={<Basketball isLoggedIn={isLoggedIn} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/badminton" element={<Badminton isLoggedIn={isLoggedIn} />} />
          <Route path="/tabletennis" element={<TableTennis isLoggedIn={isLoggedIn} />} />
          <Route path="/billiards" element={<Billiards isLoggedIn={isLoggedIn} />} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
        </Routes>
    
      </Router>
    </>

  );
}

export default App;
//////////////////////
// import React, {useEffect, useState} from "react"
// import logo from './logo.svg';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "./Components/Header"
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Home from './Pages/Home';
// import Football from './Pages/Football';
// import Volleyball from './Pages/Volleyball';
// import Basketball from './Pages/Basketball';
// import Contacts from './Pages/Contacts';
// import Badminton from './Pages/Badminton';
// import "./index.css";
//
// import axios from 'axios';
//
//
// function App() {
//
//
//   return (
//       <>
//         <Router>
//           <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/football" element={<Football />} />
//             <Route path="/volleyball" element={<Volleyball />} />
//             <Route path="/basketball" element={<Basketball />} />
//             <Route path="/contacts" element={<Contacts />} />
//             <Route path="/badminton" element={<Badminton />} />
//           </Routes>
//         </Router>
//       </>
//   );
// }
//
// export default App;
