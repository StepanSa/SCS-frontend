import React, { Component } from 'react';
import { Container, Nav, Navbar, FormControl, Form, Button, ModalTitle, Modal } from 'react-bootstrap';
import logo from './logoSCS.png';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Football from '../Pages/Football';
import Volleyball from '../Pages/Volleyball';
import Basketball from '../Pages/Basketball';
import Others from '../Pages/Others';
import Contacts from '../Pages/Contacts';
import LogIn from '../Pages/LogIn';
import SignUp from '../Pages/SignUp';
export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="75"
                                width="75"
                                className='d-inline-block align-top'
                                alt="Logo"
                            />

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                                <Nav.Link href="/">Home</Nav.Link>

                            </Nav>
                            {/* <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"

                                />
                            </Form>
                            <Button variant="outline-info">Search</Button> */}
                            <Nav className="me-sm-2">
                                <Nav.Link href="/football" className='me-5'>Football</Nav.Link>
                                <Nav.Link href="/volleyball" className='me-5'>Volleyball</Nav.Link>
                                <Nav.Link href="/basketball" className='me-5'>Basketball</Nav.Link>
                                <Nav.Link href="/others" className='me-5'>Others</Nav.Link>
                                <Nav.Link href="/contacts" className='me-5'>Contacts</Nav.Link>
                                <Nav.Link href="/login" className='me-3'>Log In</Nav.Link>
                                <Nav.Link href="/signup">Sign up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/football" element={<Football />} />
                        <Route path="/volleyball" element={<Volleyball />} />
                        <Route path="/basketball" element={<Basketball />} />
                        <Route path="/others" element={<Others />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </Router>

                {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>Email Adress</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                            
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Form.Group controlId="fromBasicCheckbox">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="checkbox" label="Remember me" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal> */}
            </>
        );
    }
}
// export function NaviBar(){
//         <>
//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                 <Navbar.Brand></Navbar.Brand>
//             </Navbar>
//         </>
//     }



