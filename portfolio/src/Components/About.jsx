import React from 'react'
import AboutImage from '../assets/port-image.jpg'

export const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt=""
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                <div className='flex-1'>
                <p className='text-lg mb-8'> 
           I am a passionate computer science student with a keen interest in web development.
           My journey into technology began with a curiosity for how things work, and it has 
           evolved into a commitment to creating user-friendly, dynamic web experiences. 
           I enjoy combining my programming skills with creative design to build websites that
           not only function seamlessly but also engage and inspire users. As I continue to learn
           and grow in this fast-paced field, I’m excited to take on new challenges and 
           contribute to innovative projects that make a difference.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss">HTML && CSS </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                            rounded-full transform transition-transform duration-300 hover:scale-105
                            w-11/12'>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss">
                           React JS
                            </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                            rounded-full transform transition-transform duration-300 hover:scale-105
                            w-10/12'>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss">Node JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                            rounded-full transform transition-transform duration-300 hover:scale-105
                            w-9/12'>
                            </div>
                        </div>
                    </div>
                   </ div >
                </div>
            </div>
        </div>
    </div>
    )
};

export default About;

