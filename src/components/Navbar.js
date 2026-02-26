import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div>
      <nav className='border-b bg-background'>
        <div className='container mx-auto flex items-center justify-between py-4'>
          <div className='text-xl font-bold'>MyApp</div>
          <div className='space-x-4'>
            <a href="#" className='text-gray-600 hover:text-gray-400'>Home</a>
            <a href="#" className='text-gray-600 hover:text-gray-400'>About</a>
            <a href="#" className='text-gray-600 hover:text-gray-400'>Contact</a>
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
