import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index'

class Logout extends Component {
  componentWillMount() {
    console.log('[Logout, componentDidMount]')
    this.props.onLogout()
  }
  render () {
    console.log('[Logout, render]')
    return (<Redirect to='/' />)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);