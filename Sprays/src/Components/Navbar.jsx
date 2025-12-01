import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    const [langOpen, setLangOpen] = useState(false);
    const [curOpen, setCurOpen] = useState(false);
    const [pageOpen, setPageOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const hover = 'hover:text-[#8b8b8b] transition semibold';

    return (
        <div className='bg-black w-full flex flex-col sticky top-0 z-10 max-lg:px-5'>
            <div className="max-w-6xl mx-auto w-full flex py-3 text-white items-center justify-between border-b border-white max-sm:hidden">
                <span className='font-medium'>
                    Monday - Friday 8:00 AM - 9:00 PM
                </span>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col relative">
                        <div onClick={() => setLangOpen(!langOpen)} className="flex justify-between items-center gap-2 border rounded-full px-4 py-2 cursor-pointer select-none bg-white text-black">
                            <img src="https://sprays-workdo.myshopify.com/cdn/shop/files/en.svg?v=1124470684023176590" className='w-5' alt="no" />
                            <span className='font-medium'>English</span>
                            <i className={`bi bi-chevron-down text-black ${langOpen ? "rotate-180" : "rotate-0"} transition duration-300`}></i>
                        </div>
                        {
                            langOpen && <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                exit={{ scaleY: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute top-10.5 left-0 flex flex-col border bg-white text-black rounded-lg overflow-hidden w-full">
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/en.svg?v=1124470684023176590" className='w-5' alt="no" />
                                    <span className='font-medium'>English</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/ar.svg?v=3666672789038200558" className='w-5' alt="no" />
                                    <span className='font-medium'>العربية</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/ar.svg?v=3666672789038200558" className='w-5' alt="no" />
                                    <span className='font-medium'>Deutsch</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/es.svg?v=10917616493623772375" className='w-5' alt="no" />
                                    <span className='font-medium'>Español</span>
                                </div>

                            </motion.div>
                        }
                    </div>
                    <div className="flex flex-col relative">
                        <div onClick={() => setCurOpen(!curOpen)} className="flex justify-between items-center gap-2 border rounded-full px-4 py-2 cursor-pointer select-none bg-white text-black">
                            <img src="https://sprays-workdo.myshopify.com/cdn/shop/files/usd.svg?v=5981829788044056821" className='w-5' alt="no" />
                            <span className='font-medium'>USD</span>
                            <i className={`bi bi-chevron-down text-black ${curOpen ? "rotate-180" : "rotate-0"} transition duration-300`}></i>
                        </div>
                        {
                            curOpen && <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                exit={{ scaleY: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute top-10.5 left-0 flex flex-col border bg-white text-black rounded-lg overflow-hidden w-full">
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/en.svg?v=1124470684023176590" className='w-5' alt="no" />
                                    <span className='font-medium'>English</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/ar.svg?v=3666672789038200558" className='w-5' alt="no" />
                                    <span className='font-medium'>العربية</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/ar.svg?v=3666672789038200558" className='w-5' alt="no" />
                                    <span className='font-medium'>Deutsch</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-[#e7e7e7] transition w-full">
                                    <img src="https://realestate-workdo.myshopify.com/cdn/shop/files/es.svg?v=10917616493623772375" className='w-5' alt="no" />
                                    <span className='font-medium'>Español</span>
                                </div>

                            </motion.div>
                        }
                    </div>
                    <NavLink>Faq</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                </div>
            </div>
            <div className="max-w-6xl mx-auto w-full  flex items-center justify-between text-white max-sm:p-5">
                <div className="flex items-center">
                    <div className='border-r border-white pr-10 max-sm:border-none'>
                        <img src="logo.webp" alt="" />
                    </div>
                    <div className="flex items-center gap-3 px-5 max-sm:hidden">
                        <NavLink to='/' className='link-grow'>
                            Home
                        </NavLink>

                        <NavLink to='/shop' className='link-grow'>
                            Shop
                        </NavLink>
                        <NavLink to='/blogs' className='link-grow'>
                            Blog
                        </NavLink>
                        <div onMouseEnter={() => setPageOpen(true)} onMouseLeave={() => setPageOpen(false)} className="relative cursor-pointer  py-8">
                            <span className='link-grow'>Pages

                                <i
                                    className={`bi bi-chevron-down ml-2 inline-block transform transition-transform duration-300 ${pageOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                ></i>
                            </span>
                            <AnimatePresence>
                                {pageOpen && <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.2, 0, 0.2, 1]  // fast start, slow end
                                    }}
                                    className="absolute left-25 -translate-x-1/2 bg-black px-5  shadow-lg capitalize rounded-lg w-50 mt-5  flex flex-col gap-1 py-3 overflow-hidden"
                                >
                                    <NavLink to='/contact' className={hover}>
                                        Contact
                                    </NavLink>
                                    <NavLink to="/about"  className={hover}>
                                        About Us
                                    </NavLink>
                                    <NavLink to='/FAQs' className={hover}>
                                        FAQs
                                    </NavLink>
                                    <NavLink to='/privacy' className={hover}>
                                        Privacy Policy
                                    </NavLink>
                                    <NavLink to='/shipping' className={hover}>
                                        Shipping & Policy
                                    </NavLink>
                                    <NavLink to='/terms' className={hover}>
                                        Terms & Conditions
                                    </NavLink>
                                </motion.div>
                                }
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
                <div className="max-sm:flex items-center gap-3 text-2xl lg:hidden max-lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3699 21.0448H4.60183C4.11758 21.0448 3.72502 20.6522 3.72502 20.168C3.72502 19.6837 4.11758 19.2912 4.60183 19.2912H13.3699C13.8542 19.2912 14.2468 18.8986 14.2468 18.4143V14.7756C14.2026 14.2836 13.9075 13.8492 13.4664 13.627C10.0296 12.2394 6.18853 12.2394 2.75176 13.627C2.31062 13.8492 2.01554 14.2836 1.9714 14.7756V20.168C1.9714 20.6522 1.57883 21.0448 1.09459 21.0448C0.610335 21.0448 0.217773 20.6522 0.217773 20.168V14.7756C0.256548 13.5653 0.986136 12.4845 2.09415 11.9961C5.95255 10.4369 10.2656 10.4369 14.124 11.9961C15.232 12.4845 15.9616 13.5653 16.0004 14.7756V18.4143C16.0004 19.8671 14.8227 21.0448 13.3699 21.0448ZM12.493 4.38406C12.493 1.96281 10.5302 0 8.10892 0C5.68767 0 3.72486 1.96281 3.72486 4.38406C3.72486 6.80531 5.68767 8.76812 8.10892 8.76812C10.5302 8.76812 12.493 6.80531 12.493 4.38406ZM10.7393 4.38483C10.7393 5.83758 9.56159 7.01526 8.10884 7.01526C6.6561 7.01526 5.47841 5.83758 5.47841 4.38483C5.47841 2.93208 6.6561 1.75439 8.10884 1.75439C9.56159 1.75439 10.7393 2.93208 10.7393 4.38483Z" fill="#fff"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5698 10.627H6.97178C5.80842 10.6273 4.81015 9.79822 4.59686 8.65459L3.47784 2.59252C3.40702 2.20522 3.06646 1.92595 2.67278 1.93238H0.805055C0.360435 1.93238 0 1.57194 0 1.12732C0 0.682701 0.360435 0.322266 0.805055 0.322266H2.68888C3.85224 0.321937 4.85051 1.15101 5.0638 2.29465L6.18282 8.35672C6.25364 8.74402 6.5942 9.02328 6.98788 9.01686H15.5778C15.9715 9.02328 16.3121 8.74402 16.3829 8.35672L17.3972 2.88234C17.4407 2.64509 17.3755 2.40085 17.2195 2.21684C17.0636 2.03283 16.8334 1.92843 16.5922 1.93238H7.2455C6.80088 1.93238 6.44044 1.57194 6.44044 1.12732C6.44044 0.682701 6.80088 0.322266 7.2455 0.322266H16.5841C17.3023 0.322063 17.9833 0.641494 18.4423 1.19385C18.9013 1.74622 19.0907 2.4742 18.959 3.18021L17.9447 8.65459C17.7314 9.79822 16.7331 10.6273 15.5698 10.627ZM10.466 13.8478C10.466 12.5139 9.38464 11.4326 8.05079 11.4326C7.60617 11.4326 7.24573 11.7931 7.24573 12.2377C7.24573 12.6823 7.60617 13.0427 8.05079 13.0427C8.49541 13.0427 8.85584 13.4032 8.85584 13.8478C8.85584 14.2924 8.49541 14.6528 8.05079 14.6528C7.60617 14.6528 7.24573 14.2924 7.24573 13.8478C7.24573 13.4032 6.88529 13.0427 6.44068 13.0427C5.99606 13.0427 5.63562 13.4032 5.63562 13.8478C5.63562 15.1816 6.71693 16.2629 8.05079 16.2629C9.38464 16.2629 10.466 15.1816 10.466 13.8478ZM15.2963 15.4579C15.2963 15.0133 14.9358 14.6528 14.4912 14.6528C14.0466 14.6528 13.6862 14.2924 13.6862 13.8478C13.6862 13.4032 14.0466 13.0427 14.4912 13.0427C14.9358 13.0427 15.2963 13.4032 15.2963 13.8478C15.2963 14.2924 15.6567 14.6528 16.1013 14.6528C16.5459 14.6528 16.9064 14.2924 16.9064 13.8478C16.9064 12.5139 15.8251 11.4326 14.4912 11.4326C13.1574 11.4326 12.076 12.5139 12.076 13.8478C12.076 15.1816 13.1574 16.2629 14.4912 16.2629C14.9358 16.2629 15.2963 15.9025 15.2963 15.4579Z" fill="white"></path>
                    </svg>
                    <i className="bi bi-list" onClick={() => setMenuOpen(!menuOpen)}></i>
                </div>
                <div className="flex items-center gap-3 max-sm:hidden">
                    <div className="px-3 py-2 bg-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3699 21.0448H4.60183C4.11758 21.0448 3.72502 20.6522 3.72502 20.168C3.72502 19.6837 4.11758 19.2912 4.60183 19.2912H13.3699C13.8542 19.2912 14.2468 18.8986 14.2468 18.4143V14.7756C14.2026 14.2836 13.9075 13.8492 13.4664 13.627C10.0296 12.2394 6.18853 12.2394 2.75176 13.627C2.31062 13.8492 2.01554 14.2836 1.9714 14.7756V20.168C1.9714 20.6522 1.57883 21.0448 1.09459 21.0448C0.610335 21.0448 0.217773 20.6522 0.217773 20.168V14.7756C0.256548 13.5653 0.986136 12.4845 2.09415 11.9961C5.95255 10.4369 10.2656 10.4369 14.124 11.9961C15.232 12.4845 15.9616 13.5653 16.0004 14.7756V18.4143C16.0004 19.8671 14.8227 21.0448 13.3699 21.0448ZM12.493 4.38406C12.493 1.96281 10.5302 0 8.10892 0C5.68767 0 3.72486 1.96281 3.72486 4.38406C3.72486 6.80531 5.68767 8.76812 8.10892 8.76812C10.5302 8.76812 12.493 6.80531 12.493 4.38406ZM10.7393 4.38483C10.7393 5.83758 9.56159 7.01526 8.10884 7.01526C6.6561 7.01526 5.47841 5.83758 5.47841 4.38483C5.47841 2.93208 6.6561 1.75439 8.10884 1.75439C9.56159 1.75439 10.7393 2.93208 10.7393 4.38483Z" fill="#183A40"></path>
                        </svg>
                    </div>

                    <button className='flex items-center gap-3 rounded-full px-5 py-2 border'>
                        <i className="bi bi-cart"></i>
                        <span> $0.00</span>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/40 bg-opacity-50 z-40 w-full"
                ></div>
            )}
            <div
                className={`fixed  bg-white  top-0 right-0 h-full w-full  shadow-lg transform transition-transform duration-300 z-50 
                ${menuOpen ? "translate-x-0" : "translate-x-full"} 
                max-lg:block lg:hidden`}
            >
                <div className="flex  flex-col gap-5 text-black h-full relative">
                    <span className='bg-black text-white p-3'>
                        <i onClick={() => setMenuOpen(false)} className="bi bi-x-lg "></i>
                    </span>
                    <div className="flex flex-col gap-3 w-full px-6">
                        <Link to="/" className="flex mr-bold">Home</Link>
                        <Link to="/shop" className="flex mr-bold">Shop</Link>
                        <Link to="/blogs" className="flex mr-bold">Blogs</Link>
                        <Link to="/contact" className="flex mr-bold">Contact</Link>

                    </div>
                    <div className="flex items-center w-full px-6 absolute bottom-0 gap-3 border-t border-[#9a9a9a] py-3">
                        <i className="bi bi-person text-lg"></i>
                        <span className='mr-semibold'>Account</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
