import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';
import logo from "../Components/logo192.png";
import userPhoto from "../assets/USER.jpg";
import { NavLink } from "react-router-dom";
import facebook_img from "../assets/profile.png";



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
                                                <section className="container-banner1" style={{ paddingTop: "20px" }} >
                                                    <div className="outline">
                                                        <img className="square bg-primary rounded-circle" style={{ borderRadius: "100px" }}
                                                            id="profilepic" src={userPhoto} width="170" height="170" alt="profilepic" />
                                                    </div>
                                                    <h1 style={{ paddingTop: "0.7em" }}>
                                                        <em style={{ color: "white" }}> {item.fullname}</em>
                                                    </h1>
                                                    {/* <p id="paragarph1"> user </p> */}
                                                    {/* <p id="paragarph1"> user <br />
                                                        Youtube</p> */}
                                                    <div style={{ paddingTop: "20px" }} className="userInfo">
                                                        <Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>
                                                            Instagram: {' '}
                                                            <Alert.Link href={item.ChannelUrlInst}>Link</Alert.Link>
                                                        </Alert>

                                                        <Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>
                                                            <img className="square bg-primary rounded-circle" style={{ borderRadius: "100px" }}
                                                                id="profilepic" src={facebook_img} width="170" height="170" alt="profilepic" />
                                                            Facebook: {' '}
                                                            <Alert.Link href={item.ChannelUrlFacebook}>Link</Alert.Link>
                                                        </Alert>

                                                        <Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>
                                                            Twitter: {' '}
                                                            <Alert.Link href={item.ChannelUrlTwitter}>Link</Alert.Link>
                                                        </Alert>

                                                        <Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>
                                                            Telegram: {' '}
                                                            <Alert.Link href={item.ChannelUrlTelegram}>Link</Alert.Link>
                                                        </Alert>
                                                    </div>
                                                </section>
                                            </Col>
                                            <Col>
                                                <section style={{ paddingTop: "2em" }} className="container-banner2">


                                                    <div className="userInfo">

                                                        <h3>Information about user</h3>

                                                    </div>
                                                    <Table variant="dark">
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