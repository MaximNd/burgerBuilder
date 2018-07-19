import React from 'react';

import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map(ingredient => 
            [...Array(props.ingredients[ingredient])]
            .map((_, index) => <BurgerIngredient key={ingredient + index} type={ingredient} /> )
        )
        .reduce((arr, elem) => [...arr, ...elem], []);

        if (ingredients.length === 0) {
            ingredients = <p>Please start adding ingredients!</p>;
        }
        
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired  
};

export default Burger;