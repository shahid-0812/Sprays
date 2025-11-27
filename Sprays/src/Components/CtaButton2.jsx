import React from 'react'

export const CtaButton2 = ({ text }) => {
    return (
        <button className='bg-white border border-transparent text-black font-semibold rounded-full text-sm px-3 py-2 cursor-pointer hover:bg-transparent hover:border-white hover:text-white transition duration-500'>
            <span>{text}</span>
            <i className="bi bi-arrow-right ml-2"></i>
        </button>
    )
}
