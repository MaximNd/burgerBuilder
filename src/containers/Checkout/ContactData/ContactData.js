import React, { Component } from 'react';
import axios from './../../../axios-orders';
import { withRouter } from 'react-router-dom';

import styles from './ContactData.css';
import Button from './../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = event => {
        event.preventDefault();
        const order = {
            ingedients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max',
                address: {
                    street: 'Street 1',
                    country: 'Ukraine'
                },
                email: 'email@mail.com'
            },
            deliveryMethod: 'fastest'
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

    render() {
        let form = (<form>
                        <input className={styles.Input} type="text" placeholder="Your name"/>
                        <input className={styles.Input} type="text" placeholder="Your email"/>
                        <input className={styles.Input} type="text" placeholder="Your street"/>
                        <input className={styles.Input} type="text" placeholder="Your postalCode"/>
                        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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

export default withRouter(ContactData);