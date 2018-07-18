import React from 'react';

import styles from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <li className={styles.NavigationItem}>
            <a href={props.link} className={props.active ? styles.active : null}>{props.text}</a>
        </li>
    );
};

export default NavigationItem;