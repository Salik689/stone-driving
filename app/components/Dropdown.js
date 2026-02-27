"use client"
import React from 'react'
import Link from 'next/link'

const Dropdown = () => {
  return (
   <div className="relative inline-block text-left mr-1">
  <details className="group">
    <summary className="list-none cursor-pointer px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50">
      Resourses
    </summary>

    <div className="absolute md:right-0 mt-2  bg-white border rounded-md shadow-md w-auto ">
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
        Practical Test
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
        Settings
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
        Logout
      </a>
    </div>
  </details>
</div>
  )
}

export default Dropdown
