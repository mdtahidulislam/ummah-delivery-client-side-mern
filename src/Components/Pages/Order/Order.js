import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [id])
    // order form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const order = {
            phone: data.phone,
            address: data.address,
            userEmail: user.email,
            userId: user.uid,
            foodId: data.foodId,
            foodName: food.name,
            foodImg: food.img
        }
        console.log(order);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order submitted seccessfully');
                }
            })
        reset();
    }


    return (
        <div className="py-5">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={6}>
                        <div className="text-center">
                            <h4 className="mb-4">Your Selected Food: {food.name}</h4>
                            <div className="mb-4">
                                <img src={food.img} alt="" className="img-fluid" />
                            </div>
                            <p>{food.description}</p>
                            <hr />
                            <h4>User Details:</h4>
                            <h6>{user.displayName}</h6>
                            <h6>{user.email}</h6>
                            <hr />
                            <h4>Complete your order</h4>
                        </div>
                        <div className="order-form text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("phone", { required: true })}
                                    type="tel"
                                    placeholder="Enter Phone number"
                                    className="mb-3"
                                />
                                <br />
                                <textarea
                                    {...register("address", { required: true })} placeholder="Enter Address"
                                    className="mb-3"
                                ></textarea>
                                <input type="submit" value="Purchase" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Order;