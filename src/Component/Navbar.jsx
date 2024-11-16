import React, { useState } from 'react'
import Container from './Layer/Container'
import Image from './Layer/Image'

import logo from '/logo.png'
import Li from './Layer/Li'
import { FaBars } from 'react-icons/fa'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'



const Navbar = () => {

  let [show, setShow] = useState(false); 



  return (
    <div className='absolute w-full py-7'>
        <Container className='w-[340px] md:w-full flex items-center justify-between'>
            <div className="logo">
                <Image className='w-[116px] md:w-[174px]' src={logo}/>
            </div>


            <ul className={`menu flex gap-x-[64px] md:flex-row flex-col -z-0 md:bg-transparent  bg-[#286F6C] absolute md:static top-full left-0 md:w-auto w-full p-4 md:p-0 transition-all duration-300 mt- ${show?"translate-y-0":"-translate-y-[200%] md:-translate-y-0"}`}>
                <Li liText='Home'/>
                <Li liText='About'/>
                <Li liText='Features'/>
                <Li liText='Contact'/>
            </ul>


            <div onClick={()=> setShow(!show)} className='block md:hidden'>


          <HiMiniBars3CenterLeft className='w-6 h-6 text-white cursor-pointer absolute top-1/2 -translate-y-1/2 right-100% -translate-x-[100%]   '/>

        </div>
        </Container>
    </div>
  )
}

export default Navbar