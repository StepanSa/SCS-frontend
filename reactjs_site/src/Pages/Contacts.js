import React, { Component } from "react"
import { Form, Button, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};


export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '1000px' }}>
                <div className="text-center">

                    <h4 className="mb-2" style={{ color: "black", margin: 45 }}> Any troubles?</h4>

                    <h4 className="mb-2" style={{ color: "black", margin: 25 }}> Found new location?</h4>

                    <h4 className="mb-2" style={{ color: "black", margin: 25 }}> Let us know</h4>

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: 50 }}>

                        <div style={{ margin: 30, padding: 30, display: "flex", alignItems: "center", justifyContent: "space-evenly", color: "black", border: "1px solid #e9ebed", width: 400, backgroundColor: "#fff" }}>
                            <h4 className="mb-2" style={{ display: "flex", color: "black" }}> Email</h4>
                            <h4 className="mb-2" style={{ display: "flex", color: "black", fontSize: 20, marginLeft: 25 }}>
                                <ButtonMailto label="scsprojectbeb@gmail.com" mailto="mailto:scsprojectbeb@gmail.com" />
                            </h4>
                        </div>

                        <div style={{ padding: 30, display: "flex", alignItems: "center", justifyContent: "space-evenly", color: "black", border: "1px solid #e9ebed", width: 400, backgroundColor: "#fff" }}>
                            <h4 className="mb-2" style={{ color: "black", textAlign: "center" }}> <a href="https://t.me/+n-hjdV5-9Nw0NmYy">Telegram</a></h4>
                        </div>

                    </div>

                </div>
            </Container>
        )
    }
}