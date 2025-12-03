import React from 'react'
import { CtaButtonBlack } from '../Components/CtaButtonBlack'

export const BlogDetails = () => {
    return (
        <div className='flex flex-col'>
            <div
                style={{
                    backgroundImage: `url('/images/blog-banner.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                }}

                className='flex items-center max-lg:px-5 '>
                <div className="max-w-6xl mx-auto w-full flex flex-col justify-center gap-5">

                    <div className="flex items-center gap-2 text-white">
                        <span className='rounded-full px-1 py-0.5 text-sm border border-white '>
                            <i className="bi bi-arrow-left"></i>
                        </span>
                        <span className='text-sm'>Back to home</span>
                    </div>

                    <div className="flex flex-col gap-3 text-white">
                        <span className='text-5xl mitr font-medium'>
                            Aromatics Anonymous

                        </span>

                        <div className="flex items-center gap-5 text-black">
                            <span className='px-3 py-1 bg-white  text-sm rounded-full'>news</span>
                            <span className="font-semibold text-sm text-white">Article</span>
                            <span className="font-semibold text-sm text-white" >Date: November 16, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex max-w-6xl mx-auto w-full gap-10 py-15 max-lg:px-5 max-sm:flex-col">
                <div className="flex flex-col gap-10 w-[70%] max-sm:w-full">

                    <div className="flex flex-col gap-5">
                        <span className="text-5xl font-bold max-sm:text-2xl">
                            Engel & Volkers Real Estate
                        </span>
                        <img src="/images/image-1.webp" alt="" />
                        <div className="flex items-center gap-8 max-sm:gap-2 max-sm:flex-wrap">
                            <span className='font-bold text-lg'>WorkDo</span>
                            <span className="font-semibold text-sm">Category: news</span>
                            <span className="font-semibold text-sm">Date: March 20, 2023</span>
                            <span className="font-semibold text-sm">
                                <i className="bi bi-upload mr-2"></i>
                                Share
                            </span>
                        </div>
                        <div className="flex flex-col gap-5 text-sm ">
                            <span className='text-lg bold mitr leading-5'>
                                We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup and replace it until you find your signature scent – or even issue a 100% refund. All the cost of pickup and delivery will be taken care of by us.
                            </span>
                            <span>
                                Good Vibes Only Perfume is a delightful fragrance that encapsulates the essence of positivity, joy, and a carefree spirit. It is a scent that radiates happiness and spreads a contagious aura of optimism wherever it goes.The initial burst of Good Vibes Only Perfume is like a sunlit citrus explosion. The vibrant notes of juicy oranges and zesty lemons instantly uplift your mood, creating a feeling of pure bliss and energy. These invigorating citrus notes awaken your senses and set the stage for a refreshing olfactory journey.As the fragrance unfolds, a bouquet of blooming flowers takes center stage. The delicate petals of jasmine and lily of the valley embrace you with their sweet, floral embrace. The floral accords exude a sense of femininity and grace, evoking feelings of warmth and serenity.
                            </span>

                            <img src="/images/blog-banner1.webp" alt="" />
                            <span>
                                At its core, Good Vibes Only Perfume reveals a subtle hint of tropical fruits, adding a touch of exoticism and playfulness to the fragrance. The succulent notes of pineapple and mango transport you to a sun-kissed paradise, where worries melt away and a sense of carefree joy fills the air.The fragrance settles into a comforting base that wraps you in a warm embrace.
                            </span>
                            <div className="flex gap-3">
                                <i className="bi bi-quote text-5xl"></i>
                                <span className="text-2xl font-bold leading-6">
                                    Bella Vita Organic Gold Woman is a luxurious and captivating fragrance that embodies the essence of elegance, femininity, and empowerment. It is a scent designed to celebrate the radiance and beauty of the modern woman.

                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 w-[30%] max-sm:w-full">
                    <span className='font-semibold text-3xl'>Related articles</span>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col rounded-2xl group">
                            <div className="overflow-hidden rounded-t-2xl relative ">
                                <img src="/images/image-1.webp" alt=""
                                    className="scale-105 w-full h-full object-contain"

                                />

                            </div>
                            <div className="flex flex-col gap-3 p-4 rounded-b-2xl border border-[#e8e8e8]">
                                <span className="text-2xl font-bold">Aromatics Anonymous</span>
                                <span className="text-sm font-medium">We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup and replace it until you find your</span>
                                <div className="flex justify-between items-center my-1">
                                    <CtaButtonBlack text='Read More' />
                                    <span className="text-right">
                                        November 16, 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-2xl group">
                            <div className="overflow-hidden rounded-t-2xl relative ">
                                <img src="/images/image-2.webp" alt=""
                                    className="scale-105 w-full h-full object-contain"

                                />

                            </div>
                            <div className="flex flex-col gap-3 p-4 rounded-b-2xl border border-[#e8e8e8]">
                                <span className="text-2xl font-bold">The Perfume Diaries</span>
                                <span className="text-sm font-medium">Fragrance microcapsule pigment is an encapsulated fragrance produced by micro-encapsulation technology and can be applied in textile finishing and the process for scented</span>
                                <div className="flex justify-between items-center my-1">
                                    <CtaButtonBlack text='Read More' />
                                    <span className="text-right">
                                        November 16, 2023
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-3xl font-bold">
                            1 comment
                        </span>
                        <div className="flex gap-5 p-5 border border-black/30">
                            <div className="p-1 border border-black/30 rounded-full h-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" className='opacity-30'>
                                    <g clip-path="url(#clip0_8814_6146)">
                                        <path d="M21 0.000976562C9.40323 0.000976562 0 9.40237 0 21.0001C0 32.5977 9.40231 41.9991 21 41.9991C32.5986 41.9991 42 32.5977 42 21.0001C42 9.40237 32.5986 0.000976562 21 0.000976562ZM21 6.27995C24.8373 6.27995 27.9468 9.39037 27.9468 13.2258C27.9468 17.0622 24.8373 20.1717 21 20.1717C17.1645 20.1717 14.055 17.0622 14.055 13.2258C14.055 9.39037 17.1645 6.27995 21 6.27995ZM20.9954 36.5088C17.1682 36.5088 13.663 35.1151 10.9594 32.8081C10.3008 32.2463 9.92071 31.4226 9.92071 30.5583C9.92071 26.6684 13.069 23.5552 16.9598 23.5552H25.0421C28.9338 23.5552 32.0701 26.6684 32.0701 30.5583C32.0701 31.4235 31.6919 32.2454 31.0323 32.8071C28.3296 35.1151 24.8235 36.5088 20.9954 36.5088Z" fill="#444444"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_8814_6146">
                                            <rect width="42" height="42" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg font-semibold">Abc</span>
                                <span className="text-sm font-medium">December 31, 2024</span>
                                <span className="text-sm font-medium">
                                    We strive to build long-term relationships with our clients, offering ongoing support and guidance even after the deal is done.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 p-5 border border-black/30 rounded-2xl">
                            <span className="text-3xl font-bold">
                                Leave a Comment
                            </span>
                            <div className="flex flex-col gap-2">
                                <input type="text" className='border border-black/30 px-3 py-2 rounded-sm placeholder:text-sm placeholder:text-black placeholder:font-medium' placeholder='Name' />
                                <input type="text" className='border border-black/30 px-3 py-2 rounded-sm placeholder:text-sm placeholder:text-black placeholder:font-medium' placeholder='Email' />
                                <textarea type="text" className='border border-black/30 px-3 py-2 rounded-sm placeholder:text-sm placeholder:text-black placeholder:font-medium' placeholder='Message' />
                                <span className="text-sm font-medium">
                                    Please note, comments must be approved before they are published
                                </span>
                                <button className='py-3 rounded-sm bg-black text-white text-sm font-semibold'>Post Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
