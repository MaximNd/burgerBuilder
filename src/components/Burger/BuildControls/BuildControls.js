import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ].map(cntr => <BuildControl
                    added={() => props.ingredientAdded(cntr.type)} 
                    deleted={() => props.ingredientDeleted(cntr.type)} 
                    key={cntr.label} 
                    label={cntr.label}
                    disabled={props.disabledInfo[cntr.type]} />
    );
    return (
        <div className={styles.BuildControls}>
            <p className={styles.Price}>Current Price: {props.price} $</p>
            {controls}
            <button 
                onClick={props.ordered}
                className={styles.OrderButton}
                disabled={!props.purchasable}
            >
                ORDER NOW
            </button>
        </div>
    );
};

export default BuildControls;