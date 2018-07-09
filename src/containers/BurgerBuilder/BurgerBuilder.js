import React, { Component } from 'react';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 0
    }

    addIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        const newPrice = parseFloat((this.state.totalPrice + INGREDIENT_PRICES[type]).toFixed(2));
        
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    }

    removeIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        if (updatedIngredients[type] > 0) {
            updatedIngredients[type] = this.state.ingredients[type] - 1;
            const newPrice = parseFloat((this.state.totalPrice - INGREDIENT_PRICES[type]).toFixed(2));
        
            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        }
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
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                price={this.state.totalPrice}
                ingredientAdded={this.addIngredientHandler}
                ingredientDeleted={this.removeIngredientHandler}
                disabledInfo={disabledInfo} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;