import React, { useState } from 'react'
import { CtaButton } from './CtaButton'
import { Link } from 'react-router-dom';

export const SprayCard = ({ img, name, price, img2 }) => {
    const [isImg, setIsImg] = useState(false);
    return (
        <Link to='/productDetails' onMouseEnter={() => setIsImg(true)} onMouseLeave={() => setIsImg(false)} className="flex flex-col   bg-white border border-black rounded-lg text-black overflow-hidden cursor-pointer">
            <div className='relative p-5'>

                <span className='text-xs rounded-full px-2 py-1 border absolute top-3  left-3'>20%</span>
                <div className='flex flex-col gap-1 text-xs absolute top-3 right-3'>
                    <span className='rounded-sm px-2 py-1 border w-fit'>
                        <i className="bi bi-suit-heart"></i>
                    </span>
                    <span className='rounded-sm px-2 py-1 border w-fit'>
                        <i className="bi bi-arrow-left-right"></i>
                    </span>
                    <span className='rounded-sm px-2 py-1 border w-fit'>
                        <i className="bi bi-eye"></i>
                    </span>


                </div>
                <img src={isImg ? img2 : img} alt="NO IMAGE" className='h-full w-full object-cover' />
            </div>
            <div className="flex flex-col gap-2 p-5">
                <span>Rihanna</span>
                <h1 className='text-xlmitr font-thin text-lg'>{name}</h1>
                <div className="flex items-center gap-3">
                    <span>Weight:</span>
                    <select name="" id="" className='border rounded-lg w-full py-1 px-2'>
                        <option value="50">50 ml</option>
                    </select>
                </div>
                <div className="flex text-xs gap-0.5 items-center text-black">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col ">
                        <span className='font-semibold'>{price}</span>
                        <span className='line-through text-sm text-[#8b8b8b]'>$25.00</span>
                    </div>
                    <CtaButton text='Add to Cart' />
                </div>
            </div>
        </Link>
    )
}
