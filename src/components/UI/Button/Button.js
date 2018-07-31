import React from 'react';

import styles from './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.clicked}
            className={`${styles.Button} ${styles[props.btnType]}`} >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    clicked: PropTypes.func,
    btnType: PropTypes.oneOf(['Success', 'Error']),
    disabled: PropTypes.bool
};

export default Button;