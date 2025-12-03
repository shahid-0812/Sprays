import React, { useState } from 'react'

export const Cart = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);

    const decrease = () => {
        if (count > 0) setCount(count - 1);
    };
    return (
        <div className='w-full max-w-6xl mx-auto flex flex-col gap-10 py-15'>

            <div className="flex items-center gap-2 text-black">
                <span className='rounded-full px-1.5 py-0.5 text-sm border border-black '>
                    <i className="bi bi-arrow-left"></i>
                </span>
                <span className='text-sm font-medium'>Continue Shopping</span>
            </div>
            <h1 className='text-5xl font-medium mitr'>Your cart</h1>
            <div className="flex justify-between gap-10">
                <div className="w-[70%] flex flex-col gap-5">
                    <div className="flex w-full justify-between gap-3 uppercase text-sm font-semibold border-b border-[#adadad] pb-3">
                        <span className='w-[180px]'>Product Image</span>
                        <span className='w-[250px]'>Product Name</span>
                        <span className='w-[120px]'>Price</span>
                        <span className='w-[164px]'>Quantity</span>
                        <span className='w-[164px] text-right'>Total</span>
                    </div>
                    <div className="flex w-full items-center justify-between gap-5 text-sm font-semibold">
                        <span className='w-[180px]'>
                            <img src="/images/1.webp" alt="" className='object-cover w-full h-full bg-black/80' />
                        </span>
                        <span className='w-[250px]'>
                            <span className="font-medium">
                                Creed
                                <br />
                                Absolu Aventus Dry Woody, Fresh & Fruity<br />
                                Weight: 75ml<br />
                            </span>
                        </span>
                        <span className='w-[120px]'>$20.00</span>
                        <span className='w-[164px]'>
                            <div className="flex border border-[#adadad] px-6 py-1 gap-5 rounded-full w-fit text-[16px]">
                                <span onClick={decrease} className='cursor-pointer select-none'>-</span>
                                <span className='cursor-pointer select-none' >{count}</span>
                                <span className='cursor-pointer select-none' onClick={increase}>+</span>
                            </div>
                        </span>
                        <span className='w-[164px] text-right'>
                            $20.00 <i className="bi bi-trash ml-1 text-red-500"></i>
                        </span>
                    </div>
                    <div className="flex justify-between items-center p-6 bg-[#d6d2d2] rounded-xl">
                        <span className='font-medium text-sm'>
                            <i className="bi bi-gift mr-2"></i>
                            Add a Gift Wrap to your order, For $5.00
                        </span>
                        <button className='px-8 py-3 hover:bg-white hover:border-black border border-transparent hover:text-black transition rounded-full bg-black text-white text-sm font-semibold'>
                            Add a Gift Wrap
                        </button>
                    </div>
                </div>
                <div className="w-[30%] flex flex-col gap-3">
                    <span className='uppercase font-semibold text-sm'>
                        order special instructions
                    </span>
                    <textarea rows={5} placeholder='Order special instructions' className='border border-[#adadad] rounded-sm placeholder:text-sm p-2 placeholder:font-semibold placeholder:text-black' name="" id=""></textarea>
                    <div className="border border-[#adadad] flex flex-col gap-3 items-center justify-center py-6 rounded-sm">
                        <span className='text-sm font-medium'>Subtotal
                            <span className=' text-xl'> $20.00</span>
                        </span>
                        <span className='font-medium text-sm text-center'>Taxes and shipping calculated at checkout</span>
                        <button className='px-8 py-3 hover:bg-white hover:border-black border border-transparent hover:text-black transition rounded-full bg-black text-white text-sm font-semibold'>

                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
