import React from 'react';

import styles from './NavigationItem.css';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
    return (
        <li className={styles.NavigationItem}>
            <a href={props.link} className={props.active ? styles.active : null}>{props.text}</a>
        </li>
    );
};

NavigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    active: PropTypes.bool,
    text: PropTypes.string.isRequired    
};

export default NavigationItem;