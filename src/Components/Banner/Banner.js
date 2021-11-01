import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <div className="banner-area">
            <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col md={6} className="text-center">
                                <h1 className=" text-white mb-4">JUST ORDER AND WE WILL DELIVER YOU .</h1>
                                <p className=" text-white">Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Banner;