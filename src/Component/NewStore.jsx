import React from 'react'
import Container from './Layer/Container'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

import chair from '/chair.png'
import bed from '/bed.png'
import Slider from 'react-slick'
import StoreCard from './Layer/StoreCard'


const settings = {
  dots: false,
  arrows:false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  autoplaySpeed: 3000,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    
  ],
};

const NewStore = () => {

  
  return (
    <div>
        <Container className='w-[340px] md:w-full py-[50px] md:py-[70px] flex justify-between '>
                 <div className='w-[340px] md:w-[245px] flex md:flex-col justify-between  md:items-start items-center'>
                  <h1 className='font-Saira w-[124px] text-[24px] md:text-[40px] font-semibold md:w-[219px]'>New In Store Now</h1>
                  <p className='font-Saira w-[206px] md:w-[245px] text-[14px] md:text-[16px] mt-0 md:mt-[89px] mb-0  md:mb-12 '>Get the latest items immediately with promo prices</p>

                  <div className='md:flex items-center hidden font-Saira gap-2.5 '>
                  <button className='underline'>Check All 
                  </button>
                  <FaArrowRightLong /> 
                  </div>
                 </div>

                 

                 <div className="slider-container ">
      <Slider {...settings}>

        <StoreCard src={chair}/>
        <StoreCard src={bed}/>
        <StoreCard src={chair}/>
        <StoreCard src={bed}/>
      </Slider>
    </div>
        </Container>
    </div>
  )
}

export default NewStore