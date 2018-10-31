import * as actionTypes from './../actions/actionsTypes';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 0
};

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.3,
    meat: 0.9,
    bacon: 0.8,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                },
                totalPrice: parseFloat((state.totalPrice + INGREDIENT_PRICES[action.ingredient]).toFixed(2))
            };
        case actionTypes.REMOVE_INGREDIENT:
            if (state.ingredients[action.ingredient] <= 0) return state;
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] - 1
                },
                totalPrice: parseFloat((state.totalPrice - INGREDIENT_PRICES[action.ingredient]).toFixed(2))
            };
        default:
            return state;
    }
};