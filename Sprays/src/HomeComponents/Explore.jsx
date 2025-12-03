import React, { useRef } from 'react'
import { CtaButton } from '../Components/CtaButton'
import { Swiper, SwiperSlide } from "swiper/react";
import { SprayCard } from '../Components/SprayCard';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Sprays } from '../Components/AllProducts';

export const Explore = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='max-w-6xl w-full mx-auto py-15 flex flex-col gap-10 max-lg:px-5'>
            <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-3">
                <h1 className='font-medium text-4xl mitr max-lg:text-2xl'>Exploring the<br />
                    <span className='font-light whitsp'> Versatility of Sprays</span>
                </h1>
                <div className="flex gap-2 whitespace-nowrap max-sm:flex-wrap">
                    <CtaButton text='Fragrances' />
                    <CtaButton text='Unisex Perfume' />
                    <CtaButton text='Solid Perfume' />
                </div>
            </div>
            <div className="relative group">

                <div className="flex absolute  z-10 justify-between top-1/2 -translate-y-1/2 w-full gap-3 mb-4 opacity-0 group-hover:opacity-100 transition duration-300">
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
                    slidesPerView={4}
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
                                slidesPerView: 3,
                            },
                            1025: {
                                slidesPerView: 4,
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
    )
}
