import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';


export default class Badminton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/location/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error{error.message}</p>
        }
        else if (!isLoaded) {
            return <p> Loading ... </p>
        }
        else {
            return (
                <section className="main-container4">
                    <Container>
                        <Table responsive>
                            <thead>
                                <tr>
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <th style={{ color: "white" }} key={index}>Location {index + 1}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    {items.filter(item => item.sportName === "Badminton").map(item => (


                                        <td>
                                            <Col>

                                                <li key={item.name}>


                                                    <Card className='text-center' border="primary" style={{ width: '16rem', height: "20rem" }}>

                                                        <Card.Img style={{ "height": '150px' }} variant="top" src={item.strImage} />
                                                        <Card.Body style={{ paddingTop: '2.5rem' }}>
                                                            <Card.Title>{item.address}</Card.Title>

                                                            <Alert.Link href={item.tgChannel}>CHAT</Alert.Link>
                                                        </Card.Body>

                                                    </Card>

                                                </li>

                                            </Col>

                                        </td>


                                    ))}


                                </tr>
                            </tbody>



                        </Table >
                    </Container>
                </section >
            )
        }
    }
}