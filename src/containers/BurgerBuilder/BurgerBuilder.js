import React, { Component } from 'react';
import axios from './../../axios-orders';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.3,
    meat: 0.9,
    bacon: 0.8,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: undefined,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).reduce((sum, key) => sum + ingredients[key], 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        const newPrice = parseFloat((this.state.totalPrice + INGREDIENT_PRICES[type]).toFixed(2));
        
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        if (updatedIngredients[type] > 0) {
            updatedIngredients[type] = this.state.ingredients[type] - 1;
            const newPrice = parseFloat((this.state.totalPrice - INGREDIENT_PRICES[type]).toFixed(2));

            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
            this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let key in this.state.ingredients) {
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(this.state.ingredients[key])}`);
        }
        queryParams.push(`price=${this.state.totalPrice}`);
        const queryString = `?${queryParams.join('&')}`;

        this.props.history.push({
            pathname: '/checkout',
            search: queryString
        });
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(({data}) => {
                this.setState({ ingredients: data });
            })
            .catch(console.log);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = null;
        if (this.state.ingredients) {
            orderSummary = <OrderSummary 
                            price={this.state.totalPrice}
                            ingedients={this.state.ingredients}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler} />;
                
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        price={this.state.totalPrice}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientDeleted={this.removeIngredientHandler}
                        disabledInfo={disabledInfo} 
                        purchasable={this.state.purchasable} 
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

export default withErrorHandler(BurgerBuilder, axios);