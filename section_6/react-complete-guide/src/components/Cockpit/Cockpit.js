
import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect')
    const timer = setTimeout(() => {
      alert('Saved data to cloud')
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
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
        className={btnClass} 
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
}

// User React.memo to optimize the component to only re-render when changed
export default React.memo(cockpit);