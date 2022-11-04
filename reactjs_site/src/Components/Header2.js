import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, ModalTitle, Modal, Toast, ToastContainer } from 'react-bootstrap';
import logo from './logoSCS2.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
import profile_image from './profile.png';

export default function Header() {

    const [showToast, setShowToast] = useState(true);

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="70"
                            width="130"
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
                                <NavDropdown.Item href="/billiards">Billiards</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    tabletennis
                                </NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="/contacts" className='me-5'>Contact us</Nav.Link>
                            <Navbar.Brand href="/profile">
                                <img
                                    src={profile_image}
                                    height="35"
                                    width="40"
                                    className='d-inline-block align-top'
                                    alt="Logo"
                                />

                            </Navbar.Brand>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <ToastContainer className="p-3" position="bottom-end">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>1 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, registered user!</Toast.Body>
                </Toast>
            </ToastContainer>



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