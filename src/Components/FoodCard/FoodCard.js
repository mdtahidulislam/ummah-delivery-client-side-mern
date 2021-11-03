import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodCard.css';

const FoodCard = (props) => {
    const { _id, name, description, img } = props.food;
    return (
        <Col lg={4} md={6} className="mb-5">
            <Card className="text-center">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text className="text-center">
                        {description}
                    </Card.Text>
                    <Link to={`/foods/${_id}`} className="order-btn btn">Order</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FoodCard;