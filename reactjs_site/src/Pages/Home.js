import React, { Component } from "react"
import { Form } from "react-bootstrap"
import CarouselBox from "../Components/CarouselBox"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/beb.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container style = {{paddingTop: '2rem',paddingBottom:'2rem'}}>
                    <Row>
                        <Col className='me-5'>
                            <Card style={{ width:'18rem'}}>
                                <Card.Img style={{"height":'200px'}} variant="top" src={image1} />
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
                            <Card style={{ width:'18rem'}}>
                                <Card.Img style={{"height":'200px'}} variant="top" src={image1} />
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
                            <Card style={{ width:'18rem'}}>
                                <Card.Img style={{"height":'200px'}} variant="top" src={image1} />
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
                </Container>
            </>
        )
    }
}