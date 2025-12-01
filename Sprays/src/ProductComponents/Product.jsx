import React, { useState } from 'react'

export const Product = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);

    const decrease = () => {
        if (count > 0) setCount(count - 1);
    };
    return (
        <div className='w-full flex bg-black relative min-h-screen h-screen '>

            <div className="left-0 top-0 absolute bg-black h-full w-1/2 rounded-br-3xl flex justify-end">
                <div className="flex  gap-5 p-10 rounded-sm overflow-hidden">
                    <img src="/images/3-3.webp" alt="a" className='w-[520px] h-[520px] object-cover' />
                </div>
            </div>
            <div className="right-0 top-0 absolute bg-white h-full w-1/2 rounded-tl-3xl flex justify-start">

                <div className=" flex flex-col gap-8 rounded-2xl bg-white p-8">
                    <div className="w-full flex justify-between items-center ">
                        <div className="flex items-center gap-3">
                            <span className='border  b rounded-full px-1 py-px'>
                                <i className="bi bi-arrow-left "></i>
                            </span>
                            <span>Back to home</span>
                        </div>
                        <i className="bi bi-suit-heart "></i>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex text-sm  gap-1">
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <div className="flex flex-col justify-center gap-3 ">
                            <span className='font-bold'>Real Estate</span>
                            <h1 className='text-5xl font-bold'>
                                Pegasus Eau De Parfum

                            </h1>
                            <span className='max-w-[500px] text-sm font-medium'>
                                PEGASUS EAU DE PARFUM is an indulgent luxury fragrance that imparts sophistication and elegance. Crafted with a unique blend of the finest natural ingredients, this captivating fragrance provides great longevity that will make you feel confident and empowered all day long. Pegasus Eau De Parfum is a captivating scent that features a blend of notes from iris and jasmine. Its unique combination of notes creates an enchanting, floral aroma that lasts. Enjoy the long-lasting fragrance of Pegasus and become the center of attention.
                            </span>
                            <div className="flex items-center gap-5  font-medium">
                                <span className='text-sm'>
                                    <i className="bi bi-scissors mr-1"></i>
                                    See Size Guide
                                </span>
                                <span className='text-sm'>
                                    <i className="bi bi-share mr-1"></i>
                                    Share
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className='text-xl text-black font-medium'>$20.00</span>
                                <span className='text-sm line-through text-[#8b8b8b] font-medium'>$25.00</span>
                            </div>

                            <div className="flex flex-col gap-3 text-sm font-medium">
                                <span>
                                    Quantity:
                                </span>
                                <div className="flex border border-[#adadad] px-5 py-1 gap-5 rounded-full w-fit text-[16px]">
                                    <span onClick={decrease} className='cursor-pointer select-none'>-</span>
                                    <span className='cursor-pointer select-none' >{count}</span>
                                    <span className='cursor-pointer select-none' onClick={increase}>+</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 text-sm font-medium">
                                <span>
                                    Weight 60ml
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className='px-3 py-1 text-xs rounded-sm bg-black text-white'>
                                        60ml
                                    </span>
                                    <span className='px-3 py-1 text-xs rounded-sm border border-black text-black'>
                                        50ml
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 text-sm font-medium">
                                <span>
                                    Color: Black
                                </span>
                                <div className="flex items-center gap-1">
                                    <img src="/images/1.webp" alt="" className='w-12 h-12 object-cover border-2 rounded-lg border-white  ' />
                                    <img src="/images/2.webp" alt="" className='w-12 h-12 object-cover border-2 rounded-lg border-white bg-black ' />

                                </div>
                            </div>
                            <div className="flex gap-2">

                                <button className='px-5 py-2 font-semibold w-fit rounded-full border bg-black text-white  hover:bg-white hover:text-black transition duration-300'>Add to cart
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </button>
                                <button className='px-5 py-2 font-semibold w-fit rounded-full border bg-black text-white  hover:bg-white hover:text-black transition duration-300'>
                                    Buy it now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <div className="w-1/2 flex items-center justify-end bg-black rounded-br-3xl">
                <div className="flex items-center gap-5 p-10">
                    <img src="/images/3-3.webp" alt="a" />
                </div>
            </div>
            <div className=" bg-black">
                
            </div> */}
