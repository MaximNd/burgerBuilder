import React from 'react';

import styles from './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={`${styles.Button} ${styles[props.btnType]}`} >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    clicked: PropTypes.func,
    btnType: PropTypes.oneOf(['Success', 'Error'])
};

export default Button;