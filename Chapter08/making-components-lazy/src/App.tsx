import React, { lazy } from 'react'

const MyComponent = lazy(() => import('./MyComponent'));

const App = () => {
  return (
    <MyComponent/>
  )
}

export default App