import React from 'react';
import webpageImage from "../assets/webpageImage.jpg";
import registrationformImage from "../assets/registrationformImage.webp";
import apiwebsiteImage from "../assets/apiwebsiteImage.jpg";

 const projects = [
  {
    id: 1,
    name: "Web Page",
    image:  webpageImage,
    github: "https://itx-yusra.github.io/Web-Page/",
  },
  {
    id: 2,
    name: "Registration Form",
    image:  registrationformImage,
    github: "https://itx-yusra.github.io/Registration-Form/",
  },
  {
    id: 3,
    name: "API Website",
    image:  apiwebsiteImage,
    github: "https://itx-yusra.github.io/API-Website/",
  },

]
export const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
            transform transition-transform duration-300 hover:scale-105'>
              <img src={project.image} alt={project.name} className='rounded-lg mb-4
              w-full h-48 object-cover' />
              <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
              <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500
              text-white px-4 py-2 rounded-full' target="_blank" ral="noopener noreferrer">GitHub</a>
              </div>
          )
          )}

            </ div>
         </ div>
    </ div>
  )
}

export default Projects;
