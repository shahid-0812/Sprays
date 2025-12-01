import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Sprays } from '../Components/AllProducts';
import { SprayCard } from '../Components/SprayCard';

export const Shop = () => {

    const [filterOpen, setFilterOpen] = useState(false);
    const [availableOpen, setAvailableOpen] = useState(false);
    const [priceopen, setPriceOpen] = useState(false);
    const [typeopen, setTypeOpen] = useState(false);
    const [morefiltersopen, setMoreFilterOpen] = useState(false);
    const [brandopen, setBrandOpen] = useState(false);

    return (
        <div className='flex flex-col'>
            <div className='bg-black py-20 max-lg:px-5'>
                <div className="max-w-6xl mx-auto w-full flex flex-col gap-5">
                    <div className="flex items-center gap-2 text-white">
                        <span className='rounded-full px-1 py-0.5 text-sm border border-white '>
                            <i className="bi bi-arrow-left"></i>
                        </span>
                        <span className='text-sm'>Back to home</span>
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                        <span className='text-5xl font-bold'>
                            Bestseller
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex max-w-6xl mx-auto w-full flex-col py-15 max-lg:px-5 max-sm:px-0">
                <div className="flex border-b border-black/30">
                    <div className="w-[30%] text-2xl font-semibold border-r border-black/30 pb-3 max-sm:hidden">Filters</div>
                    <div className="w-[70%] text-sm flex justify-between items-center px-5 max-sm:w-full max-sm:px-2">
                        <span className="font-semibold max-sm:hidden">Home / Bestseller</span>
                        <span onClick={() => setFilterOpen(!filterOpen)} className='border px-1 text-xl rounded-sm hidden max-sm:flex'>
                            <i className="bi bi-filter"></i>
                        </span>
                        <span className='font-semibold'>
                            <b>Sort by: </b>
                            Best selling <i className="bi bi-chevron-down px-3"></i>
                        </span>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[30%] flex flex-col border-r border-black/30 py-10 max-sm:hidden">
                        <div className="flex flex-col gap-3 border-b border-black/30 py-5 ">
                            <div className="flex flex-col gap-1 pr-10 ">
                                <span className='uppercase mitr'>Availability</span>
                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                    <span>0 selected</span>
                                    <span>Reset</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2  pr-10">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>In stock</span>
                                    </div>
                                    <span className='font-semibold'>(8)</span>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>Out of stock</span>
                                    </div>
                                    <span className='font-semibold'>(7)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 border-b border-black/30 py-5 ">
                            <div className="flex flex-col gap-1 pr-10 ">
                                <span className='uppercase mitr'>Price</span>
                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                    <span className=''>The highest price is $11,000.00
                                    </span>
                                    <span>Reset</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm font-medium  pr-10">

                                <div className="flex flex-col w-full">
                                    <span>Min price:</span>

                                    <input type="text" className="border border-black/30 rounded-sm w-full py-1" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <span>Max price:</span>

                                    <input type="text" className="border border-black/30 rounded-sm w-full py-1" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 border-b border-black/30 py-5 ">
                            <div className="flex flex-col gap-1 pr-10 ">
                                <span className='uppercase mitr'>product type</span>
                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                    <span>0 selected</span>
                                    <span>Reset</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2  pr-10">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>Home</span>
                                    </div>
                                    <span className='font-semibold'>(8)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 border-b border-black/30 py-5 ">
                            <div className="flex flex-col gap-1 pr-10 ">
                                <span className='uppercase mitr'>More Filters</span>
                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                    <span>0 selected</span>
                                    <span>Reset</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2  pr-10">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>Home</span>
                                    </div>
                                    <span className='font-semibold'>(8)</span>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>House</span>
                                    </div>
                                    <span className='font-semibold'>(7)</span>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>Villa</span>
                                    </div>
                                    <span className='font-semibold'>(7)</span>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>Villa</span>
                                    </div>
                                    <span className='font-semibold'>(7)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 py-5 ">
                            <div className="flex flex-col gap-1 pr-10 ">
                                <span className='uppercase mitr'>Brand</span>
                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                    <span>0 selected</span>
                                    <span>Reset</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2  pr-10">

                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox" />
                                        <span>Real Estate</span>
                                    </div>
                                    <span className='font-semibold'>(7)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        filterOpen && (
                            <div
                                onClick={() => setFilterOpen(false)}
                                className="fixed inset-0 bg-black/40 z-40"
                            ></div>
                        )
                    }
                    <div
                        className={`fixed top-0 left-0 h-full w-full max-w-sm  bg-white shadow-lg transform transition-transform duration-300 z-500
                        ${filterOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
                    >
                        <div className="flex flex-col h-full relative gap-5">
                            <div className="flex justify-between items-center bg-[#63c0ee] p-4 w-fit text-white">
                                <i
                                    onClick={() => setFilterOpen(false)}
                                    className="bi bi-x-lg self-end  cursor-pointer"
                                ></i>
                            </div>
                            <div className="flex flex-col gap-3 overflow-hidden">
                                <div className="flex flex-col gap-3 px-5 relative">
                                    <div onClick={() => setAvailableOpen(!availableOpen)} className="flex justify-between">
                                        <span>Availability</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    {availableOpen &&
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "100%", opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex flex-col gap-3">
                                            <div className="flex flex-col gap-2 ">
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>In stock</span>
                                                    </div>
                                                    <span className='font-semibold'>(8)</span>
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>Out of stock</span>
                                                    </div>
                                                    <span className='font-semibold'>(7)</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 items-center justify-center border-t-[0.5px] pt-3 border-[#adadad]">
                                                <button className='bg-[#63c0ee] px-2 py-1 rounded-sm'>Clear</button>
                                                <button className='bg-black text-white px-2 py-1 rounded-sm'>Apply</button>
                                            </div>
                                        </motion.div>}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 px-5 relative">
                                <div onClick={() => setPriceOpen(!priceopen)} className="flex justify-between">
                                    <span>Price</span>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                                {priceopen &&
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "100%", opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-1 pr-10 ">
                                            <div className="flex w-full justify-between items-center text-sm font-medium">
                                                <span className=''>The highest price is $11,000.00
                                                </span>

                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 text-sm font-medium  pr-10">

                                            <div className="flex flex-col w-full">
                                                <span>Min price:</span>

                                                <input type="text" className="border border-black/30 rounded-sm w-full py-1" />
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <span>Max price:</span>

                                                <input type="text" className="border border-black/30 rounded-sm w-full py-1" />
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center justify-center border-t-[0.5px] pt-3 border-[#adadad]">
                                            <button className='bg-[#63c0ee] px-2 py-1 rounded-sm'>Clear</button>
                                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Apply</button>
                                        </div>
                                    </motion.div>
                                }
                            </div>
                            <div className="flex flex-col gap-3 px-5 relative">
                                <div onClick={() => setTypeOpen(!typeopen)} className="flex justify-between">
                                    <span>Product Type</span>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                                {typeopen &&
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "100%", opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col gap-3">

                                        <div className="flex flex-col gap-3 border-b border-black/30 py-5 ">
                                            <div className="flex flex-col gap-1 pr-10 ">
                                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                                    <span>0 selected</span>
                                                    <span>Reset</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2  pr-10">
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>Home</span>
                                                    </div>
                                                    <span className='font-semibold'>(8)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center justify-center border-t-[0.5px] pt-3 border-[#adadad]">
                                            <button className='bg-[#63c0ee] px-2 py-1 rounded-sm'>Clear</button>
                                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Apply</button>
                                        </div>
                                    </motion.div>
                                }
                            </div>
                            <div className="flex flex-col gap-3 px-5 relative">
                                <div onClick={() => setMoreFilterOpen(!morefiltersopen)} className="flex justify-between">
                                    <span>More Filters</span>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                                {morefiltersopen &&
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "100%", opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col gap-3">

                                        <div className="flex flex-col gap-3 border-b border-black/30 py-5 ">
                                            <div className="flex flex-col gap-1 pr-10 ">
                                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                                    <span>0 selected</span>
                                                    <span>Reset</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2  pr-10">
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>Home</span>
                                                    </div>
                                                    <span className='font-semibold'>(8)</span>
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>House</span>
                                                    </div>
                                                    <span className='font-semibold'>(7)</span>
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>Villa</span>
                                                    </div>
                                                    <span className='font-semibold'>(7)</span>
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>Villa</span>
                                                    </div>
                                                    <span className='font-semibold'>(7)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center justify-center border-t-[0.5px] pt-3 border-[#adadad]">
                                            <button className='bg-[#63c0ee] px-2 py-1 rounded-sm'>Clear</button>
                                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Apply</button>
                                        </div>
                                    </motion.div>
                                }
                            </div>
                            <div className="flex flex-col gap-3 px-5 relative">
                                <div onClick={() => setBrandOpen(!brandopen)} className="flex justify-between">
                                    <span>Brand</span>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                                {brandopen &&
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "100%", opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-3 py-5 ">
                                            <div className="flex flex-col gap-1 pr-10 ">
                                                <div className="flex w-full justify-between items-center text-sm font-medium">
                                                    <span>0 selected</span>
                                                    <span>Reset</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2  pr-10">

                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-1">
                                                        <input type="checkbox" />
                                                        <span>Real Estate</span>
                                                    </div>
                                                    <span className='font-semibold'>(7)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 items-center justify-center border-t-[0.5px] pt-3 border-[#adadad]">
                                            <button className='bg-[#63c0ee] px-2 py-1 rounded-sm'>Clear</button>
                                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Apply</button>
                                        </div>
                                    </motion.div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-[70%] flex p-5 gap-3 flex-wrap max-sm:w-full">
                        {
                            Sprays.map((item) => (

                                <div className='w-[32%] max-lg:w-[48%] max-sm:w-full'>
                                    <SprayCard
                                        img={`/images/${item.id}.webp`}
                                        img2={`/images/${item.id}-${item.id}.webp`}
                                        name={item.name}
                                    />

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
