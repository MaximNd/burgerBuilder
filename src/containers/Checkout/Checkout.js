import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

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
                    ingredients={this.props.ingredients}
                    onCancel={this.checkoutCancelledHandler}
                    onContinue={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/submit'} component={ContactData} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients
});

export default connect(mapStateToProps)(Checkout);