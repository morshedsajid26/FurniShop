import React from 'react'
import Container from './Layer/Container'

const ExperienceFrame = () => {
  return (
    <div className=' absolute -top-[70px]  left-1/2 -translate-x-1/2' >
            <Container className=''>
                    <div className='w-[1240px] bg-[#286F6C] py-[37px] text-center flex justify-around rounded-[20px]  '>
                    
                    <div className=' relative w-[112px] after:absolute after:content-[""] after:w-[1px] after:h-[111px] after:bg-white after:top-0 after:-right-[95px]  '>
                        <h1 className='font-Saira font-semibold text-[40px] text-white'>7</h1>
                        <p className='font-Saira text-[20px] text-white'>Year Experience</p>
                    </div>
                    
                    <div className='relative w-[112px] after:absolute after:content-[""] after:w-[1px] after:h-[111px] after:bg-white after:top-0 after:-right-[95px]'>
                        <h1 className='font-Saira font-semibold text-[40px] text-white'>2</h1>
                        <p className='font-Saira text-[20px] text-white'>Opened in the country</p>
                    </div>
                    
                    <div className='relative w-[112px] after:absolute after:content-[""] after:w-[1px] after:h-[111px] after:bg-white after:top-0 after:-right-[95px]'>
                        <h1 className='font-Saira font-semibold text-[40px] text-white'>10k+</h1>
                        <p className='font-Saira text-[20px] text-white'>Furniture sold</p>
                    </div>
                    
                    <div className=' w-[112px] '>
                        <h1 className='font-Saira font-semibold text-[40px] text-white'>260+</h1>
                        <p className='font-Saira text-[20px] text-white'>Variant Furniture</p>
                    </div>

                </div>
            </Container>
 </div>
  )
}

export default ExperienceFrame