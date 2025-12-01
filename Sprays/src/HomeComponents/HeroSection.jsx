import React from 'react'
import { CtaButton } from '../Components/CtaButton'
import { Heading } from '../Components/Heading'
import { SprayCard } from '../Components/SprayCard'

export const HeroSection = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/images/home-bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "top",

                width: "100%",
            }}
            className='flex items-center h-[600px] justify-between max-lg:px-5 max-sm:h-[1200px]'
        >
            <div className="max-w-6xl mx-auto w-full flex items-center gap-20 text-white max-lg:gap-0 max-sm:flex-col">
                <div className="flex flex-col gap-5 w-full max-lg:w-1/2 max-sm:w-full">
                    <Heading
                        heading='The World of Spray Techniques'
                        span='The art of spray painting encapsulates an explosion of colors and creativity. With a swift movement, aerosol cans release a fine mist that transforms ordinary surfaces into vibrant masterpieces.'
                    />
                    <div className="flex items-center gap-3">
                        <CtaButton text='Check More Products' />
                        <div className="flex items-center gap-3">
                            <span className='border text-white border-white rounded-full px-2 py-1'>
                                <i className="bi bi-play text-2xl"></i>
                            </span>
                            <span>play video</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 max-lg:flex-col">
                        <div className="flex items-center  whitespace-nowrap w-full gap-3">
                            <i className="bi bi-gift text-2xl"></i>
                            <div className="flex flex-col">
                                <span className='font-medium leading-5'>
                                    Finished products
                                </span>
                                <span className='leading-5'>products and gift wrapping</span>
                            </div>
                        </div>
                        <div className="flex items-center  whitespace-nowrap w-full gap-3">
                            <i className="bi bi-percent text-2xl"></i>
                            <div className="flex flex-col">
                                <span className='font-medium leading-5'>
                                    Large and frequent
                                </span>
                                <span className='leading-5'>promotions with numerous discounts</span>
                            </div>
                        </div>
                        <div className="flex items-center w-full whitespace-nowrap gap-3">
                            <i className="bi bi-truck text-2xl"></i>
                            <div className="flex flex-col">
                                <span className='font-medium leading-5'>
                                    Free shipping
                                </span>
                                <span className='leading-5'>on any order from $ 150</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2 max-lg:p-10 max-sm:w-full max-sm:p-5">
                    <SprayCard
                        img='/images/3.webp'
                        img2='/images/3-3.webp'
                        name='Pegasus Eau De Parfum'
                    />
                </div>
            </div>
        </div>

    )
}
