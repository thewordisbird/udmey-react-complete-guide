import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'; // Can ommit index
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  }

  componentDidMount() {
    console.log('[BurgerBuilder, componentDidMount]',this.props)
    this.props.onInitIngredients()
    
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => sum + el, 0)
      return sum > 0
    }
    
  purchaseHandler () {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinuedHandler = () => {
    this.props.onInitPurchase()
    this.props.history.push('/checkout')
  }

  render () {
    const disabledInfo = {
      ...this.props.ings
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key]<= 0
    }

    let orderSummary = null
    let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;   

    // let burger = ;
    if (this.props.ings)  {
      console.log('[BurgerBuilder]', this.props.ings)
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls 
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemove}
            disabled={disabledInfo}
            ordered={this.purchaseHandler.bind(this)}
            purchasable={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            />   
        </>
      );
      orderSummary = <OrderSummary 
        ingredients={this.props.ings}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinuedHandler}
        price={this.props.price}
      />
    } 

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemove: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));