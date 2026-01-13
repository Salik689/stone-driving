import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-16 z-50 
                       backdrop-blur-md bg-white/10 shadow-md
                       flex justify-between items-center px-6 transition-all ">
  <div className="logo "><Image src="/image/logo-icon.png" alt="Logo" width={75} height={75} /></div>
  <nav>
    <ul className="flex gap-5 text-black font-medium">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/courses">Courses</Link></li>
    </ul>
  </nav>
</header>

    )
}

export default Navbar
