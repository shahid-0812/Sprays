import React from 'react'
import { CtaButton } from '../Components/CtaButton'
import { CtaButtonWhite } from '../Components/CtaButtonWhite'

export const Cards = () => {
    return (
        <div className='flex items-center gap-5 py-5 max-w-6xl mx-auto w-full '>
            <div className="relative overflow-hidden rounded-3xl w-1/2 h-[300px]">
                <img src="/images/card-img-1.webp" alt="a" className='w-full h-full object-cover' />
                <div className="bg-black/50 w-full h-full absolute top-0 left-0">a</div>
                <div className="flex flex-col justify-between absolute top-5 left-5 text-white">
                    <span className='text-xl mitr font-medium'>Unisex</span>
                    <span className='max-w-[300px] text-sm'>On an everyday level, household products such as air fresheners, cleaners, and personal care items often utilize spray
                    </span>
                </div>
                <div className="absolute bottom-5 left-5">

                    <CtaButtonWhite
                        text='Check More Products'
                    />
                </div>

            </div>
            <div className="w-1/2 flex items-center gap-5">
                <div className="relative overflow-hidden rounded-3xl w-1/2 h-[300px]">
                    <img src="/images/card-img-3.webp" alt="a" className='w-full h-full object-cover' />
                    <div className="bg-black/50 w-full h-full absolute top-0 left-0">a</div>
                    <div className="flex flex-col justify-between absolute top-5 left-5 text-white">
                        <span className='text-xl mitr font-medium'>Unisex</span>
                        <span className='max-w-[300px] text-sm'>On an everyday level, household products such as air fresheners, cleaners, and personal care items often utilize spray
                        </span>
                    </div>
                    <div className="absolute bottom-5 left-5">

                        <CtaButtonWhite
                            text='Check More Products'
                        />
                    </div>

                </div>
                <div className="relative overflow-hidden rounded-3xl w-1/2 h-[300px]">
                    <img src="/images/card-img-2.webp" alt="a" className='w-full h-full object-cover' />
                    <div className="bg-black/50 w-full h-full absolute top-0 left-0">a</div>
                    <div className="flex flex-col justify-between absolute top-5 left-5 text-white">
                        <span className='text-xl mitr font-medium'>Unisex</span>
                        <span className='max-w-[300px] text-sm'>On an everyday level, household products such as air fresheners, cleaners, and personal care items often utilize spray
                        </span>
                    </div>
                    <div className="absolute bottom-5 left-5">

                        <CtaButtonWhite
                            text='Check More Products'
                        />
                    </div>

                </div>

            </div>
        </div>

    )
}
