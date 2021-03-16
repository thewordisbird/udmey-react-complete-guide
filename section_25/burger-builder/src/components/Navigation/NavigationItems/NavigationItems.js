import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem route="/">Burger Builder</NavigationItem>
    {props.isAuth 
      ? <NavigationItem route="/orders" >Orders</NavigationItem> 
      : null}
    
    {props.isAuth 
      ? <NavigationItem route="/logout" >Logout</NavigationItem>
      : <NavigationItem route="/auth" >Authenticate</NavigationItem>
    }
    
  </ul>
);

export default navigationItems;