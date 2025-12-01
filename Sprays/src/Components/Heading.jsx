import React from 'react'

export const Heading = ({ center, color,show = 'flex', heading, span, hWidth = 'max-w-[500px]' }) => {
    return (
        <div className={`flex flex-col gap-3 w-full ${color} ${center} `}>
            <span className={show}>Spray</span>
            <h1 className={`text-5xl mitr font-medium max-sm:text-2xl ${hWidth} `}>{heading}</h1>
            <span className='max-w-[550px]'>{span}</span>
        </div>
    )
}
