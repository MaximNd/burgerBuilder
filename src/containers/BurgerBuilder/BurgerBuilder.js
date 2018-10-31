import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as burgerBuilderActions from './../../store/actions';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import axios from './../../axios-orders';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).reduce((sum, key) => sum + ingredients[key], 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.history.push({
            pathname: '/checkout'
        });
    }

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(({data}) => {
        //         this.setState({ ingredients: data });
        //     })
        //     .catch(console.log);
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = null;
        if (this.props.ingredients) {
            orderSummary = <OrderSummary 
                            price={this.props.totalPrice}
                            ingedients={this.props.ingredients}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler} />;
                
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls 
                        price={this.props.totalPrice}
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientDeleted={this.props.onIngredientRemoved}
                        disabledInfo={disabledInfo} 
                        purchasable={this.updatePurchaseState(this.props.ingredients)} 
                        ordered={this.purchaseHandler} />
                </React.Fragment>
            );
        } else {
            burger = <Spinner />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <React.Fragment>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
    onIngredientAdded: (ingredient) => dispatch(burgerBuilderActions.addIngredient(ingredient)),
    onIngredientRemoved: (ingredient) => dispatch(burgerBuilderActions.removeIngredient(ingredient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));