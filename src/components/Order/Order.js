import React from 'react';

import styles from './Order.css';
import PropTypes from 'prop-types';

const Order = (props) => {
    let ingredients = ``;
    for (let ingr in props.ingredients) {
        ingredients += `${ingr} (${props.ingredients[ingr]}), `;
    }
    ingredients = `${ingredients.slice(0, ingredients.length - 2)}.`;
    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>{props.price} $</strong></p>
        </div>
    );
};

Order.propTypes = {
    ingredients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
};

export default Order;