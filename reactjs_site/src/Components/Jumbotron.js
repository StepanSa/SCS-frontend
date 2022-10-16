import React, { Component } from "react"
// import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from "styled-components"
import image1 from '../assets/beb.jpg'

const Styles = styled.div`
    .jumbo{
        background:url(${image1}) no-repeat fixed bottom;
        background-size:cover;
        color:#efefef;
        height:400px;
        position:relative;
        z-index:-2;
    }`;
// const Jumbotron=()=>(
//     <Jumbo fluid className="jumbo">
//         <div className="overlay"></div>
//         <Container>
//         <h1>Our site</h1>
//         <p>Our contacts: ...</p>
//         </Container>
//     </Jumbo>
// )

// export default Jumbotron;