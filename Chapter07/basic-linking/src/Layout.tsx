import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
      <p>
        <Link to={'first'}>First</Link>
      </p>
      <p>
        <Link to={'second'}>Second</Link>
      </p>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default Layout