import React from 'react'
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";






function Myexperts() {
  return (
    <div>
      <div className=' mt-3 p-5 lg:grid lg:grid-cols-2 lg:p-10 '>
        <div className='text-left'>
            <h1 className='text-2xl lg:text-4xl lg:text-left font-semibold text-center'>My Expert Areas ____</h1> <br/> <br/>
            <p className='text-xs text-justify lg:text-xl'>
            You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with 
            an immersive library at your disposal. You can express yourself however you want and whenever you free.
            </p>
            <br/>
            <p className='text-xs text-justify lg:text-xl'>
            You can customize a template or make your own from scratch, with an immersive library at your disposal.
            </p>    
        </div>
      
        <div className=' text-lg  mt-3  font-semibold hidden lg:block'>
            <div className=' space-x-5 '>
            <button className=' bg-purple-500  ml-16 text-white w-32 h-16 rounded-xl'>
                Skills
            </button>
            <button className=' bg-purple-500 ml-16 text-white  w-32 h-16 rounded-xl'>
                Experience
            </button>
            <button className=' bg-purple-500  ml-16 text-white w-32 h-16 rounded-xl'>
                Education
            </button>

            <div className=' px-10'>
        <div className='flex justify-between mt-10 pt-10  transition-all duration-700'>
        <div className=''>
            <IoLogoFigma className='justify-center text-4xl ml-5 ' />
        <p className='text-left'>Figma(89%)</p>
        </div>
        <div>
            <SiAdobeillustrator className='text-4xl ml-8
             items-center'/>
        <p className='text-left'>Adobe illustrator(75%)</p>
        </div>
        <div>
            <SiAdobexd className='text-4xl ml-6' />
        <p className='text-left'>Adobe XD(92%)</p>

        </div>

        </div>
         </div>

         <div className='flex justify-between mt-16 pt-9 px-10 transition-all duration-700'>
        <div className=''>
            <IoLogoFigma className='justify-center text-4xl ml-5 ' />
        <p className='text-left'>Figma(89%)</p>
        </div>
        <div>
            <SiAdobeillustrator className='text-4xl ml-8 items-center'/>
        <p className='text-left'>Adobe illustrator(75%)</p>
        </div>
        <div>
            <SiAdobexd className='text-4xl ml-6' />
        <p className='text-left'>Adobe XD(92%)</p>

        </div>

        </div>
            
            
            </div>
            
        </div>
        


        

        </div>
        
{/* small screen */}
        <div className='flex text-xs justify-center mt-5 font-semibold text-white lg:hidden'>
            <button className=' bg-purple-500  w-24  p-3 rounded-xl shadow-md shadow-purple-900'>
                Skills 
            </button>
           
        </div>

    {/* small screen code */}

    <div className='lg:hidden bg-purple-600 text-white ease-in'>
          <div className='flex justify-between  p-3 py-5 mt-3 text-xs'>
        <div className='transition-all duration-700'>
            <IoLogoFigma className='justify-center text-xl ml-5 ' />
        <p className='text-left'>Figma(89%)</p>
        </div>
        <div>
            <SiAdobeillustrator className='text-xl ml-8 items-center'/>
        <p className='text-left'>Adobe illustrator(75%)</p>
        </div>
        <div>
            <SiAdobexd className='text-xl ml-6' />
        <p className='text-left'>Adobe XD(92%)</p>

        </div>

    </div>
      <div className='flex justify-between p-3 text-xs mt-5 '>
        <div className='transition-all duration-700'>
            <IoLogoFigma className='justify-center text-xl ml-5 ' />
        <p className='text-left'>Figma(89%)</p>
        </div>
        <div>
            <SiAdobeillustrator className='text-xl ml-8 items-center'/>
        <p className='text-left'>Adobe illustrator(75%)</p>
        </div>
        <div>
            <SiAdobexd className='text-xl ml-6' />
        <p className='text-left'>Adobe XD(92%)</p>

        </div>

    </div>
    
    </div>
    
    </div>
  )
}

export default Myexperts
