import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../reducers/utility'

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const purchaseBugerInit = (state, action) => {
  return updateObject(state, {purchased: false})
}

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, {laoding: true})
}

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {id: action.orderId})  
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
      }
    )
}

const purchaseBurgerFail = (state, action) => {
  return {
    ...state,
    loading: false
  }
}

const fetchOrderStart = (state, action) => {
  return updateObject(state, {laoding: true})
}

const fetchOrderSuccess = (state, action) => {
  return updateObject(state, {purchased: {orders: action.orders, loading: false}})
}

const fetchOrderFail = (state, action) => {
  return updateObject(state, {loading: false})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT: return purchaseBugerInit (state, action)
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action)
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action)
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action)

    case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state, action)
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action)
    case actionTypes.FETCH_ORDERS_FAIL: return fetchOrderFail(state, action)
      
    default: return state
  }
}

export default reducer