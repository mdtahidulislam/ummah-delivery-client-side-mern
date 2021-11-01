import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SectionHeader = (props) => {
    return (
        <div className="section-header my-4">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <h3 className="text-center">{props.heading}</h3>
                        <p className="text-center">{props.subHeading}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SectionHeader;