import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, ModalTitle, Modal, Toast, ToastContainer } from 'react-bootstrap';
import logo from './logoSCS2.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'
import axios from 'axios'
import profile_image from '../assets/profile.png';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";


export default function Footer() {


    return (
        <>
            <section className="backcontainer2">
                <section className="border"></section>
            </section>
            <section className="backcontainer2">
                
                <section className='footer-container'>
                    <Container>
                        <div className='text-center'>
                            <h2 style={{ color: "white", fontSize: 27 }}>Sport Community Search</h2>
                            <p class="text-white-50" style={{ paddingTop: "7px", fontSize: 15, color: "white" }} align="top">This website is created for people who are ready </p>
                            <p class="text-white-50" style={{ fontSize: 15, color: "white" }} align="top">for creating new teams and achieve new goals together!</p>
                            <p class="text-white-50" style={{ fontSize: 15, color: "white" }} align="top">Thank you for your trust and we will be happy to read you feedback here</p>
                        </div>
                        <div className='text-center'>
                            <a href="https://www.instagram.com/">
                                <img style={{ borderRadius: "20px" }} src={facebook} width="45" height="45" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img style={{ borderRadius: "20px" }} src={instagram} width="45" height="45" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img style={{ borderRadius: "20px" }} src={twitter} width="45" height="45" />
                            </a>
                        </div>
                    </Container>
                </section>
            </section>
            <section className="backcontainer">
                <section className='footer-footer-container'>
                    <Container>
                        <p style={{ fontSize: 13, color: "white" }}>Copyright @2022 MolfarsTeam</p>
                    </Container>
                </section>
            </section>
        </>
    )

}

