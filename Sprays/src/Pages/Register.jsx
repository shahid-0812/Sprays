import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <div className="flex flex-col items-center gap-5 max-w-6xl mx-auto w-full py-15">
            <div className="flex items-center gap-2 text-black">
                <span className='rounded-full px-3 py-2 text-sm border border-black '>
                    <i className="bi bi-arrow-left"></i>
                </span>
                <span className='text-sm'>Back to home</span>
            </div>
            <h1 className='text-5xl mitr font-medium'>Create account</h1>
            <div className='border border-[#adadad]  w-1/2 flex flex-col'>
                <span className='text-lg font-semibold p-5'>Your Personal Details</span>
                <div className="flex flex-col gap-5 border-y border-[#adadad] p-5">
                    <span className="text-sm font-medium">I am a returning customer</span>
                    <div className="flex w-full gap-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name" className='text-sm font-medium'>First Name*: </label>
                            <input type="text" className='border border-[#adadad] rounded-sm py-4 px-3 placeholder:text-sm w-full placeholder:text-black placeholder:font-medium' placeholder='First name' />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name" className='text-sm font-medium'>Last Name*: </label>
                            <input type="text" className='border border-[#adadad] rounded-sm py-4 px-3 placeholder:text-sm w-full placeholder:text-black placeholder:font-medium' placeholder='Last name' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="name" className='text-sm font-medium'>Email*: </label>
                        <input type="text" className='border border-[#adadad] rounded-sm py-4 px-3 placeholder:text-sm w-full placeholder:text-black placeholder:font-medium' placeholder='Email' />
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-b border-[#adadad] p-5">
                    <span className='text-lg mitr'>Your
                        <span className="font-semibold"> Password</span>
                    </span>

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="name" className='text-sm font-medium'>Password*: </label>
                        <input type="text" className='border border-[#adadad] rounded-sm py-4 px-3 placeholder:text-sm w-full placeholder:text-black placeholder:font-medium' placeholder='Password' />
                    </div>

                </div>
                <div className="flex justify-end items-center gap-3 p-5">

                    <Link to='/register' className='px-8 py-3 hover:bg-transparent border border-transparent hover:border-black hover:text-black transition rounded-full bg-black text-white text-sm font-semibold'>
                        Create <i className="bi bi-arrow-right ml-2"></i>
                    </Link>

                </div>
            </div>
        </div>
    )
}
