import React from 'react'
import Image from './Layer/Image'


import Container from './Layer/Container'

const Banner = () => {
  return ( 
    <div className='w-[390px] md:w-full h-[749px] md:h-full '>
        {/* <Image imageClass='w-full ' src={banner}/> */}

        <div className=" bg-[url('/banner.png')] bg-cover bg-no-repeat bg-right md:bg-center pt-[224px] pb-[254px] ">
           
        <Container className=''>
        <div className="title text-center flex items-center justify-center flex-col  ">
           <h1 className='font-Saira text-center text-[24px] md:text-[64px] font-semibold w-[290px] md:w-[888px] text-white  '>Creative Home Simpify your Furniture</h1>

           <p className='font-Saira text-[14px] md:text-[20px] text-white w-[293px] md:w-[627px] mt-[31px] mb-[64px]'>Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p>

           <button className='px-[35px] md:px-[80px] py-[9px] md:py-[16px] bg-[#E2E2E2]/40 hover:bg-[#E2E2E2]/80 text-white font-Saira font-semibold text-[14px] md:text-[20px] rounded-[10px] transition-all duration-300 '>Shop Now</button>
           </div>

        </Container>
        </div>
    </div>
  )
}

export default Banner