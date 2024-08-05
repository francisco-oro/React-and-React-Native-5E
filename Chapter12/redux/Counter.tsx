import { createStore } from 'redux'
import React from 'react'

type Action = { 
  type: "INCREMENT" | "DECREMENT";
};

function counterReducer(state = { count: 0 }, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };      
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

const Counter = () => {
  return (
    <div>Counter</div>
  )
}

export default Counter