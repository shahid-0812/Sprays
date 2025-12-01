import React, { useRef } from 'react'
import { Heading } from '../Components/Heading'
import { CtaButtonBlack } from '../Components/CtaButtonBlack'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const Innovation = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const Card = [
        {
            id: 1,
            name: "Aromatics Anonymous",
        },
        {
            id: 2,
            name: "The Perfume Diaries",
        },
        {
            id: 3,
            name: "Sentimental Surprises",
        },
        {
            id: 4,
            name: "The Scent Scribe",
        },
        {
            id: 5,
            name: "the Scent Haven",
        },
    ];
    return (
        <div className="flex flex-col max-w-6xl mx-auto items-center gap-5 py-15 max-lg:px-5">
            <Heading
                heading='Revolutionizing Innovation and Practicality'
                span='From creating backgrounds in mixed media artworks to achieving unique patterns in abstract paintings, sprays offer a modern twist to artistic expression.'
                center='items-center text-center'
                show='hidden'

            />
            <div className="relative group w-full">
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
                    {Card.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col w-full rounded-2xl border overflow-hidden">
                                <div>
                                    <img src={`/images/image-${item.id}.webp`} className='w-full h-full object-cover' alt="" />
                                </div>
                                <div className="flex flex-col gap-1 p-4">
                                    <span>Article</span>
                                    <h1 className='text-xl bold mitr'>
                                        {item.name}
                                    </h1>
                                    <span>We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate</span>
                                    <div className="flex justify-between items-center my-1">
                                        <CtaButtonBlack text='Read More' />
                                        <span className="text-right">
                                            November 16, 2023
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}
