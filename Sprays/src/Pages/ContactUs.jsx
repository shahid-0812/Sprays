import React from 'react'
import { PageBanner } from '../Components/PageBanner'

export const ContactUs = () => {
    return (
        <div className="flex flex-col ">
            <PageBanner pagename="Contact Us" para="With that in mind, we strive to deliver accurate, trustworthy, and engaging content to our users. Our team of experts, researchers, and writers work tirelessly to curate high-quality articles, guides, and resources that cover various domains such as technology, science, health, business, and more." />
            <div className="flex w-full jus max-w-6xl mx-auto py-15 max-lg:px-5 max-sm:flex-col">
                <div className="flex gap-10 w-full">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <span className='text-sm font-medium'>CALL US</span>
                            <span className="text-xl font-bold">+48 0024-32-12</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className='text-sm font-medium'>EMAIL: </span>
                            <span className="text-xl font-bold">shop@company.com</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-sm font-bold">
                            ADDRESS:
                        </span>
                        <span className='text-sm font-medium max-w-[150px]'>
                            1093 Marigold Lane,
                            Coral Way, Miami,
                            Florida, 33169</span>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5 -mt-70 max-sm:mt-0">
                    <h1 className='text-5xl mitr  text-white'>Contact form</h1>
                    <div className="flex flex-col gap-5 p-6 border-2 border-[#161829] rounded-sm bg-white">
                        <div className="flex items-center gap-5 max-sm:flex-col">
                            <div className="flex flex-col gap-2 font-medium text-sm w-full">
                                <span>First Name : </span>
                                <input type="text" placeholder='First Name' className='w-full p-3 border placeholder:text-black rounded-sm border-[#d6d2d2]' />
                            </div>
                            <div className="flex flex-col gap-2 font-medium text-sm w-full">
                                <span>Last Name : </span>
                                <input type="text" placeholder='Last Name' className='w-full p-3 border placeholder:text-black rounded-sm border-[#d6d2d2]' />
                            </div>
                        </div>
                        <div className="flex items-center gap-5 max-sm:flex-col">
                            <div className="flex flex-col gap-2 font-medium text-sm w-full">
                                <span>Email : </span>
                                <input type="text" placeholder='shop@company.com' className='w-full p-3 border placeholder:text-black rounded-sm border-[#d6d2d2]' />
                            </div>
                            <div className="flex flex-col gap-2 font-medium text-sm w-full">
                                <span>Phone number : </span>
                                <input type="text" placeholder='Phone number' className='w-full p-3 border placeholder:text-black rounded-sm border-[#d6d2d2]' />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 font-medium text-sm w-full">
                            <span>Description</span>
                            <textarea color='10' rows={10} type="text" placeholder='How Can We Help?' className='w-full p-3 border placeholder:text-black rounded-sm border-[#d6d2d2]' />
                        </div>
                        <button className='px-5 py-3 bg-[#161829] w-fit rounded-full text-white text-sm font-semibold'>
                            Send Message <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
