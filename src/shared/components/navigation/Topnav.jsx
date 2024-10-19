
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Topnav() {

  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <>
    
    <div className="container flex bg-slate-400 sm:bg-neutral-50 relative">
    <h1 className="text-4xl mr-20 text-teal-900 font-bold pt-2 text">TelAch</h1>
      <div className="absolute flex justify-between w-1/2 right-0">

          <i className="hover:cursor-pointer absolute right-0 py-5 px-5 bx bx-menu sm:hidden" onClick={ () => setIsOpen(!isOpen)}></i>

                      
            <div className="hidden sm:flex">

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

                  {/*Hidable dropdown menu */}
                    
              <div className={`bg-teal-600 text-teal-50 absolute top-12 left-0 w-full flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform xl:hidden ${isOpen ? "opacity-100" : "opacity-0"}`}>
                <li className="list-none hover:bg-teal-500 w-full text-center px-3 py-3">
                <Link to="/" onClick={ () => setIsOpen(false)}>Home</Link>
                </li>
                <li className="list-none hover:bg-teal-500 w-full text-center px-3 py-3">
                <Link to="about" onClick={ () => setIsOpen(false)}>About</Link>
                </li>
                <li className="list-none hover:bg-teal-500 w-full text-center px-3 py-3">
                <Link to="help" onClick={ () => setIsOpen(false)}>Help</Link>
                </li>
                <li className="list-none hover:bg-teal-500 w-full text-center px-3 py-3">
                <Link to="shop" onClick={ () => setIsOpen(false)}>Shop</Link>
                </li>
              </div>


          </div>

   

    </div>

    
      <Outlet />
    
    </>
  )
}
