// import React from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// export const Contact = () => {
//     return (
//         <div className='bg-black text-white py-20' id='contact'>
//             <div className='container mx-auto px-8 md:px-16 lg:px-24'>
//                 <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
//                 <div className='flex flex-col md:flex-row items-start md:space-x-12'>
                    
//                     <div className='flex-1'>
//                         <h3>Let's Talk</h3>   
//                         <p>I am open to discussing web development projects or partnership opportunities.</p>
//                         <div className='mb-4 mt-8'>
//                             <FaEnvelope className="inline-block text-green-600 mr-2" /> 
//                             <a href="mailto:yusrashahzad342@gmail.com" className='hover:underline'>yusrashahzad342@gmail.com</a>
//                         </div> 

//                         <div className='mb-4 mt-8'>
//                             <FaPhone className="inline-block text-green-600 mr-2" /> 
//                             <span>+923105223372</span>
//                         </div>

//                         <div className='mb-4 mt-8'>
//                             <FaMapMarkerAlt className="inline-block text-green-600 mr-2" /> 
//                             <span>Punjab, Pakistan</span>
//                         </div>
//                     </div>

//                     <div className='flex-1 w-full'>
//                         <form className='space-y-4'>
//                             <div>
//                                 <label htmlFor="name" className='block mb-2'>Your Name</label>
//                                 <input type="text" id="name" className='w-full p-2 rounded bg-gray-800 border
//                                 border-gray-600 focus:outline-none focus:border-green-600'
//                                 placeholder="Enter Your Name" />
//                             </div>

//                             <div>
//                                 <label htmlFor="email" className='block mb-2'>Email</label>
//                                 <input type="email" id="email" className='w-full p-2 rounded bg-gray-800 border
//                                 border-gray-600 focus:outline-none focus:border-green-600'
//                                 placeholder="Enter Your Email" />
//                             </div>

//                             <div>
//                                 <label htmlFor="message" className='block mb-2'>Message</label>
//                                 <textarea id="message" className='w-full p-2 rounded bg-gray-800 border
//                                 border-gray-600 focus:outline-none focus:border-green-600'
//                                 placeholder="Enter Your Message" />
//                             </div>
//                             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//                             transform transition-transform duration-300 hover:scale-105 px-4 rounded-full'>Send</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh

        // Here, you would typically send formData to your server or API
        console.log('Form submitted:', formData);

        // Reset form fields if needed
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        
        // Optionally, show a success message
        alert('Message sent successfully!');
    };

    return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-start md:space-x-12'>
                    
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>   
                        <p>I am open to discussing web development projects or partnership opportunities.</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className="inline-block text-green-600 mr-2" /> 
                            <a href="mailto:yusrashahzad342@gmail.com" className='hover:underline'>yusrashahzad342@gmail.com</a>
                        </div> 

                        <div className='mb-4 mt-8'>
                            <FaPhone className="inline-block text-green-600 mr-2" /> 
                            <span>+923105223372</span>
                        </div>

                        <div className='mb-4 mt-8'>
                            <FaMapMarkerAlt className="inline-block text-green-600 mr-2" /> 
                            <span>Punjab, Pakistan</span>
                        </div>
                    </div>

                    <div className='flex-1 w-full'>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-600'
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className='block mb-2'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-600'
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-600'
                                    placeholder="Enter Your Message"
                                    required
                                />
                            </div>
                            <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 rounded-full'>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
