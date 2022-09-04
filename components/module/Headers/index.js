import React from 'react'
import Link from 'next/link'

const Headers = () => {
  return (
    <header className='flex flex-row w-100 h-24 px-16 items-center shadow-sm'>
        <div>
          <h1 className='font-extrabold text-3xl font-serif '>Shy<span className='text-red-700'>:</span>&#47;&#47;</h1>
        </div>
        <div className='ml-auto flex items-center'>
          <ul className='flex gap-3 text-slate-500'>
            <li className='hover:text-black cursor-pointer'>About</li>
            <li className='hover:text-black cursor-pointer'>Docs</li>
            <li className='hover:text-black cursor-pointer' >Contact</li>
          </ul>
          <Link href={"/login"} >
            <span className="cursor-pointer uppercase ml-5 px-3 py-2 text-sm rounded-md text-white bg-red-700 hover:bg-red-900 focus:text-white focus:bg-red-900">
              Login
            </span>
          </Link>
        </div>
      </header>
  )
}

export default Headers