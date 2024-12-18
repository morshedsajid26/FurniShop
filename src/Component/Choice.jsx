import React from 'react'
import Container from './Layer/Container'
import Image from './Layer/Image'

import choice from '/Choice.png'

const Choice = () => {
  return (
    <div>
        <Container className='w-[340px] md:w-full md:flex justify-between py-[50px] md:py-[96px]'>
            <div className="text md:w-[570px]">
                <h1 className='font-Saira text-[24px] md:text-[40px] font-semibold text-[#23262F] mt-10 mb-9'>The Best Furniture Manufacturer of your choice</h1>

                <p className='font-Saira text-[14px] md:text-[20px] text-[#23262F]'>Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services\ </p>
            </div>


            <div className="image w-[340px] md:w-[554px] my-[50px] md:my-0 ">
                <Image imageClass=' rounded-[5px] cover no-repeat center' src={choice}/>
            </div>
        </Container>
    </div>
  )
}

export default Choice