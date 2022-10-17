import React, {Component} from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';

export default class Volleyball extends Component {
    render() {
        return (
            <section className="main-container2">
                <Container>
                    <Table responsive>
                        <thead>
                            <tr>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <th style={{ color: "white"}} key={index}>Location {index+1}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                                <td>
                                <Col>
                                    <Card style={{ width: '8rem' }}>
                                        <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
                                        <Card.Body>
                                            <Card.Title>first step</Card.Title>
                                            <Card.Text>
                                                Choose the sport
                                            </Card.Text>
                                            <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </td>
                        
                            </tr>



                        </tbody>

                    </Table>
                </Container>
            </section >
        )
    }
}