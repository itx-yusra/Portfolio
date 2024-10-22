

import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false); 
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true); 


    setTimeout(() => {
      setIsSubscribed(false);
      setEmail(''); 
    }, 3000); 
  };

  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
          <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl font-bold mb-2'>Yusra</h3>
            <p className='text-yellow-900'>
            "Crafted with passion and precision by Yusra, where innovation meets creativity."
            </p>
          </div>
          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className='flex items-center justify-center'>
              <input
                type="email"
                placeholder="Enter Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-600'
                required
              />
              <button
                type='submit'
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <p className='text-green-400 mt-4'>Subscribed!</p>  
            )}
          </div>
        </div>

        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Yusra. All rights reserved.
          </p>
          <div className='flex space-x-4 my-4 md:my-0'>
            <a href="#" className='text-gray-400 hover:text-white'>
              <FaLinkedin />
            </a>
            <a href="#" className='text-gray-400 hover:text-white'>
              <FaGithub />
            </a>
            <a href="#" className='text-gray-400 hover:text-white'>
              <FaInstagram />
            </a>
          </div>
          <div className='flex space-x-4'>
            <a href="#" className='text-gray-400 hover:text-white'>
              Privacy
            </a>
            <a href="#" className='text-gray-400 hover:text-white'>
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


