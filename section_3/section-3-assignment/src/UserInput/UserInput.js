import React from 'react';

const style = {
  font: 'inherit',
  border: '1px solid blue'
}
const userInput = ({ userName, handleChane }) => {
  return (
    <div clasName="UserInput">
      <input style={style} type="text" onChange={handleChane} value={userName}/> 
    </div>
  )
}

export default userInput