import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Topnav() {
  return (
    <>
    
    <div className="container flex flex-row">
    <h1 className="text-4xl mr-20 text-teal-900 font-bold pt-2 mt-3">TelAch-Trading</h1>
      <div className="m-3 p-3 font-semibold underline">
        <Link to="/">
          Home
        </Link>
      </div>

      <div className="m-3 p-3 font-semibold underline">
        <Link to="about">
          About
        </Link>
      </div>

      <div className="m-3 p-3 font-semibold underline">
        <Link to="help">
          Help
        </Link>
      </div>

      <div className="m-3 p-3 font-semibold underline">
        <Link to="shop">
          Shop
        </Link>
      </div>

    </div>

    
      <Outlet />
    
    </>
  )
}
