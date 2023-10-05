import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (<section className='section py-20' id='contact'>
    <div className='container mx-auto min-h-[100vh]'>
      <div className='flex flex-col lg:flex-row'>

         <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}} 
         className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-3xl uppercase text-accent font-medium mb-2'>Get in touch
            </h4>
            <div className='flex items-center'>
            <FaPhone className='text-accent'/> :  +2349072516736
            </div>
            <div className="flex items-center">
            <FiMail className='text-accent' /> :  nwakodoifeanyi21@gmail.com
            </div>
           
            <h2 className='text-[20px] lg:text-[60px] leading-none mb-12'>
              Let's work <br/> together!
             </h2>
          </div>
         </motion.div>
               



         <motion.form 
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}} 
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
           <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent tranition-all' 
           type= 'text' 
           placeholder='Your name'/>
           <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent tranition-all' 
           type= 'email' 
           placeholder='Your email'/>

           <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent tranition-all mb-12'
           placeholder='Send me a message'></textarea>
           <a href="mailto:nwakodoifeanyi21@gmail.com">
           <button className='btn btn-lg'>Send Message</button>
            </a>
         </motion.form>
       </div>
     </div> 
    </section>);
};

export default Contact;
