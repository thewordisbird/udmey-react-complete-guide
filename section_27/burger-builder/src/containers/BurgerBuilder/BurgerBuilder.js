import React, { useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from '../../store/actions/index'; // Can ommit index

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const BurgerBuilder = (props) => {
  const { history} = props

  const [purchasing, setPurchasing] = useState(false)

  const dispatch = useDispatch()

  const ings = useSelector( state => {
    return state.burgerBuilder.ingredients
  })

  const price = useSelector (state => {
    return state.burgerBuilder.totalPrice
  })

  const error = useSelector(state => {
    return state.burgerBuilder.error
  })

  const isAuth = useSelector(state => {
    return state.auth.token !== null
  })

  const loading = useSelector(state => {
    return state.order.loading
  })

  const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName))
  const onIngredientRemove = (ingName) => dispatch(actions.removeIngredient(ingName))
  const onInitPurchase = () => dispatch(actions.purchaseInit())
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path))
  const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch])

  useEffect(() => {
    // Initialize the ingredients from database
    onInitIngredients()
  }, [onInitIngredients])
  
  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => sum + el, 0)
      return sum > 0
    }
    
  const purchaseHandler = () => {
    if (isAuth) {
      setPurchasing(true)
    } else {
      onSetAuthRedirectPath('/checkout');
      props.history.push('/auth')
    }    
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false)
  }

  const purchaseContinuedHandler = () => {
    onInitPurchase()
    history.push('/checkout')
  }

  // Refactor to map()
  const disabledInfo = {
    ...ings
  }

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key]<= 0
  }

  let orderSummary = null
  let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />;   

  if (ings)  {
    burger = (
      <>
        <Burger ingredients={ings} />
        <BuildControls 
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemove}
          disabled={disabledInfo}
          ordered={purchaseHandler}
          purchasable={updatePurchaseState(ings)}
          price={price}
          isAuth={isAuth}
          />   
      </>
    );

    orderSummary = <OrderSummary 
      ingredients={ings}
      purchaseCanceled={purchaseCancelHandler}
      purchaseContinued={purchaseContinuedHandler}
      price={price}
    />
  } 

  if (loading) {
    orderSummary = <Spinner />
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth : state.auth.token !== null,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemove: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));