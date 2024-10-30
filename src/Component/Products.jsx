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
        <Container className='py-[70px]'>
            <div className="title flex flex-col items-center text-center mb-[69px] gap-y-4 ">
                <h1 className='font-Saira text-[40px] font-semibold text-[#23262F]'>All Product</h1>
                <p className='font-Saira text-[16px] text-[#23262F] w-[539px]'>The products we provide only for you as our service are selected from the
                best products with number 1 quality in the world</p>
                </div>

                {/* <div className="product grid grid-cols-4 grid-rows-2 gap-7  ">
                <ProductCard src={product1} pName='Ceiling Light' price='$75.00' mainPrice='$82.00'/>

                <ProductCard src={product2} pName='Wood Chair' price='$50.00' mainPrice='$70.00'/>

                <ProductCard src={product3} pName='Papper Cupboard' price='$105.00' mainPrice='$120.00'/>

                <ProductCard src={product4} pName='Ole Gundorse Spring...' price='$82.00' mainPrice='$100.00'/>

                <ProductCard src={product5} pName='Treos Seroes 911' price='$200.00' mainPrice='$210.00'/>

                <ProductCard src={product6} pName='Multi bilderman slibber...' price='$45.00' mainPrice='$50.00'/>

                <ProductCard src={product7} pName='XORA corner desk' price='$320.00' mainPrice='$325.00'/>

                <ProductCard src={product8} pName='Black Forest Series wo...' price='$225.00' mainPrice='$240.00'/>

                </div> */}

                <div className='flex flex-col items-center gap-y-[50px]'>
                <Paginate  itemsPerPage={8}/>
                </div>
        </Container>
    </div>
  )
}

export default Products