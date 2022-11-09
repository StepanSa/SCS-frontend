import React, {useEffect} from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, ModalTitle, Modal, Toast, ToastContainer } from 'react-bootstrap';
import logo from './logoSCS2.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
import {Link} from 'react-router-dom'
import axios from 'axios'
import profile_image from '../assets/profile.png';

export default function Header({ isLoggedIn, setIsLoggedIn }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [showToast, setShowToast] = useState(false);

    const [submitLoginDisabled, setSubmitLoginDisabled] = useState(true)
    const [submitRegDisabled, setSubmitRegDisabled] = useState(true)

    const [validUsernameLogin, setValidUsernameLogin] = useState(false)
    const [validPasswordLogin, setValidPasswordLogin] = useState(false)

    const [validUsernameReg, setValidUsernameReg] = useState(false)
    const [validEmailReg, setValidEmailReg] = useState(false)
    const [validPasswordReg1, setValidPasswordReg1] = useState(false)
    const [validPasswordReg2, setValidPasswordReg2] = useState(false)
    const [validFirstNameReg, setValidFirstNameReg] = useState(false)
    const [validLastNameReg, setValidLastNameReg] = useState(false)

    const [passwordMatch, setPasswordMatch] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(true)

    const [responseText, setResponseText] = useState('')

    const [loginForm, setLoginForm] = useState({
        'username': '',
        'password': ''
    })

    const [regForm, setRegForm] = useState({
        'username': '',
        'password1': '',
        'password2': '',
        'first_name': '',
        'last_name': '',
        'email': ''
    })

    const handleSubmit = async () => {
        setSubmitLoginDisabled(true)
        axios.post('http://127.0.0.1:8000/api/login/', loginForm,{
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                setResponseText(res.data)
                setShowToast(true)
                setShow(false)
                setIsLoggedIn(true)
                setTimeout(() => {
                    setShowToast(false)
                }, 5000)
            })
            .catch(e => {
                console.log("inside catch")
                console.log(e.response)
                if (e.response.status == 400) {
                    setResponseText(e.response.data)
                    setShowToast(true)
                    setShow(false)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 5000)
                }
            })
        setSubmitLoginDisabled(false)
    }

    const handleSubmitReg = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/user/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: regForm.username, email: regForm.email, password: regForm.password1,
                first_name: regForm.first_name, last_name: regForm.last_name}),
            credentials: "same-origin"
        });
        const data = await response.json();
        console.log(data);
    }

    const checkLoginForm = () => {
        if (loginForm.username.trim().length <= 1) {
            setValidUsernameLogin(false)
        } else {
            setValidUsernameLogin(true)
        }

        if (loginForm.password.trim().length <= 7) {
            setValidPasswordLogin(false)
        } else {
            setValidPasswordLogin(true)
        }

        if (validUsernameLogin && validPasswordLogin) {
            setSubmitLoginDisabled(false)
        } else {
            setSubmitLoginDisabled(true)
        }
    }

    const checkRegForm = () => {
        if (regForm.username.trim().length <= 1) {
            setValidUsernameReg(false)
        } else {
            setValidUsernameReg(true)
        }

        if (regForm.email.trim().length <= 1) {
            setValidEmailReg(false)
        } else {
            setValidEmailReg(true)
        }

        if (regForm.password1.trim().length <= 7) {
            setValidPasswordReg1(false)
        } else {
            setValidPasswordReg1(true)
        }

        if (regForm.password2.trim().length <= 7) {
            setValidPasswordReg2(false)
        } else {
            setValidPasswordReg2(true)
        }

        if (regForm.first_name.trim().length < 1) {
            setValidFirstNameReg(false)
        } else {
            setValidFirstNameReg(true)
        }

        if (regForm.last_name.trim().length < 1) {
            setValidLastNameReg(false)
        } else {
            setValidLastNameReg(true)
        }

        if (validateEmail(regForm.email.trim())) {
            setInvalidEmail(false)
        }
        else {
            setInvalidEmail(true)
        }

        if (validUsernameReg && validEmailReg, validFirstNameReg, validLastNameReg, validPasswordReg1, validPasswordReg2 && passwordMatch && !invalidEmail) {
            setSubmitRegDisabled(false)
        } else {
            setSubmitRegDisabled(true)
        }

        if (regForm.password1 == regForm.password2) {
            setPasswordMatch(true)
        } else {
            setPasswordMatch(false)
        }
    }

    useEffect(() => {
        checkLoginForm()
    }, [loginForm.username, loginForm.password, validUsernameLogin, validPasswordLogin])

    useEffect(() => {
        checkRegForm()
    }, [regForm.username, regForm.password1, regForm.password2, regForm.email, regForm.first_name, regForm.last_name,
        validUsernameReg, validEmailReg, validPasswordReg1, validPasswordReg2, validFirstNameReg, validLastNameReg, passwordMatch, invalidEmail])

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

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
                                <NavDropdown.Item href="#action/3.3">Field Hockey</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    tabletennis
                                </NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="/contacts" className='me-5'>Contact us</Nav.Link>

        

                            {isLoggedIn ? <Link to="/profile"><img
                                    src={profile_image}
                                    height="35"
                                    width="40"
                                    className='d-inline-block align-top'
                                    alt="Logo"
                                /></Link> : <>
                                <Button variant="danger" className='me-3' onClick={handleShow}>Log In</Button>
                                <Button variant="outline-warning" onClick={handleShow2}>Sign up</Button>
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <ToastContainer className="p-3" position="bottom-end">
                <Toast onClose={() => setShowToast(false)} show={showToast}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Message</strong>
                        <small>now</small>
                    </Toast.Header>
                    <Toast.Body>{responseText}</Toast.Body>
                </Toast>
            </ToastContainer>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onInput={e => setLoginForm({ ...loginForm, username: e.target.value })} type="text" value={loginForm.username} placeholder="Enter username" />
                            <Form.Text className="text-danger">{!validUsernameLogin && "Check length of your username"}</Form.Text>

                        </Form.Group>
                        <Form.Group style={{ paddingTop: '1rem' }} controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onInput={e => setLoginForm({ ...loginForm, password: e.target.value })} type="password" value={loginForm.password} placeholder="Enter password" />
                            <Form.Text className="text-danger">{!validPasswordLogin && "Check length of your password"}</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Alert className="text-center" variant='light'>
                            <Alert.Link href="#"></Alert.Link>
                        </Alert>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={handleSubmit} variant="primary" disabled={submitLoginDisabled}>Submit</Button>
                        </Modal.Footer>
                        <Alert className="text-center" variant='info'>
                            Not a member?{' '}
                            <Alert.Link href="#">Sign up now</Alert.Link>.
                        </Alert>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicUsernameReg">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onInput={(e) => setRegForm({ ...regForm, username: e.target.value })} type="text" value={regForm.username} placeholder="Enter username" />
                            <Form.Text className="text-danger">{!validUsernameReg && "Check length of your username"}</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmailReg">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control onInput={(e) => setRegForm({ ...regForm, email: e.target.value })} type="email" value={regForm.email} placeholder="Enter email" />
                            <Form.Text className="text-danger">{!validEmailReg && "Check length of your email"}</Form.Text>
                            <Form.Text className="text-danger">{validEmailReg && invalidEmail && "You typed wrong email"}</Form.Text>
                        </Form.Group>
                        <Form.Group style={{ paddingTop: '1rem' }} controlId="formBasicPasswordReg1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onInput={(e) => setRegForm({ ...regForm, password1: e.target.value })} type="password" value={regForm.password1} placeholder="Enter password" />
                            <Form.Text className="text-danger">{!validPasswordReg1 && "Check length of your password"}</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ paddingTop: '1rem' }} controlId="formBasicPasswordReg2">
                            <Form.Label style={{ paddingTop: '1rem' }}>Password again</Form.Label>
                            <Form.Control onInput={(e) => setRegForm({ ...regForm, password2: e.target.value })} type="password" value={regForm.password2} placeholder="Enter password again" />
                            <Form.Text className="text-danger">{!validPasswordReg2 && "Check length of your password"}</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ paddingTop: '1rem' }} controlId="formBasicFirstNameReg">
                            <Form.Label style={{ paddingTop: '1rem' }}>First name</Form.Label>
                            <Form.Control onInput={(e) => setRegForm({ ...regForm, first_name: e.target.value })} type="text" value={regForm.first_name} placeholder="Enter first name" />
                            <Form.Text className="text-danger">{!validFirstNameReg && "Check length of your first name"}</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ paddingTop: '1rem' }} controlId="formBasicLastNameReg">
                            <Form.Label style={{ paddingTop: '1rem' }}>Last name</Form.Label>
                            <Form.Control onInput={(e) => setRegForm({ ...regForm, last_name: e.target.value })} type="text" value={regForm.last_name} placeholder="Enter last name" />
                            <Form.Text className="text-danger">{!validLastNameReg && "Check length of your last name"}</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ paddingTop: '1rem' }} controlId="formBasicPasswordMatch">
                            <Form.Text className="text-danger">{!passwordMatch && "Your passwords don't match"}</Form.Text>
                        </Form.Group>

                        {/*<Form.Group controlId="formBasicCheckbox">*/}
                        {/*    <Form.Check type="checkbox" label="Remember me" />*/}
                        {/*</Form.Group>*/}
                        {/* <Button variants="primary" type="submit" className="text-center">Submit</Button> */}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                Close
                            </Button>
                            <Button disabled={submitRegDisabled} onClick={handleSubmitReg} variant="primary">Submit</Button>
                        </Modal.Footer>
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