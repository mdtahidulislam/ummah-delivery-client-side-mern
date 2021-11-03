import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import OrderCard from '../../OrderCard/OrderCard';

const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?userId=${user.uid}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // cancel Order
    const cancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                // update ui
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>


                        {orders.length ? <h3 className="text-center my-3">Your Placed Order</h3> : <h3 className="text-center my-3">Your have no order</h3>}
                        {
                            orders.map(order => <OrderCard
                                key={order._id}
                                order={order}
                                cancel={() => { cancelOrder(order._id) }}
                            ></OrderCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;