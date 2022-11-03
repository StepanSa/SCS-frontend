import React, {useEffect, useState} from "react"
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
        fetch('http://127.0.0.1:8000/api/test/')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e))
    }, [])

  return (
    <>
      <Router>
        <Header isLoggedIn={isLoggedIn} />
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
