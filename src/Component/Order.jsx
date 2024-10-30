import React from 'react'
import Container from './Layer/Container'



const Order = () => {
  return (
    <>
        <div className=' bg-[url(/order.png)] bg-cover bg-center bg-no-repeat  '>
        <Container className='pt-[100px] pb-[142px] flex justify-end'>
            <div className='w-[558px]'>
                <h1 className='font-Saira font-semibold text-[40px] text-white w-[349px]'>Get more discount 
                Off your order</h1>
                <p className='font-Saira  text-[20px] text-white w-[349px] pt-5 pb-10'>Join our mailing list</p>

                <div>
                    <input className='py-[22px] pl-6 w-[384px] rounded-[8px] outline-none font-Saira text-[16px]' type="text" placeholder='Your email address' />

                    <button className='py-5 px-7 bg-[#23262F] font-Saira text-white font-semibold text-[20px] rounded-[8px] ml-[22px] hover:bg-[#23262F]/50 transition-all duration-300'> Shop Now</button>
                </div>
                
            </div>
        </Container>


        </div>
    </>
  )
}

export default Order