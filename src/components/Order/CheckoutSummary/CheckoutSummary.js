import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheckoutSummary.css';
import Burger from './../../Burger/Burger';
import Button from './../../UI/Button/Button';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Nice burger!!</h1>
            <div className={styles.CheckoutBurger}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Error" clicked={props.onCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.onContinue}>CONTINUE</Button>
        </div>
    );
};

CheckoutSummary.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default CheckoutSummary;