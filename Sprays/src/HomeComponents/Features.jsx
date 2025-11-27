import React from 'react'
import { CtaButton } from '../Components/CtaButton'

export const Features = () => {
    return (
        <div className='flex items-center gap-5 justify-between max-w-6xl mx-auto w-full py-15'>
            <div className="flex flex-col  gap-3 flex-1 w-full items-end">
                <h1 className='text-xl font-bold '>
                    Power, and Practicality<br />
                    <span className='font-light'>
                        Manufacturing Processes
                    </span>
                </h1>
                <span className='text-right'>
                    Sprays, in their multifaceted forms, represent a diverse range of applications across industries, sciences, arts, and daily life.
                </span>
                <CtaButton
                    text='Check More Products'
                />
            </div>
            <div className="flex flex-col  gap-3 flex-1 w-full items-end">
                <img src="/images/chocolate4.webp" alt="" />

            </div>
            <div className="flex flex-col  gap-3 flex-1 w-full ">
                <h1 className='text-xl font-bold '>
                    The Artistry of Atomization<br />
                    <span className='font-light'>
                        Diving into Spray
                    </span>
                </h1>
                <span>
                    The Artistry of Atomization: Diving into Spray Techniques
                </span>
                <CtaButton
                    text='Check More Products'
                />
            </div>
        </div>
    )
}
