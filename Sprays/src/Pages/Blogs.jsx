import React from 'react'
import { CtaButtonBlack } from '../Components/CtaButtonBlack';

export const Blogs = () => {
    const Card = [
        {
            id: 1,
            name: "Aromatics Anonymous",
        },
        {
            id: 2,
            name: "The Perfume Diaries",
        },
        {
            id: 3,
            name: "Sentimental Surprises",
        },
        {
            id: 4,
            name: "The Scent Scribe",
        },
        {
            id: 5,
            name: "the Scent Haven",
        },
    ];
    return (
        <div className='max-w-6xl mx-auto w-full py-15 flex flex-col gap-5'>
            <h1 className='mitr text-5xl font-medium'>News</h1>
            <div className="flex flex-wrap gap-5">
                {Card.map((item) => (

                    <div key={item.id} className="flex flex-col rounded-2xl border overflow-hidden w-[23%] max-lg:w-[32%] max-sm:w-full">
                        <div>
                            <img src={`/images/image-${item.id}.webp`} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className="flex flex-col gap-1 p-4">
                            <span>Article</span>
                            <h1 className='text-xl bold mitr'>
                                {item.name}
                            </h1>
                            <span>We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate</span>
                            <div className="flex justify-between items-center my-1">
                                <CtaButtonBlack text='Read More' />
                                <span className="text-right">
                                    November 16, 2023
                                </span>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
