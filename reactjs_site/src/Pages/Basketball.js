import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket4.jpg';
import Alert from 'react-bootstrap/Alert';

export default class Basketball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Locations")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.basketball
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
                <section className="main-container3">
                    <Container>
                        <Table responsive>
                            <thead>
                                <tr>
                                    {Array.from({ length: 100 }).map((_, index) => (
                                        <th style={{ color: "orange"}} key={index}>Location {index + 1}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>

                                <tr>


                                    {items.map(item => (

                                        <td>
                                            <Col>

                                                <li key={item.name}>

                                                    <Card style={{ width: '14rem', height: "16rem" }}>

                                                        <Card.Img style={{ "height": '120px' }} variant="top" src={item.strImage} />
                                                        <Card.Body>
                                                            <Card.Title>first step</Card.Title>
                                                            <Card.Text>
                                                                {item.strLocation}
                                                            </Card.Text>
                                                            <Alert.Link href={item.strLink}>CHAT</Alert.Link>
                                                        </Card.Body>

                                                    </Card>

                                                </li>

                                            </Col>
                                        </td>


                                    ))}


                                </tr>

                                {/* <ul>
                                {items.map(item => (
                                    <li key={item.name}>
                                        {item.strDrink}
                                        <img width="70" height="70" src={item.strDrinkThumb}></img>
                                    </li>
                                ))}
                            </ul> */}




                            </tbody>

                        </Table >
                    </Container>
                </section >
            )
        }
    }

}

