import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: 0
        };
        const query = new URLSearchParams(this.props.location.search);
        const params = {};
        for (let param of query.entries()) {
            params[param[0]] = +param[1];
        }
        const { price, ...ingredients } = params;
        
        this.state.ingredients = ingredients;
        this.state.totalPrice = price;
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push('/checkout/submit');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    onCancel={this.checkoutCancelledHandler}
                    onContinue={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/submit'} render={() => (<ContactData
                                                                                ingredients={this.state.ingredients}
                                                                                price={this.state.totalPrice} />
                                                                                )} />
            </div>
        );
    }
}

export default Checkout;