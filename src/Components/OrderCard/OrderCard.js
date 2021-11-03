import React from 'react';
import './OrderCard.css';

const OrderCard = (props) => {
    const { foodName, foodImg } = props.order;
    return (
        <div>
            <div className="order-card mb-3 d-flex flex-wrap justify-content-between align-items-center">
                <img src={foodImg} alt="" className="h-100" />
                <h6>{foodName}</h6>
                <button onClick={props.cancel}>X</button>
            </div>
        </div>
    );
};

export default OrderCard;