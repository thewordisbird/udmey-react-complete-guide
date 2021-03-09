import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
    }
  }

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
};
  
export const initIngredients = () => {
  console.log('[actions/burgerBuilder]')
  return dispatch => {
    console.log('[actions/burgerBuilder, dispatch]')
    axios.get('/ingredients.json')
    .then(resp => {
      console.log('[actions/burgerBuilder, Success]', resp.data)
      dispatch(setIngredients(resp.data));
    })
    .catch(error => {
      console.log('[actions/burgerBuilder, Error]', error)
      dispatch(fetchIngredientsFailed())
    })
  }
}