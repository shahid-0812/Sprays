import React from 'react'
import { PageBanner } from '../Components/PageBanner'

export const WishList = () => {
    return (
        <>
            <PageBanner pagename="Wishlist" para="we are driven by a passion for learning, discovery, and connection. We constantly strive to enhance our platform, incorporate emerging technologies, and adapt to the evolving needs of our users." />
            <div className="flex flex-col items-center gap-5 py-15 max-w-6xl mx-auto w-full max-lg:px-5">
                <h1 className='text-5xl mitr font-medium max-lg:text-3xl'>Wishlist(0)</h1>
                <div className="flex items-center justify-around font-semibold gap-5 py-3 rounded-xl bg-[#d6d2d2] w-full">
                    <span>Product</span>
                    <span>Details</span>
                    <span>Cart Button</span>
                    <span>Delete</span>
                </div>
                <button className='text-sm font-medium bg-[#161829] hover:bg-transparent border border-transparent hover:border-black text-white px-8 py-3 rounded-full  hover:text-black transition duration-300'>
                    Clear All
                </button>
            </div>
        </>
    )
}
