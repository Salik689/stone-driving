"use client"
import React from 'react'
import './Navbar.css';
import { useState } from 'react';
import { useRef } from "react";
import Image from 'next/image';

const Navbar = () => {
  const [menu, setmenu] = useState(false)
  const menuRef = useRef(null);

  function toggleMenu() {
    setmenu(!menu)

  }
  return (
    <>
      <header className=' backdrop-blur-md bg-white/10 shadow-md' >
        <div className="logo"><Image src="/image/logo.png" alt="Logo" width={75} height={75} /></div>
        <nav className='desktop-nav' >
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className=" menuBtns menu-openBtn" onClick={toggleMenu} >
         <Image src="/image/ui/menu.png" alt="menu" width={50} height={50} />
        </button>
        <nav ref={menuRef} className={` mobile-nav ${menu ? 'open-menu' : 'close-menu'}`}>
          <button className=" menuBtns menu-closeBtn" onClick={toggleMenu} >
            <Image src="/image/ui/close.png" alt="menu" width={50} height={50} />
          </button>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
