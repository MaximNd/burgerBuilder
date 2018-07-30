import React from 'react';

import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" text="Burger Builder" active />
            <NavigationItem link="/checkout" text="Checkout" />
        </ul>
    );
};

export default NavigationItems;