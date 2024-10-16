import React from 'react'


export default function Shop() {
  return (
    <div className="container">
        <h1 className="text-2xl pt-10 text-teal-950 py-10 text-center">
            Trade Shop!
        </h1>
            <ol className="flex justify-evenly gap-3">
                <li>
                    <h2 className="underline">T-Shirts</h2>
                    <div className="border-solid mt-10">
                        <img src="https://placehold.co/400" alt="" />
                    </div>
                </li>
                <li>
                <h2 className="underline">Mugs</h2>
                    <div className="border-solid mt-10">
                        <img src="https://placehold.co/400" alt="" />
                    </div>
                    </li>
                <li>
                <h2 className="underline">Bennies</h2>
                <div className="border-solid mt-10">
                        <img src="https://placehold.co/400" alt="" />
                    </div>
                </li>
            </ol>
        
    </div>
  )
}
