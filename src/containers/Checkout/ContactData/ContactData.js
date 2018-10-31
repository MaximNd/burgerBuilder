import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from './../../../axios-orders';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './ContactData.css';
import Button from './../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from './../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    rules: {
                        required: true,
                        minLength: 1,
                        maxLength: 15
                    },
                    valid: false
                },
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    rules: {
                        required: true,
                        maxLength: 20
                    },
                    valid: false
                },
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    rules: {
                        required: true,
                        maxLength: 20
                    },
                    valid: false
                },
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    rules: {
                        required: true,
                        email: true
                    },
                    valid: false
                },
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', text: 'Fastest'},
                        {value: 'cheapest', text: 'Cheapest'},
                    ]
                },
                value: 'fastest',
                validation: {
                    rules: {
                        required: true
                    },
                    valid: false
                },
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = event => {
        event.preventDefault();
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.orderForm.name.value,
                address: {
                    street: this.state.orderForm.street.value,
                    country: this.state.orderForm.country.value
                },
                email: this.state.orderForm.email.value
            },
            deliveryMethod: this.state.orderForm.deliveryMethod.value
        };
        this.setState({ loading: true });
        axios.post('/orders.json', order)
            .then(({data}) => {
                console.log(data);
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false });
            });
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.length) {
            isValid = value.length === rules.length && isValid;
        }
        if (rules.email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            isValid = emailRegex.test(value) && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputID) => {
        const newOrderForm = { ...this.state.orderForm };
        const newFormEl = { ...newOrderForm[inputID] };
        newFormEl.value = event.target.value;
        newFormEl.validation.valid = this.checkValidity(newFormEl.value, newFormEl.validation.rules)
        newFormEl.touched = true;
        let formIsValid = true;
        for (let key in newOrderForm) {
            formIsValid = newOrderForm[key].validation.valid && formIsValid;
        }
        newOrderForm[inputID] = newFormEl
        this.setState({ orderForm: newOrderForm, formIsValid });
    }



    render() {
        let inputs = [];
        let form = null;

        for (let key in this.state.orderForm) {
            inputs.push(<Input 
                        key={key}
                        elementType={this.state.orderForm[key].elementType} 
                        elementConfig={this.state.orderForm[key].elementConfig} 
                        value={this.state.orderForm[key].value} 
                        invalid={!this.state.orderForm[key].validation.valid} 
                        touched={this.state.orderForm[key].touched} 
                        changed={event => this.inputChangedHandler(event, key)} />);
        }

        form = (<form>
                    {inputs}
                    <Button disabled={!this.state.formIsValid} btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter Your Contact Data please!</h4>
                {form}
            </div>
        );
    }
}

ContactData.propTypes = {
    ingredients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice
});

export default connect(mapStateToProps)(withRouter(ContactData));