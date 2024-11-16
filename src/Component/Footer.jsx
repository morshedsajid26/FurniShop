import React from 'react'
import Container from './Layer/Container'
import Image from './Layer/Image'

import footerLogo from '/footerLogo.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#23262F] pt-[65px] pb-[20px]'>
        <Container className='w-[330px] md:w-full' >
            <div className="top md:flex justify-between items-center md:border-b md:border-[#EAEEF3] pb-[48px] ">
                <div className="logo">
                    <Image src={footerLogo}/>
                </div>
                <div className="icons w-[304px] flex justify-between mt-5 md:mt-0">

                    <div className='w-[48px] h-[48px] bg-[#6D5DD3]/20 cursor-pointer rounded-full flex items-center justify-center text-white'>
                        <FaInstagram/>

                    </div>
                   
                    <div className='w-[48px] h-[48px] bg-[#6D5DD3]/20 cursor-pointer rounded-full flex items-center justify-center text-white'>
                    <FaFacebook />

                    </div>

                    <div className='w-[48px] h-[48px] bg-[#6D5DD3]/20 cursor-pointer rounded-full flex items-center justify-center text-white'>
                        <FaTwitter/>
                    </div>

                    <div className='w-[48px] h-[48px] bg-[#6D5DD3]/20 cursor-pointer rounded-full flex items-center justify-center text-white'>
                        <FaGithub/>
                    </div>

                    <div className='w-[48px] h-[48px] bg-[#6D5DD3]/20 cursor-pointer rounded-full flex items-center justify-center text-white'>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>

           
           
            <div className="bottom grid grid-cols-2 md:grid-cols-5 gap-[65px] md:gap-x-[125px]  md:mt-[64px]">
                <div className='w-[140px] '>
                <h3 className='font-Raleway font-medium text-[18px] text-white'>Our Products</h3>

                    <ul className='font-Inter text-[14px] text-white flex flex-col gap-3 mt-5'>
                       
                        <li>
                        The Support Suite
                        </li>
                        <li>
                        The Sales Suite
                        </li>
                        <li>
                            Support
                        </li>
                        <li>
                            Guide
                        </li>        
                    </ul>

                </div>
                <div className='w-[140px] '>
                <h3 className='font-Raleway font-medium text-[18px] text-white'>Top Features</h3>

                    <ul className='font-Inter text-[14px] text-white flex flex-col gap-3 mt-5'>
                       
                        <li>
                        Ticketing System
                        </li>
                        <li>
                        Knowledge Base
                        </li>
                        <li>
                            Community Forums
                        </li>
                        <li>
                            Help Desk software
                        </li>        
                    </ul>

                </div>
                <div className='w-[140px] '>
                <h3 className='font-Raleway font-medium text-[18px] text-white'>Resources</h3>

                    <ul className='font-Inter text-[14px] text-white flex flex-col gap-3 mt-5'>
                       
                        <li>
                        Product Support
                        </li>
                        <li>
                        Request Demo
                        </li>
                        <li>
                            Library
                        </li>
                        <li>
                            Peoplepower Blog
                        </li>        
                    </ul>

                </div>
                <div className='w-[140px] '>
                <h3 className='font-Raleway font-medium text-[18px] text-white'>Company</h3>

                    <ul className='font-Inter text-[14px] text-white flex flex-col gap-3 mt-5'>
                       
                        <li>
                        About Us
                        </li>
                        <li>
                        Press
                        </li>
                        <li>
                            Investors
                        </li>
                        <li>
                            Events
                        </li>        
                    </ul>

                </div>

                <div className='w-[140px] '>
                <h3 className='font-Raleway font-medium text-[18px] text-white'>Favourite Things</h3>

                    <ul className='font-Inter text-[14px] text-white flex flex-col gap-3 mt-5'>
                       
                        <li>
                        For Enterprise
                        </li>
                        <li>
                        For Startups
                        </li>
                        <li>
                            For Benchmark
                        </li>
                        <li>
                        For Small Business
                        </li>        
                    </ul>

                </div>

            </div>

            <p className='font-Inter text-[12px] md:text-[14px] text-white text-center mt-[70px] md:mt-[70px]'>© NameBrand 2022 - All Rights Reserved</p>
            
        </Container>
    </div>
  )
}

export default Footer