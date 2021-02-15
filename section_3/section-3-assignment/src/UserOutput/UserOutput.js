import React from 'react';
import './UserOutput.css';

const userOutput = ( {userName }) => {
  return (
    <div className="UserOutput">
      { userName }
      <p>This is the 1st paragraph in user output</p>
      <p>This is the 1st paragraph in user output</p>
    </div>
  )
}

export default userOutput