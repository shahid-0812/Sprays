import React from 'react'
import { Heading } from '../Components/Heading'
import { CtaButton } from '../Components/CtaButton'

export const Dynamics = () => {
    return (
        <div className='max-w-6xl mx-auto w-full flex items-center justify-between py-10'>
            <div className="flex flex-col gap-5 w-full">
                <Heading
                    heading='The World of Spray Techniques'
                    span='The art of spray painting encapsulates an explosion of colors and creativity. With a swift movement, aerosol cans release a fine mist that transforms ordinary surfaces into vibrant masterpieces.'
                />
                <div className="flex items-center gap-2">
                    <CtaButton text='Unisex Scent' />
                    <CtaButton text='Diamond Scent' />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <img src="/images/chocolate2.webp" alt="a" className='w-[500px] h-full' />
                <span>This precise application method ensures targeted coverage, safeguarding crops from pests, promoting growth, and maximizing yields.
                </span>
                <span className="font-semibold text-sm">
                    Show More
                </span>
            </div>
        </div>
    )
}
