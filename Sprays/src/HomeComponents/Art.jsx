import React from 'react'
import { AllSprays } from './AllSprays'
import { Heading } from '../Components/Heading'

export const Art = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/images/bg2.webp')",
                backgroundSize: "cover",
                backgroundPosition: "top",
              
                width: "100%",
            }}
            className='my-10 flex flex-col justify-center h-[700px] max-lg:h-[400px] items-center gap-3'
        >
            <Heading
                heading='The Science and Art of Sprays'
                span='Sprays, in their essence, are a versatile form of dispersing liquid, gas, or fine particles in the atmosphere or onto a surface.'
                center='items-center text-center'
                color='text-white'
            />
            <div className="flex items-center gap-3 text-white">
                <span className='border  border-white rounded-full px-2 py-1'>
                    <i className="bi bi-play text-2xl"></i>
                </span>
                <span>play video</span>
            </div>

        </div>
    )
}
