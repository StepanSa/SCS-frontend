import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import glassphoto from '../assets/glass.png'
import volleyballicon from '../assets/chat-icon/volleyball.png'

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
                            <tbody>

                                <tr>


                                    {items.filter(item => item.sportName === "Volleyball").map(item => (

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

                        <div>
                            <div style={{ paddingTop: "3em" }}>
                                <img style={{ borderRadius: "20px" }} src={glassphoto} width="90" height="90" />

                                <a href="https://t.me/+cDD8HEzpMPw4YmEy">
                                    <img align="right"
                                        style={{ borderRadius: "20px" }}
                                        src={volleyballicon}
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