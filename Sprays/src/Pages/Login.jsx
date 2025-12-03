import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="flex flex-col items-center gap-5 max-w-6xl mx-auto w-full py-15 max-sm:px-5">
            <div className="flex items-center gap-2 text-black">
                <span className='rounded-full px-3 py-2 text-sm border border-black '>
                    <i className="bi bi-arrow-left"></i>
                </span>
                <span className='text-sm'>Back to home</span>
            </div>
            <h1 className='text-5xl mitr font-medium max-sm:text-3xl'>Already Registered?</h1>
            <div className='border border-[#adadad]  w-1/2 flex flex-col max-sm:w-full'>
                <span className='text-lg font-semibold p-5'>Log In</span>
                <div className="flex flex-col gap-5 border-y border-[#adadad] p-5">
                    <span className="text-sm font-medium">I am a returning customer</span>
                    <div className="flex w-full gap-5 max-sm:flex-col">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name" className='text-sm font-medium'>E-mail*: </label>
                            <input type="text" className='border border-[#adadad] rounded-sm py-4 px-3 placeholder:text-sm w-full placeholder:text-black placeholder:font-medium' placeholder='Email' />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="name" className='text-sm font-medium'>E-mail*: </label>
                            <input type="text" className='border border-[#adadad] rounded-sm py-4 px-3 placeholder:text-sm w-full placeholder:text-black placeholder:font-medium' placeholder='Email' />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-5 border-b border-[#adadad] p-5 max-sm:flex-col">
                    <span className='font-medium text-red-600 underline text-sm'>
                        Forgot Password?
                    </span>
                    <button className='px-8 py-3 hover:bg-transparent border border-transparent hover:border-black hover:text-black transition rounded-full bg-black text-white text-sm font-semibold'>
                        Login <i className="bi bi-arrow-right ml-2"></i>
                    </button>

                </div>
                <div className="flex justify-center items-center gap-3 p-5 max-sm:flex-col">
                    <span className="text-sm font-medium">If you dont have account</span>
                    <Link to='/register' className='px-8 py-3 hover:bg-transparent border border-transparent hover:border-black hover:text-black transition rounded-full bg-black text-white text-sm font-semibold'>
                        Register <i className="bi bi-arrow-right ml-2"></i>
                    </Link>

                </div>
            </div>
        </div>
    )
}
