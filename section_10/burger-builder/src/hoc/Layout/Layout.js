import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => (
      {
        ...prevState,
        showSideDrawer: !prevState.showSideDrawer
      }
    ))
  }
  render() {
    return (
      <>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
    <main className={classes.Content}>
      {this.props.children}
    </main>
  </>
    )
  }
  
}

export default Layout;