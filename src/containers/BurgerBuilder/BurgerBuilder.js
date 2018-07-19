import React, { Component } from 'react';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.3,
    meat: 0.9,
    bacon: 0.8,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0,
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
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
        // TODO
        console.log('Continue');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <React.Fragment>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingedients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
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
    }
}

export default BurgerBuilder;