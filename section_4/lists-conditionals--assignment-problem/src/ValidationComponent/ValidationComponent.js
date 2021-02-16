import React from 'react';

const ValidationComponent = ({strLength}) => {
  console.log(strLength)
  return (
    <p>{ strLength < 5 || strLength === undefined ? "Text too short" : "Text long enough"}</p>
  )
}

export default ValidationComponent;