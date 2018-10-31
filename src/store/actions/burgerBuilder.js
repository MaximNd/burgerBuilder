import * as actionTypes from './actionsTypes';

export const addIngredient = (ingredient) => ({
    type: actionTypes.ADD_INGREDIENT,
    ingredient
});

export const removeIngredient = (ingredient) => ({
    type: actionTypes.REMOVE_INGREDIENT,
    ingredient
});