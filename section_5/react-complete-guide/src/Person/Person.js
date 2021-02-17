import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`

// import './Person.css'
const person = ({ name, age, handleClick, handleChange, children}) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={handleClick}>I am {name} and I am {age} old</p>
      <p>{children}</p>
      <input type="text" onChange={handleChange} defaultValue={name}/>
    </StyledDiv>
     
    
  )
}

export default person;