import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}> All rights reserved by Ummah Food Delivery Network</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;