import React from 'react'
import Container from './Layer/Container'
import Image from './Layer/Image'

import logo from '/logo.png'
import Li from './Layer/Li'

const Navbar = () => {
  return (
    <div className='absolute w-full py-7'>
        <Container className='flex items-center justify-between'>
            <div className="logo">
                <Image src={logo}/>
            </div>


            <div className="menu flex gap-[64px] w-[px]">
                <Li liText='Home'/>
                <Li liText='About'/>
                <Li liText='Features'/>
                <Li liText='Contact'/>
            </div>
        </Container>
    </div>
  )
}

export default Navbar