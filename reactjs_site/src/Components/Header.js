import React, { Component } from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar, FormControl, Form, Button, ModalTitle, Modal } from 'react-bootstrap';
import logo from './logoSCS.png';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            {/* <Nav.Link href="/others" className='me-5'>Others</Nav.Link> */}
                            <NavDropdown title="Others" className='me-5' id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/badminton">Badminton</NavDropdown.Item>
                                <NavDropdown.Item href="/tabletennis">
                                    Table Tennis
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Field Hockey</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    tabletennis
                                </NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="/contacts" className='me-5'>Contacts</Nav.Link>
                            <Button variant="primary" className='me-3' onClick={handleShow}>Log In</Button>
                            <Button variant="danger" onClick={handleShow}>Sign up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>

                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variants="primary" type="submit" className="text-center">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

// export function NaviBar(){
//         <>
//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                 <Navbar.Brand></Navbar.Brand>
//             </Navbar>
//         </>
//     }



