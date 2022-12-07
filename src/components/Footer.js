import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <footer className="bg-dark text-white">
            <div className="footer-container pt-5 pb-5">
                <Row>
                    <Col sm>
                        <h1 className="text-white fw-bolder" to="/">Dog Shop</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                    <Col sm>
                        <h1 className="text-white">About Us</h1>
                        <ul>
                            <li>Our info</li>
                            <li>Our employees</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <h1 className="text-white">Customer Care</h1>
                        <p>We Care!</p>
                    </Col>
                    <Col sm>
                        <h1 className="text-white">Contact Us</h1>
                        <address>Busy Street No. 99, 123456 California, USA</address>
                        <div>555-6789</div>
                    </Col>
                </Row>
            </div>
    </footer>
        )
    }
}
