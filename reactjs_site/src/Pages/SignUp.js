import React, { Component } from "react"
import { Form, Button, Container } from 'react-bootstrap'

export default class SignUp extends Component {
    render() {
        return (
            <Container>
                <h1>Log in</h1>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>

                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="checkbox" label="Remember me" />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}