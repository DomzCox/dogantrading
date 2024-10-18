import React from 'react'


export default function Contact() {
  return (
    <div className="container text-center">
              <h1 className="mt-10 text-2xl">Contact us</h1>

          <div className=''>
            <label htmlFor="name">Name: </label>
            <input className="border-2 w-1/2 p-3" type="text" placeholder='Name'/>
            
          </div>
          <div className="mt-5">
            <label htmlFor="email">Email: </label>
          <input className="border-2 w-1/2 p-3" type="text" placeholder='Name'/>
            
          </div>
          <div>
            <div className="mt-5">
            <label htmlFor="message" className="">Your message: </label>
            </div>
            <textarea className="border-2 w-1/2 h-32" />
          </div>

          <div>
            <button className="mt-10 btn">
              Send Message
            </button>
          </div>
    </div>
  )
}
