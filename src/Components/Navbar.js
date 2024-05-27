import React, { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { NavLink } from 'react-router-dom';







function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    
  return (
       <section className=' bg-white p-1 px-5 lg:mt-2'>
        <div className=' p-2  lg:flex justify-between flex'>
            <div className=' flex cursor-pointer items-center'> 
                <img src='https://orido-react.vercel.app/img/logo/logo.png' alt='logo' className='h-10'></img>
                

                
             

            
            </div>

           
            <div className=' space-x-6 items-center text-lg mt-2 text-black hidden md:block md:w-auto' >
                <NavLink exact to='/' activeclclassName='active'  className='my-navbar hover:border-b hover:border-purple-900 hover:text-purple-900'>Home</NavLink>
                <NavLink to='/about'  activeclclassName='active' className='my-navbar hover:border-b hover:border-purple-900 hover:text-purple-900'>About</NavLink>
                <NavLink to='/skills' activeclclassName='active'  className='my-navbar hover:border-b hover:border-purple-900 hover:text-purple-900'>Skills</NavLink>
                <NavLink to='/myprojects' activeclclassName='active'  className='my-navbar hover:border-b hover:border-purple-900 hover:text-purple-900'>Project</NavLink>
                <NavLink to='/contact' activeclclassName='active'  className='my-navbar hover:border-b hover:border-purple-900 hover:text-purple-900'>Contact</NavLink>
            </div>
            <div className='lg:flex px-4 bg-purple-600 text-white rounded-md hidden md:block'>
                <button className=''>
                    My purchase
                </button>

            </div>

            
                    {/* toggelbutton */}
                    <div className='md:hidden  h-12 md:-full z-10 '>
                <button onClick={toggleMenu} 
            className='text-purple-600 focus:outline-none mt-3 ml-16 text-3xl  md:mr-5 '>
                <CgMenuGridO  className=' '/> </button>
        
        {isOpen && (
        <div className='grid text-white bg-purple-600 py-5 space-y-5 
        absolute left-0 items-center w-full transform-cpu transition-all'>
          <a href='/' className='text-center hover:text-black'>Home</a>
          <a href='/about' className='text-center hover:text-black'>About</a>
          <a href='/skills' className='text-center hover:text-black'>Skills</a>
          <a href='/mobileprojectsec' className='text-center hover:text-black'>Project</a>
          <a href='/contact' className='text-center hover:text-black'>Contact</a>
          <button className='px-4  rounded-md'>My purchase</button>
        </div>
        
       
    
      )}
      
        </div>
                
           
            
            
        </div>

       </section>
  )
}

export default Navbar
