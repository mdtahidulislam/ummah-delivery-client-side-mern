import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';
import FoodCard from '../FoodCard/FoodCard'

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    // key={food._id}
    //                             food={food}
    return (
        <div>
            <SectionHeader
                heading="Choose From Most Popular"
                subHeading="Explore foods"
            ></SectionHeader>
            <div className="food-list">
                <Container>
                    <Row>
                        {
                            foods.map(food => <FoodCard
                                key={food._id}
                                food={food}
                            ></FoodCard>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Foods;