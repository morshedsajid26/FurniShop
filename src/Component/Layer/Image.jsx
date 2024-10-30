import React from 'react'

const Image = ({href,src,alt, className, imageClass}) => {
  return (
    <div className={` ${className}`} to={href}>
        <picture>
        <img className={`block ${imageClass}`} src={src} alt={alt} />
        </picture>
    </div>
  )
}

export default Image