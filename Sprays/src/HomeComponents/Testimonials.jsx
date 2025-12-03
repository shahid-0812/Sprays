import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const Reviws = [
        {
            id: 1,
            img: "/images/testi1.webp",
            title: "Excellent!",
            review: "from cooling systems in industrial machinery to lubrication processes and the creation of various products. They are integral in the production of items ranging from pharmaceuticals to food.",
        },
        {
            id: 2,
            img: "/images/testi2.webp",
            title: "Great Products !!",
            review: "Sprays also facilitate cooling systems in industries dealing with high-temperature processes, effectively dissipating heat through atomized droplets.",
        },
        {
            id: 3,
            img: "/images/testi1.webp",
            title: "Great Customer Support",
            review: "Agriculture benefits significantly from sprays, employing them for the controlled distribution of pesticides, fertilizers, and herbicides.",
        },
        {
            id: 4,
            img: "/images/testi2.webp",
            title: "Excellent!",
            review: "from cooling systems in industrial machinery to lubrication processes and the creation of various products. They are integral in the production of items ranging from pharmaceuticals to food.",
        },
        {
            id: 5,
            img: "/images/testi1.webp",
            title: "Great Products !!",
            review: "Sprays also facilitate cooling systems in industries dealing with high-temperature processes, effectively dissipating heat through atomized droplets.",
        },
    ];
    return (
        <div className='flex flex-col max-w-6xl mx-auto w-full gap-3 py-15 max-lg:px-5'>
            <h1 className='text-5xl font-medium mitr'>Testimonials</h1>
            <div className="relative group">
                <div className="flex absolute z-10 justify-between top-1/2 -translate-y-1/2 w-full gap-3 mb-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button ref={prevRef} className="cursor-pointer px-3 py-2 bg-black rounded-lg text-white hover:text-white shadow hover:opacity-80  transition">
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <button ref={nextRef} className="cursor-pointer px-3 py-2 bg-black rounded-lg text-white hover:text-white shadow hover:opacity-80  transition">
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={20}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1025: {
                                slidesPerView: 2,
                            },
                        }}
                    
                >
                    {Reviws.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex items-center p-5 w-full rounded-3xl border border-[#e2e2e2] max-sm:gap-3">
                                <img src={item.img} alt="" className='w-full h-full object-cover max-sm:w-15'/>
                                <div className="flex flex-col gap-1 w-full ">
                                    <div className="flex  justify-between items-center max-sm:flex-col max-sm:items-start">
                                        <h1 className='text-xl font-medium mitr'>
                                            {item.title}
                                        </h1>
                                        <div className="flex gap-2 items-center">
                                            <div className="flex text-xs gap-0.5 items-center text-black">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                            <span className='whitespace-nowrap'>4.5 / 5</span>
                                        </div>
                                    </div>
                                    <span>{item.review}</span>
                                    <h1 className='font-medium mitr'>
                                        John Doe, Client
                                    </h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
