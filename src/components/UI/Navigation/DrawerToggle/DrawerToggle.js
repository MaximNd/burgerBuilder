import React from 'react';

import styles from './DrawerToggle.css';
import PropTypes from 'prop-types';

const DrawlerToggle = (props) => {
    return (
        <div onClick={props.clicked} className={styles.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

DrawlerToggle.propTypes = {
    clicked: PropTypes.func.isRequired
};

export default DrawlerToggle;