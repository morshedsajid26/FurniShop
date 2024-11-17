import React from 'react'
import Container from './Layer/Container'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const NewStore = () => {
  return (
    <div>
        <Container className='w-[340px] md:w-full py-[50px] md:py-[70px] '>
                 <div className='w-[340px] md:w-[245px] flex md:flex-col justify-between  md:items-start items-center'>
                  <h1 className='font-Saira w-[124px] text-[24px] md:text-[40px] font-semibold md:w-[219px]'>New In Store Now</h1>
                  <p className='font-Saira w-[206px] md:w-[245px] text-[14px] md:text-[16px] mt-0 md:mt-[89px] mb-0  md:mb-12 '>Get the latest items immediately with promo prices</p>

                  <div className='md:flex items-center hidden font-Saira gap-2.5 '>
                  <button className='underline'>Check All 
                  </button>
                  <FaArrowRightLong /> 
                  </div>
                 </div>
        </Container>
    </div>
  )
}

export default NewStore