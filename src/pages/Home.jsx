import React from 'react'
import Landing from '../shared/components/Landing'
import { EbookForm } from '../shared/components/EbookForm'


export default function Home() {
  return (
    <div className='container'>
        <Landing />
        <h1 className="text-5xl text-teal-900 font-bold text-center mt-28">
        Inspired by beginner traders just like you"
      </h1>

     
      
      <div className="text-center mt-16">
        <label className="mr-10 text-2xl">
          Get the free ebook
        </label>
        <input className="rounded border-2 border-teal-700 p-3 border-dashed center" type="text" placeholder="email@emailaddressdotdomain"/>
        <button className="ml-10 text-2xl text-teal-100 p-3 bg-teal-800">
          Get Ebook!
        </button>
      </div>

      
      </div>
  )
}
