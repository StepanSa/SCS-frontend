import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';
import logo from "../Components/logo192.png";
import userPhoto from "../assets/USER.jpg";
import { NavLink } from "react-router-dom";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Information")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.users
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
                <section className="main-container7">
                    <Container style={{ paddingTop: "10px" }}>
                        <thead>
                            <tr>
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <th style={{ color: "white" }} key={index}></th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>


                                {items.map(item => (
                                    <td>
                                        <Row>
                                            <Col>
                                                <section className="container-banner1">

                                                    <img className="square bg-primary rounded-circle" style={{ paddingTop: "2em", borderRadius: "100px" }} id="profilepic" src={userPhoto} width="170" height="170" alt="profilepic" />
                                                    <h1 style={{ paddingTop: "0.7em" }}> Hi! I'm
                                                        <em style={{ color: "black" }}> {item.fullname}</em>
                                                    </h1>
                                                    <p id="paragarph1"> user </p>
                                                    {/* <p id="paragarph1"> user <br />
                                                        Youtube</p> */}

                                                    <Alert striped bordered hover variant="dark" style={{ "color": "black" }}>
                                                        Instagram: {' '}
                                                        <Alert.Link href={item.ChannelUrlInst}>Link</Alert.Link>
                                                    </Alert>

                                                    <Alert striped bordered hover variant="dark" style={{ "color": "black" }}>
                                                        Facebook: {' '}
                                                        <Alert.Link href={item.ChannelUrlFacebook}>Link</Alert.Link>
                                                    </Alert>

                                                    <Alert striped bordered hover variant="dark" style={{ "color": "black" }}>
                                                        Twitter: {' '}
                                                        <Alert.Link href={item.ChannelUrlTwitter}>Link</Alert.Link>
                                                    </Alert>

                                                    <Alert striped bordered hover variant="dark" style={{ "color": "black" }}>
                                                        Telegram: {' '}
                                                        <Alert.Link href={item.ChannelUrlTelegram}>Link</Alert.Link>
                                                    </Alert>

                                                </section>
                                            </Col>
                                            <Col>
                                                <section style={{ paddingTop: "2em" }} className="container-banner2">
                                                    <Table>
                                                        <thead>

                                                            <th colSpan={4}>Information about user</th>

                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ paddingTop: "3em" }}>Full name:</td>
                                                                <th colSpan={2} style={{ paddingTop: "3em" }}>{item.fullname}</th>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ paddingTop: "3em" }}>Email:</td>
                                                                <th colSpan={2} style={{ paddingTop: "3em" }}>{item.email}</th>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ paddingTop: "3em" }}>Phone number:</td>
                                                                <th colSpan={2} style={{ paddingTop: "3em" }}>{item.phone}</th>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ paddingTop: "3em" }}>Address:</td>
                                                                <th colSpan={2} style={{ paddingTop: "3em" }}>{item.address}</th>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ paddingTop: "3em" }}>Description:</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </section>
                                            </Col>
                                        </Row>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </Container>
                </section>
            )
        }
    }
}