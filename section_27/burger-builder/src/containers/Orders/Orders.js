import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'

import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner'

import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = (props) => {
  const { onFetchOrders, token, userId, loading, orders} = props
  useEffect(() => {
    onFetchOrders(token, userId)
  }, [onFetchOrders, token, userId])
  
  const userOrders = loading 
    ? <Spinner /> 
    : (
      <div>
        {orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
        ))}
      </div>
    ) 
    
  return (
    <>
      {userOrders}
    </>
  );
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDipsatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDipsatchToProps)(withErrorHandler(Orders, axios));