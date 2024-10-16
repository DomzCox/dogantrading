import React from 'react'


export default function Contact() {
  return (
    <div className="container text-center">
              <h1 className="mt-10 text-2xl">Contact us</h1>

          <div className=''>
            <label htmlFor="name">Name: </label>
            <input className="border-2" type="text" placeholder='Name'/>
            
          </div>
          <div>
            <label htmlFor="email">Email: </label>
          <input className="border-2" type="text" placeholder='Name'/>
            
          </div>
          <div>
            <label htmlFor="message">Your message: </label>
          <textarea className="border-2" />
          </div>

          <div>
            <button className="mt-10">
              Send Message
            </button>
          </div>
    </div>
  )
}
