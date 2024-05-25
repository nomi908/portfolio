import React from 'react'
import { RiShareCircleLine } from "react-icons/ri";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className='mt-10'>
        <div className='bg-yellow-400  lg:p-10'>
            <div className='flex p-2 justify-between 
            lg:justify-start lg:px-24 '>
            <div>
                <img src='https://orido-react.vercel.app/img/hero/welcome.png'
                alt='image'
                className='animate-spin spintimer lg:w-96' 
                >

                </img>
            </div>
            <div>
                <p className='text-xl font-bold lg:text-6xl'>
                Let's work together
                </p>
                <p className='text-[10px] text-justify p-4 lg:text-2xl'>
                You can express yourself however you want and whenever you want, 
                for free. You can customize a template or make your own
                </p>
            </div>

            
           

            </div>
            {/* //mobile no// */}
            <div className='flex justify-center gap-4 lg:text-4xl lg:gap-20 lg:mt-5'>
                <div>
                    <p className='text-left'>Call</p>
                    <p className='font-semibold '>+1234567899</p>
                </div>
                <div className=''>
                    <p className='text-left'>Email</p>
                    <p  className='font-semibold '>support@outlook.com</p>
                </div>
                


            </div>

            {/* follow me section large screen */}

           <div className='lg:block hidden '>
           <div className='flex mt-16 gap-5 items-center justify-center  pb-3'>
                    <p className='text-3xl'>Follow me: </p>
                    <FaBehanceSquare className='text-3xl rounded'/>
                    <FaLinkedin className='text-3xl rounded'/>
                    <FaInstagramSquare className='text-3xl rounded'/>


                </div>
           </div>

            {/* mobile follw me section */}
            <div className='flex lg:hidden mt-8  w-[10%%]  gap-5 items-center ml-[30%]  pb-3'>
                    <p className=''>Follow me: </p>
                    <FaBehanceSquare className='text-xl rounded'/>
                    <FaLinkedin className='text-xl rounded'/>
                    <FaInstagramSquare className='text-xl rounded'/>



                </div>

        </div>
      
    </div>
  )
}

export default Contact
