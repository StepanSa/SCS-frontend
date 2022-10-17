import React, { Component } from "react"
import { Form } from "react-bootstrap"
import CarouselBox from "../Components/CarouselBox"
import Popover from "../Components/Popover.js"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg'
import image2 from '../assets/basket2.jpg'
// import { Text, StyleSheet } from 'react-native-nested-text';


export default class Home extends Component {
    render() {
        return (
            <>
                <section className="main-container">
                    <Container>
                        {/* <CarouselBox /> */}
                        <div className="text-center">
                            <h3 className="mb-2" style={{ color: "orange", margin: 20 }} >THE FIRST</h3>
                            <h1>
                                <em style={{ color: "orange" }}>SPORT COMMUNITY SEARCH</em>
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
                        <Popover />
                    </Container>
                </section>
            </>
        )
    }
}