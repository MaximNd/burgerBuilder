import React from 'react';

import styles from './BurgerIngredient.css';

/**
 * 
 * @param {String} type 
 */
function getClassName(type) {
    return type.replace(/(-.)|(^.)/g, x => x.toUpperCase()).replace(/-/g, '');
}

const BurgerIngredient = (props) => {
    let ingredient = null;
    if (props.type === 'bread-top') {
        ingredient = (
            <div className={styles.BreadTop}>
                <div className={styles.Seeds1}></div>
                <div className={styles.Seeds2}></div>
            </div>
        );
    } else if (['bread-bottom', 'meat', 'cheese', 'salad', 'bacon'].includes(props.type)) {
        ingredient = <div className={styles[getClassName(props.type)]}></div>;
    }

    return ingredient;
};

export default BurgerIngredient;