import React from 'react';

import Button from './../../UI/Button/Button';
import PropTypes from 'prop-types';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingedients)
        .map((key, index) => (<li key={`${key}-${index}`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {props.ingedients[key]}
                    </li>));
    return (
        <React.Fragment>
            <h3>Your order</h3>
            <p>Ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price} $</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Error" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </React.Fragment>
    );
};

OrderSummary.propTypes = {
    ingedients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    purchaseCancelled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired
};

export default OrderSummary;