import React from 'react'

export const AboutSectionThree = () => {
    return (
        <div className='max-w-6xl mx-auto w-full flex flex-col gap-5 py-15 max-lg:px-5'>
            <div className="flex flex-col gap-5 text-center w-full items-center">
                <span className='text-5xl mitr max-sm:text-3xl'>About our Services</span>
                <span className="text-sm max-w-[750px]">Our mission is to empower individuals with knowledge and facilitate meaningful connections through our platform.We understand the importance of reliable and up-to-date information in today's fast-paced world.</span>
            </div>
            <div className="flex justify-between gap-5 max-sm:flex-col">
                <div className="flex flex-col gap-3 p-5 border border-[#d6d2d2] w-full">
                    <div className="flex justify-between items-center">
                        <span className="text-2xl mitr">
                            Fast delivery
                        </span>
                        <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/01_24x24.png?v=1680516134" className='w-5 h-5 object-center' alt="" />
                    </div>
                    <span className="text-sm max-w-[750px]">
                        The specific delivery time will vary depending on the shipping address and the selected delivery option. Customers can track their order online
                    </span>
                </div>
                <div className="flex flex-col gap-3 p-5 border border-[#d6d2d2] w-full">
                    <div className="flex justify-between items-center">
                        <span className="text-2xl mitr">
                            Many offers
                        </span>
                        <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/02_24x24.png?v=1680516135" className='w-6 h-6 object-center' alt="" />
                    </div>
                    <span className="text-sm max-w-[750px]">
                        CMS also offers a variety of training and technical assistance to help providers and state agencies meet their responsibilities under Medicare
                    </span>
                </div>
                <div className="flex flex-col gap-3 p-5 border border-[#d6d2d2] w-full">
                    <div className="flex justify-between items-center">
                        <span className="text-2xl mitr">
                            Fast delivery
                        </span>
                        <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/03_24x24.png?v=1680516135" className='w-5 h-5 object-center' alt="" />
                    </div>
                    <span className="text-sm max-w-[750px]">
                        CMS Service support is available 24 hours a day, 7 days a week. You can reach them by phone, email, or chat. Here are the contact information for CM
                    </span>
                </div>
            </div>
        </div>
    )
}
