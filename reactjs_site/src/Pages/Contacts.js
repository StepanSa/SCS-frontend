import React, { Component } from "react"
import { Form, Button, Container } from 'react-bootstrap'

export default class LogIn extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>

                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variants="primary" type="submit" className="text-center">Submit</Button>
                </Form>
            </Container>
        )
    }
}