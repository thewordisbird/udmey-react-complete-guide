import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        )
    })

  return (
    <>
      <h3>Your Order</h3>
      <p>Delicous Burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>{props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </>
  )
}

export default OrderSummary;