import React from 'react'


import Container from './Layer/Container'
import Image from './Layer/Image'
 import review from '/review.png'
 import user from '/user.png'
 import Slider from 'react-slick';
//  import "slick-carousel/slick/slick.css";



 

const Review = () => {


    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div >
       <Container className='flex justify-between py-[70px]'>
       <div className="text">

        <h1 className='font-Saira font-semibold text-[40px] text-[#23262F] '>What people are saying about us</h1>


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

        
        {/* <Slider {...settings}>

       

<div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      

      
      
    </Slider> */}





        </div>

        <div className="image w-[562px]">
            <Image src={review}/>
        </div>
       </Container>

       

    </div>
  )
}

export default Review