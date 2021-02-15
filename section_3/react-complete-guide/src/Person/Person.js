import React from 'react';
import './Person.css'
const person = ({ name, age, handleClick, handleChange, children}) => {
  return (
    <div className="Person">
      <p onClick={handleClick}>I am {name} and I am {age} old</p>
      <p>{children}</p>
      <input type="text" onChange={handleChange} value={name}/>
    </div>
    
  )
}

export default person;