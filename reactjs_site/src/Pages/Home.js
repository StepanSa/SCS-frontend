import React, { Component } from "react"
import { Form } from "react-bootstrap"
import CarouselBox from "../Components/CarouselBox"
import Popover from "../Components/Popover.js"
import PopUp from "./PopUp.js"
import { Container, Row, Col, Modal, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg'
import image2 from '../assets/basket2.jpg'
// import { useRef } from "react";
import { Link } from "react-scroll"
// import ScrollToTop from "../Components/ScrollToTop";
import findphoto from '../assets/footbasketvolley.png'
import chatphoto from '../assets/signUpLogIn.png'
import chatphoto2 from '../assets/chatButton.jpg'

import { useRef } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Components() {
    const find_ = useRef(null);
    const chat_ = useRef(null);
    const play_ = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <>
            <section className="backcontainer">
                <section className="main-container">
                    <Container>
                        <div className="text-center">

                            <h3 className="mb-2" style={{ color: "white", margin: 55 }} >The first</h3>

                            <h1>
                                <em style={{ color: "orange" }}>Sport Community Search</em>
                            </h1>
                        </div>


                        {/* <Text style={{ color: 'blue' }}>
                    I am blue
                    <Text style={{ color: 'red' }}>
                        i am red
                    </Text>
                    and i am blue again
                </Text> */}


                        {/* <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                    <Row>
                        <Col className='me-5'>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>first step</Card.Title>
                                    <Card.Text>
                                        Choose the sport
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='me-5'>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>second step</Card.Title>
                                    <Card.Text>
                                        Choose the sport
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '8rem' }}>
                                <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>third step</Card.Title>
                                    <Card.Text>
                                        Choose the sport
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container> */}
                        {/* <div style={{ paddingTop: '3rem', paddingLeft: '5rem' }}>
                        <div className="my-5">
                            <div className="text-center">
                                <div className="my-5">
                                    <Row style={{ color: 'red' }}>
                                        <Col md='4'>
                                            <Card bg="dark" style={{ width: '18rem', color: 'orange'}}>
                                                <Card.Img variant="top" style={{height:"9rem"}} src={image1} />
                                                <Card.Body style={{height: "4rem"}}>
    
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md='4' >
                                            <Card bg="dark" style={{ width: '18rem' }}>
                                                <Card.Img variant="top" style={{height:"9rem"}} src={image1} />
                                                <Card.Body style={{height: "4rem"}}>
                                            
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md='4' >
                                            <Card bg="dark" style={{ width: '18rem' }}>
                                                <Card.Img variant="top" style={{height:"9rem"}} src={image1} />
                                                <Card.Body>
                                                
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        {/* <Popover /> */}
                        {/* <li><Link to='/first-step' className = 'active' smooth={true} duration={500} style={{width:"16rem",color: "pink"}} variant="outline-danger">Find</Link></li>  */}
                        {/* <Button onClick={() => scrollToSection(find_)} className="link"><>Find</></Button> */}
                        <Container className='text-center' style={{ paddingTop: '14rem', paddingBottom: '2rem' }}>
                            <ButtonGroup aria-label="Basic example">
                                {/* <li><Link to='first-step' className = 'active' smooth={true} duration={500} style={{width:"16rem",color: "pink"}} variant="outline-danger">Find</Link></li> */}
                                <Button onClick={() => scrollToSection(find_)} style={{ width: "16rem", color: "pink" }} variant="outline-danger">Find</Button>
                                <Button onClick={() => scrollToSection(chat_)} style={{ width: "16rem", color: "pink" }} variant="outline-danger">Chat</Button>
                                <Button onClick={() => scrollToSection(play_)} style={{ width: "16rem", color: "pink" }} variant="outline-danger">Play</Button>
                            </ButtonGroup>
                            <Modal>
                                <Modal.Header>
                                    <Modal.Title className='text-center'>Find</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>

                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <Modal>
                                <Modal.Header>
                                    <Modal.Title className='text-center'>Chat</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>

                                    </Form>
                                </Modal.Body>
                            </Modal>

                            <Modal>
                                <Modal.Footer>
                                    <Modal.Title className='text-center'>Play</Modal.Title>
                                </Modal.Footer>
                                <Modal.Body>
                                    <Form>

                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </Container>
                    </Container>
                </section>
                <section className="border"></section>
                <section ref={find_} className="find_">
                    <Container>
                        <Row>
                            <Col>
                                <Container>
                                    <div>

                                        <h1 align="left" className="mb-2" style={{ fontSize: 75, color: "white" }} >Find</h1>

                                        <h3 style={{ paddingTop: "1.2em" }} align="left">
                                            <em style={{ fontSize: 33, color: "white" }}>To</em>
                                            <em style={{ fontSize: 33, color: "orange" }}> start</em>
                                            <em style={{ fontSize: 33, color: "white" }}> using our site,</em>
                                            <em style={{ fontSize: 33, color: "orange" }}> click</em>
                                            <em style={{ fontSize: 33, color: "white" }}> on</em>
                                        </h3>
                                        <h3 align="left">
                                            <em style={{ fontSize: 33, color: "white" }}>the</em>
                                            <em style={{ fontSize: 33, color: "orange" }}> top panel</em>
                                            <em style={{ fontSize: 33, color: "white" }}> of the screen to</em>
                                        </h3>
                                        <h3 align="left">
                                            <em style={{ fontSize: 33, color: "orange" }}>select a sport</em>
                                        </h3>
                                    </div>
                                </Container>
                            </Col>
                            <Col style={{ paddingLeft: "16em" }}>
                                <Container>
                                    <div style={{ paddingTop: "8em" }}>
                                        <img style={{ borderRadius: "2px" }} src={findphoto} width="400" height="95" />
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: "13em" }} >
                            <Container>
                                <Col style={{ paddingLeft: "45em" }}>
                                    <h3>
                                        <em style={{ color: "orange", fontSize: 33 }}>Then</em>
                                        <em style={{ color: "white", fontSize: 33 }}> you will be able to</em>
                                        <em style={{ color: "orange", fontSize: 33 }}> find</em>
                                        <em style={{ color: "white", fontSize: 33 }}> different</em>
                                    </h3>
                                    <h3 align="right">
                                        <em style={{ color: "orange", fontSize: 33 }}>locations</em>
                                        <em style={{ color: "white", fontSize: 33 }}> on chosen</em>
                                        <em style={{ color: "orange", fontSize: 33 }}> sport</em>
                                    </h3>
                                </Col>
                            </Container>
                        </Row>
                    </Container>
                </section>
                <section className="border"></section>
                <section ref={chat_} className="chat_">
                    <Container>
                        <Row>
                            <Col>
                                <Container>
                                    <div style={{ paddingLeft: "3em" }}>

                                        <h1 align="right" className="mb-2" style={{ fontSize: 75, color: "white", paddingLeft: "12em" }} >Chat</h1>

                                    </div>
                                </Container>
                            </Col>
                            <Col style={{ paddingLeft: "17em" }}>
                                <Container>
                                    <div style={{ paddingTop: "3em" }}>
                                        <img style={{ borderRadius: "20px" }} src={chatphoto} width="250" height="100" />
                                    </div>
                                </Container>
                            </Col>
                            <Col style={{ paddingLeft: "5em" }}>
                                <Container>
                                    <div style={{ paddingTop: "1.2em" }}>
                                        <h3 align="right">
                                            <em style={{ fontSize: 38, color: "white" }}>To start chatting, log in.</em>
                                        </h3>
                                        <h3 align="right">
                                            <em style={{ fontSize: 32, color: "orange" }}>Login button is in the upper</em>
                                        </h3>
                                        <h3 align="right">
                                            <em style={{ fontSize: 32, color: "orange" }}>right corner of the screen</em>
                                        </h3>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: "12em" }} >
                            <Col>
                                <Container>
                                    <h3>
                                        <em style={{ color: "orange", fontSize: 32 }}>Now</em>
                                        <em style={{ color: "white", fontSize: 32 }}> you can</em>
                                        <em style={{ color: "orange", fontSize: 32 }}> leave message</em>
                                        <em style={{ color: "white", fontSize: 32 }}> in</em>
                                    </h3>
                                    <h3>
                                        <em style={{ color: "orange", fontSize: 32 }}>telegram-chat</em>
                                        <em style={{ color: "white", fontSize: 32 }}> of chosen</em>
                                    </h3>
                                    <h3>
                                        <em style={{ color: "orange", fontSize: 32 }}>location</em>
                                    </h3>
                                </Container>
                            </Col>
                            <Col style={{ paddingLeft: "18em" }}>
                                <Container>
                                    <div style={{ paddingTop: "1.5em" }}>
                                        <img src={chatphoto2} width="240" height="75" />
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="border"></section>
                <section ref={play_} className="play_">
                    <Container>
                        <Container>
                            <div>

                                <h1 className="mb-2" style={{ fontSize: 75, color: "white" }} >Play</h1>
                            </div>
                            <div style={{ paddingTop: "7em" }}>
                                <h3 className="text-center">
                                    <em style={{ fontSize: 40, color: "orange" }}>Congratulations</em>
                                    <em style={{ fontSize: 40, color: "white" }}>, you have</em>
                                </h3>
                                <h3 className="text-center">
                                    <em style={{ fontSize: 40, color: "white" }}>familiarized yourself with the</em>
                                </h3>
                                <h3 className="text-center">
                                    <em style={{ fontSize: 40, color: "orange" }}>features</em>
                                    <em style={{ fontSize: 40, color: "white" }}> of our</em>
                                    <em style={{ fontSize: 40, color: "orange" }}> site</em>
                                    <em style={{ fontSize: 40, color: "white" }}>,</em>
                                    <em style={{ fontSize: 40, color: "orange" }}> successfully</em>
                                </h3>
                                <h3 className="text-center">
                                    <em style={{ fontSize: 40, color: "orange" }}>registered</em>
                                    <em style={{ fontSize: 40, color: "white" }}> and found your</em>
                                    <em style={{ fontSize: 40, color: "orange" }}> first sport</em>
                                </h3>
                                <h3 className="text-center">
                                    <em style={{ fontSize: 40, color: "orange" }}>Enjoy!</em>
                                </h3>
                            </div>
                        </Container>
                    </Container>
                </section>
            </section>
        </>
    )
}

export default Components;
