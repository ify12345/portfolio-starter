import React from 'react';
import {GiCrown} from "react-icons/gi"
import { Link } from 'react-router-dom';


const Headers = () => {
  return <header className='py-8 h-[80px] mb-10'>
     <div className='container mx-auto'>


      <div className='flex justify-between items-center'>  
       <div className='text-2xl'><Link className='cursor-pointer text-pink-300'><GiCrown size={60}/></Link></div>

         <div className='flex gap-x-8'>
        <Link to="/" className=''>About</Link>
        <Link to="/" className=''>Projects</Link>
        <Link to="/" className=''>Contacts</Link>

         </div>
      </div>


     </div>
  
  
  </header> ;
};

export default Headers;
