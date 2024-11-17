import React from 'react'
import Container from './Layer/Container'



const Order = () => {
  return (
    <>
        <div className=' bg-[url(/order.png)] bg-cover bg-center bg-no-repeat  '>
        <Container className='w-[340px] md:w-[558px] pt-[40px] md:pt-[100px] pb-[40px] md:pb-[142px] flex  justify-center md:justify-end'>
            <div >
                <div className='flex flex-col text-center md:text-left items-center md:items-start'>
                <h1 className='font-Saira font-semibold text-[24px] md:text-[40px] text-white w-[299px] md:w-[349px] '>Get more discount 
                Off your order</h1>
                <p className='font-Saira text-[14px]  md:text-[20px] text-white w-[349px] pt-5 pb-10'>Join our mailing list</p>
                </div>

                <div className=''>
                    <input className='py-[14px] md:py-[22px] pl-5 md:pl-6 w-[220px] md:w-[384px] rounded-[8px] outline-none font-Saira text-[12px] md:text-[16px]' type="text" placeholder='Your email address' />

                    <button className='py-[14px] md:py-5 px-6 md:px-7 bg-[#23262F] font-Saira text-white font-semibold text-[12px] md:text-[20px] rounded-[8px] ml-[15px] md:ml-[22px] hover:bg-[#23262F]/50 transition-all duration-300'> Shop Now</button>
                </div>
                
            </div>
        </Container>


        </div>
    </>
  )
}

export default Order