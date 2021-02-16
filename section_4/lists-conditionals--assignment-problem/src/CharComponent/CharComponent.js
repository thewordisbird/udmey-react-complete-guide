import React from 'react';
import './CharComponent.css'

const CharComponent = ({ char, handleClick}) => (
  <div className="Char-box" onClick={handleClick}>
    {char}
  </div>
)

export default CharComponent