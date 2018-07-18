import React from 'react';

import styles from './DrawerToggle.css';

const DrawlerToggle = (props) => {
    return (
        <div onClick={props.clicked} className={styles.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default DrawlerToggle;