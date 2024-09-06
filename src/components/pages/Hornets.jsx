import React from 'react'
import Headers from './Headers'
import { FiGithub, FiGlobe } from 'react-icons/fi'

const Hornets = () => {
  return (
    <div>
       <section >
     <Headers/>

     <div className='mx-32 text-2xl'>
       <h1 className='text-4xl text-center my-6 text-orange-500'>Hornets</h1>
       <p>
         Hornet serves as an application for an upcoming business model to market the biggest the richest honey ever.
         this project was carried out with html,css and javascript alone as it is onkly just a landing page 
         i was given the task to implement a design for thus product.
          
         <div className='flex items-center'>
            <FiGithub/>
          </div>
          <div className='flex items-center'>
          <FiGlobe/> <a href='https://main--incandescent-cascaron-61c6d8.netlify.app/'> Link</a>
          </div> 
       </p>
     </div>
   </section>
    </div>
  )
}

export default Hornets
