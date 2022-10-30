import React, { Component } from "react"
import { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, ModalTitle, Modal, Toast, ToastContainer } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function PopUp() {
    return (
        <>
            <Container className='text-center' style={{ paddingTop: '15.5rem', paddingBottom: '2rem' }}>
                <ButtonGroup aria-label="Basic example">
                    <Button style={{width:"16rem",color: "pink"}} variant="outline-danger">Find</Button>
                    <Button style={{width:"16rem",color: "pink"}} variant="outline-danger">Chat</Button>
                    <Button style={{width:"16rem",color: "pink"}} variant="outline-danger">Play</Button>
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