import React, { useState } from 'react'

const BatchingUpdates = () => {
  let [value, setValue] = useState("loading");
  
  function onStart() { 
    setTimeout(() => { 
      for (let index = 0; index < 100; index++) {
        setValue(`value ${index + 1}`);        
      }
    }, 1);
  }
  return (
    <div>
      <p>
        Value: <em>{value}</em>
      </p>
      <button onClick={onStart}>start</button>
    </div>
  )
}

export default BatchingUpdates