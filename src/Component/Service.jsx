import React from 'react'
import Container from './Layer/Container'
import { VscPassFilled } from "react-icons/vsc";

import service from '/service.png'
import Image from './Layer/Image'
import ExperienceFrame from './ExperienceFrame';

const Service = () => {
  return (

    
    <div className=' relative pb-[74px] pt-[224px] '>
        
          <ExperienceFrame/>

        <Container className='flex gap-[100px]' >
            <div className="image w-[554px]">
               <Image src={service}/>
            </div>
            <div className="text w-[579px]">
                <h1 className='font-Saira text-[40px] font-semibold text-[#23262F] capitalize w-[508px]'>We Create your home more aestetic</h1>

                <p className='font-Saira text-[20px]  text-[#23262F] mt-[14px]'>Furnitre power is a software as services for multiperpose business management system, </p>

                <div className='flex gap-4 mt-[35px]'>
                    
                    <VscPassFilled className='w-8 h-8' />
                    
                    <div >
                        
                    <h3 className='text-[20px] font-Saira font-semibold text-[#23262F]'>Valuation Services</h3>
                    <p className='text-[16px] font-Saira  text-[#23262F] mt-2'>Sometimes features require a short description.  This can be detailed description</p>
                    </div>
                   
                </div>

                <div className='flex gap-4 mt-[25px]'>
                    
                    <VscPassFilled className='w-8 h-8' />
                    
                    <div >
                        
                    <h3 className='text-[20px] font-Saira font-semibold text-[#23262F]'>Development of Furniture Modelss</h3>
                    <p className='text-[16px] font-Saira  text-[#23262F] mt-2'>Sometimes features require a short description.  This can be detailed description</p>
                    </div>
                   
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Service