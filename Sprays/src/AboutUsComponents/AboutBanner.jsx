import React from 'react'

export const AboutBanner = () => {
    return (
        <div className='bg-black py-25 max-lg:px-5'>
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-5">
                <div className="flex items-center gap-2 text-white">
                    <span className='rounded-full px-1 py-0.5 text-sm border border-white '>
                        <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className='text-sm'>Back to home</span>
                </div>
                <div className="flex flex-col gap-2 text-white">
                    <span className='text-5xl font-bold max-sm:text-3xl'>
                        About us
                    </span>
                    <span className='text-sm max-w-[550px] font-medium'>
                        At AboutUs, we are a dynamic and innovative company committed to providing comprehensive information and valuable insights on a wide range of topics.
                    </span>
                </div>
            </div>
        </div>
    )
}
