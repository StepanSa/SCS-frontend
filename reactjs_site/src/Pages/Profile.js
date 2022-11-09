import React, { Component, useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../assets/basket1.jpg';
import Alert from 'react-bootstrap/Alert';
import Placeholder from 'react-bootstrap/Placeholder';
import logo from "../Components/logo192.png";
import userPhoto from "../assets/USER.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
// import facebook_img from "../assets/profile.png";

const Profile = ({ isLoggedIn }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        username: "",
        email: ""
    })

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/user_info/", {
            withCredentials: true
        })
            .then(response => {
                console.log(response)
                setLoading(false)
                setUser({
                    username: response.data.username,
                    email: response.data.email
                })
            })
            .catch(e => {
                console.log("error")
                console.log(e.response)
            })
    }, [isLoggedIn])

    if (!isLoggedIn) {
        return <p>You are not authenticated</p>
    }
    else if (loading) {
        return <p> Loading ... </p>
    }
    else {
        return (
            <section className="main-container7">
                <Container style={{ paddingTop: "10px" }}>
                    <thead>
                    <tr>
                        {/*{Array.from({ length: 1 }).map((_, index) => (*/}
                        {/*    <th style={{ color: "white" }} key={index}></th>*/}
                        {/*))}*/}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Row>
                                <Col>
                                    <section className="container-banner1" style={{ paddingTop: "20px" }} >
                                        <div className="outline">
                                            <img className="square bg-primary rounded-circle" style={{ borderRadius: "100px" }}
                                                 id="profilepic" src={userPhoto} width="170" height="170" alt="profilepic" />
                                        </div>
                                        <h1 style={{ paddingTop: "0.7em" }}>
                                            <em style={{ color: "white" }}> {user.username}</em>
                                        </h1>
                                        {/* <p id="paragarph1"> user </p> */}
                                        {/* <p id="paragarph1"> user <br />
                                                        Youtube</p> */}
                                        <div style={{ paddingTop: "20px" }} className="userInfo">
                                            {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
                                            {/*    Instagram: {' '}*/}
                                            {/*    <Alert.Link href={item.ChannelUrlInst}>Link</Alert.Link>*/}
                                            {/*</Alert>*/}

                                            {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
                                            {/*    /!* <img style={{ borderRadius: "100px" }}*/}
                                            {/*        id="profilepic" src={facebook_img} width="170" height="170" alt="profilepic" /> *!/*/}
                                            {/*    Facebook: {' '}*/}
                                            {/*    <Alert.Link href={item.ChannelUrlFacebook}>Link</Alert.Link>*/}
                                            {/*</Alert>*/}

                                            {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
                                            {/*    Twitter: {' '}*/}
                                            {/*    <Alert.Link href={item.ChannelUrlTwitter}>Link</Alert.Link>*/}
                                            {/*</Alert>*/}

                                            {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
                                            {/*    Telegram: {' '}*/}
                                            {/*    <Alert.Link href={item.ChannelUrlTelegram}>Link</Alert.Link>*/}
                                            {/*</Alert>*/}
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
                                                <th colSpan={2} style={{ paddingTop: "3em" }}>{user.username}</th>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingTop: "3em" }}>Email:</td>
                                                <th colSpan={2} style={{ paddingTop: "3em" }}>{user.email}</th>
                                            </tr>

                                            {/*<tr>*/}
                                            {/*    <td style={{ paddingTop: "3em" }}>Description:</td>*/}
                                            {/*</tr>*/}
                                            </tbody>
                                        </Table>
                                    </section>
                                </Col>
                            </Row>
                        </td>
                    </tr>
                    </tbody>
                </Container>
            </section>
        )
    }
}

export default Profile

// export default class Profile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             user: {
//                 username: "",
//                 email: ""
//             }
//         }
//     }
//
//     componentDidMount() {
//         axios.get("http://127.0.0.1:8000/api/user_info/", {
//             withCredentials: true
//         })
//             .then(response => {
//                 console.log(response)
//                 this.setState({...this.state, isLoaded: true, user: {
//                     username: response.data.username, email: response.data.email
//                 }})
//             })
//             .catch(e => {
//                 console.log("error")
//                 console.log(e.response)
//             })
//     }
//     render() {
//         const { error, isLoaded, user } = this.state;
//         const { isLoggedIn } = this.props;
//         console.log(`is ${isLoggedIn}`)
//         if (!isLoggedIn) {
//             return <p>You are not authenticated</p>
//         }
//         else if (error) {
//             return <p>Error{error.message}</p>
//         }
//         else if (!isLoaded) {
//             return <p> Loading ... </p>
//         }
//         else {
//             return (
//                 <section className="main-container7">
//                     <Container style={{ paddingTop: "10px" }}>
//                         <thead>
//                             <tr>
//                                 {/*{Array.from({ length: 1 }).map((_, index) => (*/}
//                                 {/*    <th style={{ color: "white" }} key={index}></th>*/}
//                                 {/*))}*/}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                     <td>
//                                         <Row>
//                                             <Col>
//                                                 <section className="container-banner1" style={{ paddingTop: "20px" }} >
//                                                     <div className="outline">
//                                                         <img className="square bg-primary rounded-circle" style={{ borderRadius: "100px" }}
//                                                             id="profilepic" src={userPhoto} width="170" height="170" alt="profilepic" />
//                                                     </div>
//                                                     <h1 style={{ paddingTop: "0.7em" }}>
//                                                         <em style={{ color: "white" }}> {user.username}</em>
//                                                     </h1>
//                                                     {/* <p id="paragarph1"> user </p> */}
//                                                     {/* <p id="paragarph1"> user <br />
//                                                         Youtube</p> */}
//                                                     <div style={{ paddingTop: "20px" }} className="userInfo">
//                                                         {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
//                                                         {/*    Instagram: {' '}*/}
//                                                         {/*    <Alert.Link href={item.ChannelUrlInst}>Link</Alert.Link>*/}
//                                                         {/*</Alert>*/}
//
//                                                         {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
//                                                         {/*    /!* <img style={{ borderRadius: "100px" }}*/}
//                                                         {/*        id="profilepic" src={facebook_img} width="170" height="170" alt="profilepic" /> *!/*/}
//                                                         {/*    Facebook: {' '}*/}
//                                                         {/*    <Alert.Link href={item.ChannelUrlFacebook}>Link</Alert.Link>*/}
//                                                         {/*</Alert>*/}
//
//                                                         {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
//                                                         {/*    Twitter: {' '}*/}
//                                                         {/*    <Alert.Link href={item.ChannelUrlTwitter}>Link</Alert.Link>*/}
//                                                         {/*</Alert>*/}
//
//                                                         {/*<Alert striped bordered hover variant="dark" style={{ "font-size": "18px", "color": "black" }}>*/}
//                                                         {/*    Telegram: {' '}*/}
//                                                         {/*    <Alert.Link href={item.ChannelUrlTelegram}>Link</Alert.Link>*/}
//                                                         {/*</Alert>*/}
//                                                     </div>
//                                                 </section>
//                                             </Col>
//                                             <Col>
//                                                 <section style={{ paddingTop: "2em" }} className="container-banner2">
//
//
//                                                     <div className="userInfo">
//
//                                                         <h3>Information about user</h3>
//
//                                                     </div>
//                                                     <Table variant="dark">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td style={{ paddingTop: "3em" }}>Full name:</td>
//                                                                 <th colSpan={2} style={{ paddingTop: "3em" }}>{user.username}</th>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td style={{ paddingTop: "3em" }}>Email:</td>
//                                                                 <th colSpan={2} style={{ paddingTop: "3em" }}>{user.email}</th>
//                                                             </tr>
//
//                                                             {/*<tr>*/}
//                                                             {/*    <td style={{ paddingTop: "3em" }}>Description:</td>*/}
//                                                             {/*</tr>*/}
//                                                         </tbody>
//                                                     </Table>
//                                                 </section>
//                                             </Col>
//                                         </Row>
//                                     </td>
//                             </tr>
//                         </tbody>
//                     </Container>
//                 </section>
//             )
//         }
//     }
// }