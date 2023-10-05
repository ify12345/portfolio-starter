import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; 
import resume from '../assets/MAINRESUME.pdf'
import { Link } from 'react-scroll';
import {BiLogoJavascript, BiLogoReact,BiLogoHtml5,BiLogoTailwindCss,BiLogoCss3,BiLogoBootstrap,BiLogoGit,BiLogoNodejs,BiLogoPython,BiLogoDjango} from "react-icons/bi"

const About = () => {
  const[inView] = useInView({
    threshold: 0.5,
  });

  return (<section className='h-screen py-20 ' id='about' >
    <div className='container mx-auto h-screen grid grid-row-2 '>
      <div className=''>
          <motion.div
           variants={fadeIn('up', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
          className='flex w-full'>

            <div className='w-[50%] flex flex-col gap-4'>
              <h1 className='text-4xl'>
              NWAKODO IFEANYI
              </h1>
             <h1>Front End Developer / JavaScript Fan / React developer</h1>
            </div>
            <div className='w-[50%]'>
            Professionally connected with the web development industry.
            I have spent the past  years Tutoring aspiring web developers on the basics of web devlopment 
            and done a little <Link to=''>projects</Link> for my self .

             Problem solver, well-organised person, loyal employee with high attention to detail.
             Fan of Soccer, Music Production, video games, and coding of course.
              Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
            </div>

           
          </motion.div>


          
             
      </div>

      <div className='flex flex-col gap-8 mt-[-100px]'>
             <motion.div
               variants={fadeIn('right', 0.5)}
               initial='hidden'
               whileInView={'show'}
               viewport={{once: false, amount: 0.7}} 
             className='flex flex-col items-center gap-4'>
             <h1 className='text-4xl text-pink-300'>Skills & Experience</h1>
               The main area of expertise is front end development (client side of the web).
               HTML, CSS, JS, building small and medium web applications with React and React Native, 
               custom plugins, features, animations, and coding interactive layouts. 
               I have also full-stack developer experience with Nodejs and Django
               <h1> Visit my <a className='text-pink-400' href="https://www.linkedin.com/in/ifeanyi-nwakodo-ba689a255">Linkedin </a>for more details.</h1>
               
             </motion.div> 

             <motion.div
              variants={fadeIn('down', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='grid grid-cols-5 z-50'>

                 <div className='flex flex-col items-center relative '>
                   <BiLogoJavascript size={50}/>     
                   <h1>JavaScript</h1>
                </div>     

                 <div className='flex flex-col items-center'>
                   <BiLogoReact size={50}/>     
                   <h1>React</h1>
                </div>

                 <div className='flex flex-col items-center'>
                   <BiLogoHtml5 size={50}/>     
                   <h1>HTML:5</h1>
                </div>          
               
                 <div className='flex flex-col items-center'>
                   <BiLogoTailwindCss size={50}/>     
                   <h1>Tailwind Css</h1>
                </div>          
               
                 <div className='flex flex-col items-center'>
                   <BiLogoCss3 size={50}/>     
                   <h1>Css</h1>
                </div>   

                 <div className='flex flex-col items-center'>
                   <BiLogoBootstrap size={50}/>     
                   <h1>Bootsrap5</h1>
                </div>  

                 <div className='flex flex-col items-center'>
                   <BiLogoGit size={50}/>     
                   <h1>Git</h1>
                </div>     
                    
                 <div className='flex flex-col items-center'>
                   <BiLogoNodejs size={50}/>     
                   <h1>Node.js</h1>
                </div>     

                 <div className='flex flex-col items-center'>
                   <BiLogoPython size={50}/>     
                   <h1>Python</h1>
                </div>   

                 <div className='flex flex-col items-center'>
                   <BiLogoDjango size={50}/>     
                   <h1>Django</h1>
                </div>          
               


            </motion.div>  
           </div>


    </div>
    
    </section>
    );
};

export default About;