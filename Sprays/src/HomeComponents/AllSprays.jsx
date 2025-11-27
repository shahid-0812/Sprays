import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { SprayCard } from '../Components/SprayCard';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Sprays } from '../Components/AllProducts';
export const AllSprays = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className='flex flex-col gap-3 max-w-6xl mx-auto w-full py-10 relative'>

                <span className='text-4xl font-medium mitr'>
                    Transforming Surfaces with Spray Mastery
                </span>
            </div>
            <div className="relative group">
                <div className="flex absolute px-5 z-10 justify-between top-1/2 -translate-y-1/2 w-full gap-3 mb-4 opacity-0 group-hover:opacity-100 transition duration-300">
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
                    slidesPerView={5}
                    spaceBetween={20}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
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
        </>
    )
}
