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
      className='absolute w-[50px] h-[50px] left-[74px] bottom-[-45px] -translate-y-[-45px] rounded-full items-center justify-center bg-[#FFFFFF] shadow  hover:bg-[#286F6C] hover:text-white transition-all duration-300 cursor-pointer '
      style={{ ...style, display: "flex", background: "" }}
      onClick={onClick}
    >
      <div><FaArrowRight  className='text-[#23262F] ' />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
     className='absolute w-[50px] h-[50px] left-0  bottom-[-45px] -translate-y-[-45px] rounded-full items-center justify-center bg-[#FFFFFF] shadow hover:bg-[#286F6C] hover:text-white transition-all duration-300 cursor-pointer'
      style={{ ...style,display: "flex",background: "" }}
      onClick={onClick}
    >
       <div><FaArrowLeft className='text-[#23262F] ' />
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
       <Container className='flex justify-between py-[70px]'>
       <div className="text">

        <h1 className='font-Saira font-semibold text-[40px] text-[#23262F] '>What people are saying about us</h1>


         {/* <div className="review w-[570px] bg-slate-100 mt-[32px]">

      <div className='flex items-center gap-x-5'>
    <div>
        <Image src={user}/>
    </div>
    <div >
        <h3 className='font-Saira font-semibold text-[20px] text-[#23262F]'>Josh Smith</h3>
        <p className='font-Saira text-[14px] text-[#23262F]/70'>Manager of The New York Times</p>

    </div>
    

</div>

<p className='font-Saira text-[20px] text-[#23262F] w-[570px] mt-[29px]'>“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</p>

        </div> */}

        
    <div className='max-w-[570px]'>
    <Slider {...settings}>


<div className="review w-[570px] bg-slate-100 mt-[32px]">

<div className='flex items-center gap-x-5'>
<div>
<Image src={user}/>
</div>
<div >
<h3 className='font-Saira font-semibold text-[20px] text-[#23262F]'>Josh Smith</h3>
<p className='font-Saira text-[14px] text-[#23262F]/70'>Manager of The New York Times</p>

</div>


</div>

<p className='font-Saira text-[20px] text-[#23262F] w-[570px] mt-[29px]'>“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</p>

</div>


















<div className="review w-[570px] bg-slate-100 mt-[32px]">

<div className='flex items-center gap-x-5'>
<div>
<Image src={user}/>
</div>
<div >
<h3 className='font-Saira font-semibold text-[20px] text-[#23262F]'>Josh Smith</h3>
<p className='font-Saira text-[14px] text-[#23262F]/70'>Manager of The New York Times</p>

</div>


</div>

<p className='font-Saira text-[20px] text-[#23262F] w-[570px] mt-[29px]'>“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</p>

</div>







</Slider>
    </div>





        </div>

        <div className="image w-[562px]">
            <Image src={review}/>
        </div>
       </Container>

       

    </div>
  )
}

export default Review