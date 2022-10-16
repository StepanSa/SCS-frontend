import React, { Component } from "react"
import { Form } from "react-bootstrap"
import CarouselBox from "../Components/CarouselBox"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/beb.jpg'
// import { Text, StyleSheet } from 'react-native-nested-text';


export default class Home extends Component {
    render() {
        return (
            <>
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

                    <div className="my-3">
                        <Row>
                            {[0, 1, 2].map(item => (
                                <Col md='4' >
                                    <Card style={{ width: '15rem'}}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </>
        )
    }
}