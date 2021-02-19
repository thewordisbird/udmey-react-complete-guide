
import React, { useContext, useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  
  const authContext = useContext(AuthContext)

  console.log(authContext.authenticated)
  
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect')
    toggleBtnRef.current.click();
    
  }, [])

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  console.log(btnClass)
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
      ref={toggleBtnRef}
        className={btnClass} 
        onClick={props.clicked}>
          Toggle Persons
        </button>
          {<button onClick={authContext.login}>Log in</button>}

        
    </div>
  )
}

// User React.memo to optimize the component to only re-render when changed
export default React.memo(cockpit);