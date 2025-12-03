import React, { useRef } from 'react'
import { Heading } from '../Components/Heading'
import { CtaButtonBlack } from '../Components/CtaButtonBlack'
import { Sprays } from '../Components/AllProducts'
import { Swiper, SwiperSlide } from "swiper/react";
import { SprayCard } from '../Components/SprayCard';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const Unique = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='max-w-6xl mx-auto w-full flex justify-between gap-10 py-10 max-lg:flex-col max-lg:px-5'>
            <div className="w-1/2 flex flex-col gap-5 max-lg:w-full max-lg:text-center max-lg:items-center">
                <Heading
                    show='hidden'
                    heading='Unique perfumes for women and men'
                    span='The applications of sprays span a wide spectrum, catering to industrial, artistic, medicinal, and everyday needs.'
                    center='max-lg:items-center'
                />
                <div className="flex items-center gap-2">
                    <button className='hover:bg-black border w-fit  text-black font-semibold rounded-full text-sm px-6 py-2 cursor-pointer bg-transparent hover:border-black hover:text-white transition duration-500'>
                        <span>Unisex</span>
                    </button>
                    <button className='hover:bg-black border w-fit  text-black font-semibold rounded-full text-sm px-6 py-2 cursor-pointer bg-transparent hover:border-black hover:text-white transition duration-500'>
                        <span>Men</span>
                    </button>
                </div>
                <CtaButtonBlack

                    text='Check More Products'
                />
            </div>
            <div className="w-1/2 max-lg:w-full">
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
                        {Sprays.map((spray) => (
                            <SwiperSlide key={spray.id}>
                                <SprayCard
                                    img={`/images/${spray.id}.webp`}
                                    img2={`/images/${spray.id}-${spray.id}.webp`}
                                    name={spray.name}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
