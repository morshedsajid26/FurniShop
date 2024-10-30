import React from 'react'

const Li = ({className,liText}) => {
  return (
    <li className={`font-Saira text-[16px] text-white cursor-pointer hover:font-bold transition-all duration-300 block list-none  ${className}`} >{liText}</li>
  )
}

export default Li