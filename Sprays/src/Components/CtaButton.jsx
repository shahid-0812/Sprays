import React from 'react'

export const CtaButton = ({ text }) => {
    return (
        <button className='bg-black w-fit border border-transparent text-white font-semibold rounded-full text-sm px-3 py-2 cursor-pointer hover:bg-white hover:border-black hover:text-black transition duration-500'>
            <span>{text}</span>
            <i className="bi bi-bag ml-2"></i>
        </button>
    )
}
