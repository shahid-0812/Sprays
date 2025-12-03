import React, { useState } from 'react'
import { motion } from 'framer-motion'
export const Review = () => {
    const [showReviewForm, setShowReviewForm] = useState(false);
    return (
        <div className='max-w-6xl mx-auto w-full flex flex-col items-center gap-5  py-15 max-lg:px-5'>

            <div className=" flex items-center gap-30 max-lg:flex-col max-lg:gap-5 w-full  ">
                <div className="flex flex-col text-sm gap-2  w-full  ">
                    <div className="flex gap-1 text-black max-lg:justify-center">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <span className="text-sm font-medium">Be the first to write a review</span>
                </div>
                <div className='flex flex-col items-center gap-3 w-full border-x border-[#e2e2e2] '>
                    <span className='font-semibold mitr text-xl'>Customer Reviews</span>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 text-xs text-black max-lg:justify-center">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="w-full h-4 bg-[#8b8b8b]  px-12">

                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 text-xs text-black max-lg:justify-center">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="w-full h-4 bg-[#8b8b8b]  px-12">

                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 text-xs text-black max-lg:justify-center">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="w-full h-4 bg-[#8b8b8b]  px-12">

                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 text-xs text-black max-lg:justify-center">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="w-full h-4 bg-[#8b8b8b]  px-12">

                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => setShowReviewForm(!showReviewForm)} className='bg-black px-5 py-2 w-full font-semibold rounded-sm text-white'>
                    {
                        showReviewForm ? "Cancel Review" : "Write a Review"
                    }
                </button>
            </div>
            {showReviewForm && <motion.div initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: [0.9, 0.05, 1, 1]
                }} className="flex flex-col gap-2 border border-black/30 rounded-sm p-5">
                <h1 className='text-xl font-bold text-center'>Customer Reviews</h1>
                <div

                    className="flex w-full   py-5  flex-col gap-3">
                    <span className=" text-lg mr-bold">Write a review</span>
                    <span className="text-xs">Rating</span>
                    <div className="flex gap-1 text-black text-sm">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Review Title</span>
                        <input type="text" placeholder='Give your review a title' className='border border-[#e2e2e2] placeholder:text-xs px-3 w-120 py-1' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Review</span>
                        <textarea cols={10} rows={5} type="text" placeholder='Write your comments here' className='border border-[#e2e2e2] placeholder:text-xs px-3 w-120 py-1' />
                    </div>
                    <div className="flex flex-col  gap-1">
                        <span className="text-xs">Picture/Video (optional)</span>
                        <div className='w-40 h-40 border border-[#e2e2e2] flex justify-center items-center hover:opacity-60 transition'>
                            <i className="bi bi-upload text-6xl"></i>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-1">
                        <span className="text-xs">Name (displayed publicly like
                            <span className='text-[#027a36] text-sm mx-1'>
                                John Smith
                            </span>
                            )</span>
                        <input type="text" placeholder='Enter your name (public)' className='border border-[#e2e2e2] placeholder:text-xs px-3 w-120 py-1' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs">Email</span>
                        <input type="text" placeholder='Give your email (private)' className='border border-[#e2e2e2] placeholder:text-xs px-3 w-120 py-1' />
                    </div>
                    <span className="text-xs max-w-[550px]">
                        How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy and content policies.
                    </span>
                    <div className="flex gap-3">
                        <button onClick={() => setShowReviewForm(!showReviewForm)} className='border-black border-2 hover:opacity-70 transition text-black mr-bold px-12 py-2'>Cancel review</button>
                        <button onClick={() => setShowReviewForm(!showReviewForm)} className='bg-black border-2 hover:opacity-70 transition text-white mr-bold px-12 py-2'>Submit review</button>
                    </div>
                </div>
            </motion.div>}
        </div>
    )
}
