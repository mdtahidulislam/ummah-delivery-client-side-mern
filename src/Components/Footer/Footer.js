import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-light">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}> <p className="text-center"> All rights reserved by Ummah Food Delivery Network </p></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;