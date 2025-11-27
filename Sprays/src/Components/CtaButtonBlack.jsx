import React from 'react'

export const CtaButtonBlack = ({ text }) => {
    return (
        <button className='bg-black border w-fit border-transparent text-white font-semibold rounded-full text-sm px-3 py-2 cursor-pointer hover:bg-transparent hover:border-black hover:text-black transition duration-500 whitespace-nowrap'>
            <span>{text}</span>
            <i className="bi bi-arrow-right ml-2"></i>
        </button>
    )
}
