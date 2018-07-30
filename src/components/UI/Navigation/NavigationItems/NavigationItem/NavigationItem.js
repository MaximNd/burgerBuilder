import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.css';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
    return (
        <li className={styles.NavigationItem}>
            <NavLink exact={props.exact} activeClassName={styles.active} to={props.link}>{props.text}</NavLink>
        </li>
    );
};

NavigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    text: PropTypes.string.isRequired    
};

export default NavigationItem;