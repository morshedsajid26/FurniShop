import React from 'react'
import Container from './Layer/Container'
import Image from './Layer/Image'

import product1 from '/product1.png'
import product2 from '/product2.png'
import product3 from '/product3.png'
import product4 from '/product4.png'
import product5 from '/product5.png'
import product6 from '/product6.png'
import product7 from '/product7.png'
import product8 from '/product8.png'
import { FaPlus } from 'react-icons/fa'
import ProductCard from './Layer/ProductCard'
import Paginate from './Layer/Paginate'

const Products = () => {
  return (
    <div>
        <Container className='md:py-[70px] w-[340px] md:w-full'>
            <div className="title flex flex-col items-center text-center mb-[69px] gap-y-4 ">
                <h1 className='font-Saira text-[24px] md:text-[40px] font-semibold text-[#23262F]'>All Product</h1>
                <p className='font-Saira text-[14px] md:text-[16px] text-[#23262F] md:w-[539px]'>The products we provide only for you as our service are selected from the
                best products with number 1 quality in the world</p>
                </div>

               

                <div className='md:flex md:flex-col items-center gap-y-[50px]'>
                <Paginate  itemsPerPage={8}/>
                </div>
        </Container>
    </div>
  )
}

export default Products