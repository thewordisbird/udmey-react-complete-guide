import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prevState => {
      return !prevState
    })
  }
  
  return (
    <>
      <Toolbar isAuth={props.isAuthenticated} drawerToggleClicked={sideDrawerToggleHandler}/>
      <SideDrawer isAuth={props.isAuthenticated} open={showSideDrawer} closed={sideDrawerClosedHandler}/>
      <main className={classes.Content}>
      {props.children}
      </main>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token 
  }
}

export default connect(mapStateToProps)(Layout);