import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';
import axios from 'axios';
import glassphoto from '../assets/glass.png'

// export default class Football extends Component {
//     render() {
//         return (

//             <section className="main-container1">
//                 <Container>
//                     <Table responsive>
//                         <thead>
//                             <tr>
//                                 {Array.from({ length: 10 }).map((_, index) => (
//                                     <th style={{ color: "white"}} key={index}>Location {index+1}</th>
//                                 ))}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                 <Col>
//                                     <Card style={{ width: '8rem' }}>
//                                         <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
//                                         <Card.Body>
//                                             <Card.Title>first step</Card.Title>
//                                             <Card.Text>
//                                                 Choose the sport
//                                             </Card.Text>
//                                             <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                                 </td>
//                                 <td>
//                                 <Col>
//                                     <Card style={{ width: '8rem' }}>
//                                         <Card.Img style={{ "height": '50px' }} variant="top" src={image1} />
//                                         <Card.Body>
//                                             <Card.Title>first step</Card.Title>
//                                             <Card.Text>
//                                                 Choose the sport
//                                             </Card.Text>
//                                             <Alert.Link href="https://web.telegram.org/z/">CHAT</Alert.Link>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                                 </td>


//                             </tr>



//                         </tbody>

//                     </Table>
//                 </Container>
//             </section >

//         )
//     }
// }

export default class Football extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });

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
                <section className="main-container1">
                    <Container>
                        <Table responsive>
                            <thead>
                                <tr>
                                    {/* {Array.from({ length: 5 }).map((_, index) => (
                                        <th style={{ color: "white" }} key={index}>Location {index + 1}</th>
                                    ))} */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    {items.filter(item => item.sportName === "Football").map(item => (


                                        <td>
                                            <Col>

                                                <Card bg="dark" variant="dark" className='text-center' border="primary" style={{ width: '16rem', height: "22rem" }}>

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

                        <div style={{ paddingTop: "5em" }}>
                            <img style={{ borderRadius: "20px" }} src={glassphoto} width="90" height="90" />
                        </div>
                    </Container>
                </section >
            )
        }
    }
}





{/* <ul>
                            {items.map(item => (
                                <li key={item.name}>
                                    {item.strDrink}
                                    <img width="70" height="70" src={item.strDrinkThumb}></img>
                                </li>
                            ))}
                        </ul> */}