import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';

export default function Footer(){
    return(
        <footer>
            <Container>
                <Row className='align-item-center'>
                    <Col md={12} className='text-center'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/pablo-manolaki-110522158/"><img src={navIcon1}/></a>
                            <a href="https://github.com/manolonolo"><img src={navIcon2}/></a>
                        </div>
                        <p>Copyright 2023 All rights reserved. Pablo Manolaki</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}