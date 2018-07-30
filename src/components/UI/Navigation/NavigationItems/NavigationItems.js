import React from 'react';

import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" exact text="Burger Builder" />
            <NavigationItem link="/orders" text="Orders" />
        </ul>
    );
};

export default NavigationItems;