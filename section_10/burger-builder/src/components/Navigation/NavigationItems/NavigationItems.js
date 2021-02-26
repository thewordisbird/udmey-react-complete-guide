import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem route="/" active>Burger Builder</NavigationItem>
    <NavigationItem route="/" >Checkout</NavigationItem>
  </ul>
);

export default navigationItems;