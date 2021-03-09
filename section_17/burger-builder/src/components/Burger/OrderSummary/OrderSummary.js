import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

  // componentDidUpdate () {
  //   console.log('OrderSummary updated')
  // }

    render() {
      const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        )
    })

      return (
        <>
          <h3>Your Order</h3>
          <p>Delicous Burger with the following ingredients</p>
          <ul>
            {ingredientSummary}
          </ul>
          <p><strong>{this.props.price.toFixed(2)}</strong></p>
          <p>Continue to checkout?</p>
          <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </>
      )
    }
  
}


export default OrderSummary;