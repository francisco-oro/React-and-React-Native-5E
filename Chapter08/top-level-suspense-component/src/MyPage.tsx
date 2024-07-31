import React, { lazy } from 'react'

const MyFeature = lazy(() => import('./MyFeature'));
const MyPage = () => {
  return (
    <>
    <div>MyPage</div>
    <MyFeature/>
    </>
  )
}

export default MyPage