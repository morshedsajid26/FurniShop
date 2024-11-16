import React from 'react'


import Container from './Layer/Container'
import Image from './Layer/Image'
 import review from '/review.png'
 import user from '/user.png'
 import Slider from 'react-slick';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ReviewCard from './Layer/ReviewCard'



function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
      className='absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px] left-1/2 translate-x-1/2 bottom-[-150%] -translate-y-[-150%] md:left-[74px]  md:bottom-[-45px] md:-translate-y-[-45px] rounded-full items-center justify-center bg-[#FFFFFF] shadow  hover:bg-[#286F6C]  transition-all duration-300 cursor-pointer '
      style={{ ...style, display: "flex", background: "" }}
      onClick={onClick}
    >
      <div className='w-full h-full flex items-center justify-center text-[#23262F] hover:text-white transition-all duration-300'>
        <FaArrowRight/>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
     className='absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px]  left-1/4 translate-x-1/3 bottom-[-150%] -translate-y-[-150%] md:left-0 md:translate-x-0  md:bottom-[-45px] md:-translate-y-[-45px] rounded-full items-center justify-center bg-[#FFFFFF] shadow hover:bg-[#286F6C]  transition-all duration-300 cursor-pointer '
      style={{ ...style,display: "flex",background: "" }}
      onClick={onClick}
    >
       <div className='w-full h-full flex items-center justify-center text-[#23262F] hover:text-white transition-all duration-300'>
        <FaArrowLeft/>
       </div>
    </div>
  );
}

 

const Review = () => {


  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };

  return (
    <div >
       <Container className=' w-[340px] md:w-full md:flex justify-between pb-[100px] md:py-[70px]'>
       <div className="text">

        <h1 className='font-Saira font-semibold text-[24px] md:text-[40px] text-[#23262F] '>What people are saying about us</h1>


       

        
    <div className='slider max-w-[340px] md:max-w-[570px]'>
    <Slider {...settings}>


<div className="review w-[340px] md:w-[570px] mt-[32px]">

<div className='flex items-center gap-x-5'>
<div>
<Image className='w-10 md:w-full' src={user}/>
</div>
<div >
<h3 className='font-Saira font-semibold text-[14px] md:text-[20px] text-[#23262F]'>Josh Smith</h3>
<p className='font-Saira text-[10px] md:text-[14px] text-[#23262F]/70'>Manager of The New York Times</p>

</div>


</div>

<p className='font-Saira text-[14px] md:text-[20px] text-[#23262F] w-[340px] md:w-[570px] mt-[29px]'>“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</p>

</div>




<div className="review w-[340px] md:w-[570px] mt-[32px]">

<div className='flex items-center gap-x-5'>
<div>
<Image className='w-10 md:w-full' src={user}/>
</div>
<div >
<h3 className='font-Saira font-semibold text-[14px] md:text-[20px] text-[#23262F]'>Josh Smith</h3>
<p className='font-Saira text-[10px] md:text-[14px] text-[#23262F]/70'>Manager of The New York Times</p>

</div>


</div>

<p className='font-Saira text-[14px] md:text-[20px] text-[#23262F] w-[340px] md:w-[570px] mt-[29px]'>“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</p>

</div>



</Slider>
    </div>





        </div>

        <div className="image mt-[33px] mb-[25px] md:mb-0 md:mt-0 w-[340px] md:w-[562px] ">
            <Image src={review}/>
        </div>
       </Container>

       

    </div>
  )
}

export default Review