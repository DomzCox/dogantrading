import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-row pt-24">
        

    <div className="m-1 basis-1/4 p-4 border-spacing-4">
    <h2 className="font-bold text-teal-600">
            Connect
        </h2>
        <ol>
            <li>Facebook </li>
            <li>Instagram </li>
            <li>Twitter</li>
            <li>Instagram </li>
        </ol>
    </div>

    <div className="m-1 basis-1/4 p-4 border-spacing-4">
    <h2 className="font-bold text-teal-600">
            Contact
        </h2>
        <ol className="font-semibold">
            info@telachtrading.com
        </ol>
    </div>

    <div className="m-1 basis-1/4 p-4 border-spacing-4">
    <h2 className="font-bold text-teal-600">
            Grow
        </h2>
        <ol>
            Get the Ebook. Plug your trading leaks!
        </ol>
    </div>

    
</div>
  )
}
