import React from 'react'
import Image from './Image'

const ReviewCard = () => {
  return (
    <>

<div className="review w-[570px] bg-slate-100 mt-[32px]">

<div className='flex items-center gap-x-5'>
<div>
<Image src={user}/>
</div>
<div >
<h3 className='font-Saira font-semibold text-[20px] text-[#23262F]'>Josh Smith</h3>
<p className='font-Saira text-[14px] text-[#23262F]/70'>Manager of The New York Times</p>

</div>


</div>

<p className='font-Saira text-[20px] text-[#23262F] w-[570px] mt-[29px]'>“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</p>

</div>

    </>
  )
}

export default ReviewCard