import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className='bg-black text-white shadow-lg'>
      <div className='container mx-auto flex justify-between items-center px-4 py-4'>
        <div className='text-2xl font-bold'>Yusra</div>
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#services" className='hover:text-gray-400'>Services</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
        
        <button className='md:hidden focus:outline-none' onClick={handleToggle}>
          {isOpen ? '✖️' : '☰'} 
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden bg-gray-800 text-yellow-600 absolute right-0 top-0 w-64 border-l border-gray-300 shadow-lg z-50'>
          <button className='absolute top-2 right-2' onClick={handleToggle}>
      ✖️
    </button>
          
          <a href="#home" className='block py-2 px-4 hover:bg-gray-200'>Home</a>
          <a href="#about" className='block py-2 px-4 hover:bg-gray-200'>About Me</a>
          <a href="#services" className='block py-2 px-4 hover:bg-gray-200'>Services</a>
          <a href="#projects" className='block py-2 px-4 hover:bg-gray-200'>Projects</a>
          <a href="#contact" className='block py-2 px-4 hover:bg-gray-200'>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


    