import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';
import axios from 'axios';
import glassphoto from '../assets/glass.png'


export default class TableTennis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            showLoop: true,
            rangeValue: 50,
            lat: 0,
            lon: 0
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

    loopClick() {
        if ("geolocation" in navigator) {
            this.setState({
                showLoop: false
            })
            console.log("Available");
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            });
            if ("geolocation" in navigator) {
                this.setState({
                    showLoop: false
                })
            }
            else {
                console.log("Pls allow your coord")
            }
        }
    }

    xClick()
    {
        this.setState({
            showLoop: true
        })
        console.log("clicked")
    }

    handleChangeInputRange(event) {
        this.setState({rangeValue: event.target.value});
    }

    searchLocationsInRadius() {
        let lat = 0
        let lon = 0
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
                lat = position.coords.latitude
                lon = position.coords.longitude
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            })
            console.log("GOT GEOLOCATION")
        } else {
            console.log("GEOLOCATION IS NOT AVAILABLE")
        }

        console.log(lat, lon)


        navigator.geolocation.getCurrentPosition(position => {
            axios.get(`http://127.0.0.1:8000/api/location_in_radius/?radius=${this.state.rangeValue}&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,{
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
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            });

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
                            <thead>
                                <tr>
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <th style={{ color: "white" }} key={index}>Location {index + 1}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    {items.length === 0 && "No available stadiums"}
                                    {items.filter(item => item.sportName === "TableTennis").map(item => (
                                        <td>
                                            <Col>
                                                <li key={item.name}>


                                                    <Card className='text-center' border="primary" style={{ width: '16rem', height: "20rem" }}>

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
                            </tbody>



                        </Table >

                        {this.state.showLoop && <div style={{ paddingTop: "5em" }}>
                            <img onClick={this.loopClick.bind(this)} style={{ borderRadius: "20px", cursor: "pointer" }} src={glassphoto} width="90" height="90" />
                        </div>}

                        {!this.state.showLoop && <div>
                            <div style={{ cursor: "pointer", fontSize: 36, color: "white" }} onClick={this.xClick.bind(this)}>x</div>
                                <div>
                                    <input type="range" min="0" max="100" step="1" value={this.state.rangeValue} onChange={this.handleChangeInputRange.bind(this)} />
                                </div>
                                <div>
                                    <input type="value" value={this.state.rangeValue} onChange={this.handleChangeInputRange.bind(this)}/>
                                </div>
                                <div>
                                    <Button onClick={this.searchLocationsInRadius.bind(this)} variant="primary">Submit</Button>
                                </div>
                        </div>}
                    </Container>
                </section >
            )
        }
    }
}