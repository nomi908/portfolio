import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";


function Aboutme() {
  return (
    <div className='bg-purple-600 p-3 py-6 lg:p-10'>
      <div className='grid grid-cols-2 lg:pt-5 lg:px-4 '>
        <div>
            <img src='experience.png ' alt='experience'></img>
        </div>
        <div className='text-white lg:mt-20'>
            <h1 className='text-left font-semibold lg:text-6xl'>About Me ____</h1>
            <br/>
            <p className='text-justify text-xs lg:text-2xl'>With 10 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. 
                I enjoy every step of the design process, from discussion and collaboration.</p>
            
            
                <div className='lg:flex hidden mt-3  '>
            <a href= '/cv.pdf' className=' text-white flex text-2xl bg-yellow-500 px-5 cursor-pointer py-2 items-center mt-3 
            rounded-xl ' download="cv.pdf">
                Download CV  <IoDocumentTextOutline className='ml-1 mt-1'/>

            </a>
            <img src='signature.png' alt='signature'
            className=' ml-2'
            ></img>

            </div>

        </div>

       
      </div>
      
      <div className='flex mt-3 lg:hidden justify-center p-3'>
            <a href='/cv.pdf'  className=' text-white flex hover:bg-black bg-yellow-500 p-1 text-center mt-3 px-2 rounded  '>
                Download CV  <IoDocumentTextOutline className='ml-1 mt-1'/>

            </a>
            <img src='signature.png' alt='signature'
            className='w-24 ml-2'
            ></img>

            </div>
    </div>
  )
}

export default Aboutme
