import React from 'react'
import { RiShareCircleLine } from "react-icons/ri";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



function Hero() {
  return (
    <div className=' lg:flex lg:p-8 lg:mt-5 lg:pb-0'>
      <div className='grid grid-cols-2'>
      <div className=' mt-10 ml-5 lg:mt-40'>
        <h1 className='lg:text-5xl text-2xl font-semibold text-left'>John Smith </h1>
        <h1 className='text-left text-xs lg:text-2xl '>_______  Visual Designer</h1>
        <br/>
        
        <p className=' text-left w-auto justify text-xs lg:text-2xl'>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
        <br/>
        <br/>

        <div className='lg:flex hidden px-5'>
        <button className='flex border-2 
        px-3 
        text-white bg-purple-600

        p-4 rounded-md hover:text-white hover:bg-black'>
          Say Hello <RiShareCircleLine className='mt-1 ml-1'/>

        </button>
        <button className='flex p-2 rounded ml-8 mt-2 cursor-pointer'>
          My work <RiShareCircleLine className='mt-1 ml-1'/>

        </button>
        </div>
        
      
      </div>
      <div className=''>
        <img src='https://orido-react.vercel.app/img/hero/1.jpg' alt='Jhon Image'
        className='lg:w-full lg:h-full'
        ></img>
        </div>
      </div>
      <div className='flex justify-between px-10 w-[75%] lg:hidden  '>
<button className='flex px-3 border-black p-2  rounded-md
text-white hover:bg-black bg-purple-600'>
  Say Hello <RiShareCircleLine className='mt-1 ml-1'/>

</button>
<button className='flex p-2 cursor-pointer text-bottom'>
 My work <RiShareCircleLine className='mt-1 ml-1'/>

</button>

</div>
<div className='flex lg:hidden mt-8  w-[75%] justify-between px-10 pb-3'>
<p>Follow me: </p>
<FaBehanceSquare className='text-xl rounded text-purple-700'/>
<FaLinkedin className='text-xl rounded text-purple-700'/>
<FaInstagramSquare className='text-xl rounded text-purple-700'/>



</div>
       

    </div>
  )
}

export default Hero


