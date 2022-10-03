import React, { Component } from "react"
import {Form,Button,Container} from 'react-bootstrap'

export default class LogIn extends Component {
    render() {
        return (
            <Container style={{width:'500px'}}>
                <h1 className="text-center">Log in</h1>
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
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variants="primary" type="submit" className="text-center">Submit</Button>
                </Form>
            </Container>
        )
    }
}