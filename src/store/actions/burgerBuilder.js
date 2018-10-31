import * as actionTypes from './actionsTypes';
import axios from './../../axios-orders';

export const addIngredient = (ingredient) => ({
    type: actionTypes.ADD_INGREDIENT,
    ingredient
});

export const removeIngredient = (ingredient) => ({
    type: actionTypes.REMOVE_INGREDIENT,
    ingredient
});

const setIngredients = (ingredients) => ({
    type: actionTypes.SET_INGREDIENTS,
    ingredients
});

export const initIngredients = () =>
                                dispatch => {
                                    axios.get('/ingredients.json')
                                        .then(({data}) => {
                                            dispatch(setIngredients(data));
                                        })
                                        .catch(console.log);
                                };