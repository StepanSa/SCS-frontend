import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";

export default class Volleyball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/location/", {
            withCredentials: true
        })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
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
        const { isLoggedIn } = this.props;
        if (error) {
            return <p>Error{error.message}</p>
        }
        else if (!isLoaded) {
            return <p> Loading ... </p>
        }
        else {
            return (
                <section className="main-container2">
                    <Container>
                        <Table responsive>
                            <thead>
                                <tr>
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <th style={{ color: "white" }} key={index}>Location {index + 1}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>

                                <tr>


                                    {items.filter(item => item.sportName === "Volleyball").map(item => (

                                        <td>
                                            <Col>

                                                <li key={item.name}>

                                                    <Card className='text-center' border="info" style={{ width: '16rem', height: "20rem" }}>

                                                        <Card.Img style={{ "height": '150px' }} variant="top" src={item.photoUrl} />
                                                        <Card.Body style={{ paddingTop: '2.5rem' }}>
                                                            <Card.Title>{item.address}</Card.Title>

                                                            {isLoggedIn && <Alert.Link href={item.tgChannel}>CHAT</Alert.Link>}
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