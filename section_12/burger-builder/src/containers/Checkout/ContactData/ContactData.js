import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({loading: true})
    
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Justin Bird',
        address: {
          street: 'Test Street',
          zipCode: '12345',
          country: 'Germany'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
  
    
    axios.post('/orders.json', order)
    .then(resp => {
      this.setState({loading: false})
      console.log(resp)
      this.props.history.push('/')
    })
    .catch(error => {
      this.setState({loading: false})
      console.log(error)
    })
  }

  render () {
    let form = (
      <form>
        <input type='text' name="name" placeholder="Name" />
        <input type='email' name="email" placeholder="Email@email.com" />
        <input type='text' name="street" placeholder="Auckland Ave." />
        <input type='text' name="postalCOde" placeholder="91601" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form=<Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4> Enter your contact data</h4>
        {form}
      </div>
    )
  }

}

export default ContactData