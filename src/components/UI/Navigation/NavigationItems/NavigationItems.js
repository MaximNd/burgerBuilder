import React from 'react';

import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" text="Link1" active />
            <NavigationItem link="/asd" text="Link2" />
        </ul>
    );
};

export default NavigationItems;