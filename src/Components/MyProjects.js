import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    
    
  };
  return (
    <div className=''>

      <div>
      <p className='mt-3 text-center text-xl underline italic lg:text-4xl font-semibold'>Look at my Recent Project</p>
      </div>
      <div className="slider-container w-[85%] m-auto shadow-xl rounded-xl shadow-purple-800 mt-10 p-4  lg:block hidden">
      <Slider {...settings}>
        {data.map((d) => (
          <div className='border-2  border-black lg:h-[400px]  rounded-xl' >
            <div className='ml-[10%]'>
              <img src= {d.imge} className=''>
              
              </img>
            </div>
            <div className='mt-[5%] p-4'>
              <p className='text-left  '>{d.name}</p> 
              <p className='text-left text-2xl underline font-bold'>{d.pName}</p>
            </div>

          </div>


        ))}
        
      </Slider>



      
    </div>

    </div>
  );
}



export default MyProjects

const data =[
  {
    imge: 'slidertest.jpg',
    name: 'Project Brand',
    pName: 'Project Name'
  },
  {
    imge: 'slidertest.jpg',
    name: 'Project Brand',
    pName: 'Project Name'
  },
  {
    imge: 'slidertest.jpg',
    name: 'Project Brand',
    pName: 'Project Name'
  },
  {
    imge: 'slidertest.jpg',
    name: 'Project Brand',
    pName: 'Project Name'
  },
  {
    imge: 'slidertest.jpg',
    name: 'Project Brand',
    pName: 'Project Name'
  },
  {
    imge: 'slidertest.jpg',
    name: 'Project Brand',
    pName: 'Project Name'
  },
]
