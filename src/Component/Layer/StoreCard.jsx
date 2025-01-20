import React from 'react'



const StoreCard = ({src}) => {
  return (
    <div>
        <div className='w-[265px] h-[400px] relative '>
                          <img src={src} alt="" />
                          {/* <div className='after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:hover:bg-slate-500 after:duration-300 cursor-pointer transition-all '>
                          <p className='absolute top-0'>chair</p>
                          </div> */}
                          
        </div>
    </div>
  )
}

export default StoreCard