import React from 'react';

import styles from './Backdrop.css';
import PropTypes from 'prop-types';

const Backdrop = (props) => (props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null);

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired
};

export default Backdrop;