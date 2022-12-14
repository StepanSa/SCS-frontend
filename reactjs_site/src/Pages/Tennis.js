import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';
import axios from 'axios';
import glassphoto from '../assets/glass.png'
import tabletennis from '../assets/chat-icon/table-tennis.png'


export default class TableTennis extends Component {
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
                <section className="main-container5">
                    <Container>
                        <Table responsive>
                            <tbody>
                                <tr>


                                    {items.filter(item => item.sportName === "TableTennis").map(item => (


                                        <td>
                                            <Col>


                                                <Card bg="dark" variant="dark" className='text-center' border="info" style={{ width: '16rem', height: "22rem" }}>

                                                    <Card.Img style={{ "height": '150px' }} variant="top" src={item.photoUrl} />
                                                    <Card.Body style={{ paddingTop: '2.5rem' }}>
                                                        <Card.Title style={{ color: "white" }} >{item.address}</Card.Title>

                                                        {isLoggedIn && <Alert.Link href={item.tgChannel}>CHAT</Alert.Link>}
                                                    </Card.Body>

                                                </Card>


                                            </Col>

                                        </td>


                                    ))}


                                </tr>
                            </tbody>


                        </Table >

                        <div>
                            <div style={{ paddingTop: "3em" }}>
                                <img style={{ borderRadius: "20px" }} src={glassphoto} width="90" height="90" />

                                <a href="https://t.me/+wFRwWMXKaEAxNGFi">
                                    <img align="right"
                                        style={{ borderRadius: "20px" }}
                                        src={tabletennis}
                                        height="90"
                                        width="90"
                                        alt="Logo"
                                    />
                                </a>

                            </div>
                        </div>

                    </Container>
                </section >
            )
        }
    }
}