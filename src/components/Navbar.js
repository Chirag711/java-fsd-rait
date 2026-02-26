import React from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='border-b bg-background'>
        <div className='container mx-auto flex items-center justify-between py-4'>
          <div className='text-xl font-bold'>MyApp</div>
          <div className='space-x-4'>
            <Link href="/" className='text-gray-600 hover:text-gray-400'>Home</Link>
            <Link href="/about" className='text-gray-600 hover:text-gray-400'>About</Link>
            <Link href="/contact" className='text-gray-600 hover:text-gray-400'>Contact</Link>
            <Link href="/login" className='text-gray-600 hover:text-gray-400'>Login</Link>
            <ThemeToggle/>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar

/*
logo
links
theme toggle
*/
