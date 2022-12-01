import React, { Component } from "react"
import { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, ModalTitle, Modal, Toast, ToastContainer } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link} from "react-scroll"
import { useRef } from "react";
import ScrollToTop from "../Components/ScrollToTop";

function PopUp() {
    const find_ = useRef(null);
    const chat_ = useRef(null);
    const play_ = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <>
            <Container className='text-center' style={{ paddingTop: '14rem', paddingBottom: '2rem' }}>
                <ButtonGroup aria-label="Basic example">
                    {/* <li><Link to='first-step' className = 'active' smooth={true} duration={500} style={{width:"16rem",color: "pink"}} variant="outline-danger">Find</Link></li> */}
                    <Button onClick={() => scrollToSection(find_)} style={{width:"16rem",color: "pink"}} variant="outline-danger">Find</Button>
                    <Button onClick={() => scrollToSection(chat_)} style={{width:"16rem",color: "pink"}} variant="outline-danger">Chat</Button>
                    <Button onClick={() => scrollToSection(play_)} style={{width:"16rem",color: "pink"}} variant="outline-danger">Play</Button>
                </ButtonGroup>
                <Modal>
                    <Modal.Header>
                        <Modal.Title className='text-center'>Find</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal>
                    <Modal.Header>
                        <Modal.Title className='text-center'>Chat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal>
                    <Modal.Footer>
                        <Modal.Title className='text-center'>Play</Modal.Title>
                    </Modal.Footer>
                    <Modal.Body>
                        <Form>

                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
}

export default PopUp;