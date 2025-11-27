import React from 'react'
import { Heading } from '../Components/Heading'

export const Newsletter = () => {
    return (
        <div className="flex flex-col max-w-6xl mx-auto w-full items-center gap-5 py-15">
            <Heading
                heading='Subscribe newsletter and get -20% off
'
                span='Sprays play a crucial role in manufacturing, from cooling systems in industrial machinery to lubrication processes and the creation of various products.'
                center='items-center text-center'
                show='hidden'
            />
            <div className="flex justify-between items-center rounded-full border p-2 w-1/2">
                <input type="text" placeholder='Enter email address...' className='placeholder:text-sm px-3 border-0 outline-0' />
                <span className='bg-black text-white rounded-full px-4 py-3'>
                    <i className="bi bi-arrow-right"></i>
                </span>
            </div>
        </div>
    )
}
