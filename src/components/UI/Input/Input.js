import React from 'react';

import styles from './Input.css';
import PropTypes from 'prop-types';

const Input = (props) => {
    let inputEl = null;
    let inputClasses = `${styles.InputEl}`;

    if (props.invalid && props.touched) {
        inputClasses += ` ${styles.Invalid}`;
    }

    if (props.elementType === 'input') {
        inputEl = <input 
                    className={inputClasses} 
                    value={props.value} 
                    onChange={props.changed}
                    {...props.elementConfig} />
    } else if (props.elementType === 'textarea') {
        inputEl = <textarea 
                    className={inputClasses} 
                    value={props.value} 
                    onChange={props.changed}
                    {...props.elementConfig} ></textarea>
    } else if (props.elementType === 'select') {
        inputEl = (
            <select 
                className={inputClasses}
                value={props.value} 
                onChange={props.changed}>
            {props.elementConfig.options.map((option, index) => (
                <option key={`option-${index}`} value={option.value}>{option.text}</option>)
            )}
            </select>
        );
    } else {
        inputEl = <input 
                    className={inputClasses} 
                    value={props.value} 
                    onChange={props.changed}
                    {...props.elementConfig} />
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}></label>
            {inputEl}
        </div>
    );
};

Input.propTypes = {
    elementType: PropTypes.string,
    value: PropTypes.string.isRequired,
    elementConfig: PropTypes.object.isRequired,
    changed: PropTypes.func.isRequired,
    label: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired
};

export default Input;