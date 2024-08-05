import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector(
    ({state}: {state: {count: number}}) => state.count);
  const dispatch = useDispatch();


  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({type: 'INCREMENT'})}></button>
    </div>
  )
}

export default Counter