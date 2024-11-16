import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Image from './Image'

const ProductCard = ({price,src,className,mainPrice,pName}) => {
  return (
    
          <div className={`w-[160px] md:w-[290px] ${className}`} >
                        
                        <div className='image relative'>
                        <Image imageClass='  border border-[#102637]/10 rounded-[16px]'  src={src}/>
                        <div className='w-[30px] h-[30px] bg-[#D9D9D9] flex items-center justify-center rounded-full absolute bottom-0 right-0 -translate-y-4 -translate-x-[22px]'>
                        <FaPlus />
                        </div>
                        </div>

                        <div className='name'>
                            <h1 className='font-Saira text-[16px] md:text-[24px] font-semibold text-[#23262F] mt-4 mb-2'>{pName}</h1>
                            
                            <p className='font-Saira text-[12px] md:text-[16px] text-[#23262F]'>
                                 {price}
                                <del className='text-[10px] md:text-[14px] text-[#898989] ml-[18px]'>{mainPrice}</del></p>
                        </div>


                    </div>
    
  )
}

export default ProductCard