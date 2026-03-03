"use client"
import React from 'react'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import DownArrowSVG from './DownArrowSVG'
const Dropdown = () => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.removeAttribute('open');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block mr-1 w-50 text-center">
      <details className="Dropdown-wrapper" ref={dropdownRef}>
        <summary className="list-none cursor-pointer px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50 flex items-center gap-1 flex-row text justify-center">
          Resourses
          <DownArrowSVG className="in" />
        </summary>


        <div className="absolute md:right-0 mt-2  bg-white border rounded-md shadow-md w-auto ">
          <a href="/practical-test" className="block px-4 py-2 hover:bg-gray-100">
            Practical Test
          </a>
          <a href="/show-me-tell-me" className="block px-4 py-2 hover:bg-gray-100">
            Show me, tell me
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Theory Test
          </a>
        </div>
      </details>
    </div>
  )
}

export default Dropdown
