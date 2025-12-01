import React, { useState } from 'react'
import { PageBanner } from '../Components/PageBanner';

export const FAQs = () => {
    const [openAnswer, setOpenAnswer] = useState(null);
    const FAQ = [
        {
            id: 1,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 2,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 3,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 4,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 5,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 6,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 7,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 8,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 9,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 10,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 11,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
        {
            id: 12,
            que: "How to setup a page with custom fields?",
            ans: "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        },
    ];
    const toggleFAQ = (id) => {
        setOpenAnswer(openAnswer === id ? null : id);
    };
    return (
        <div className='flex flex-col'>
            <PageBanner pagename="Faq's" para="People will always seek help and advice. They are unwilling to pick up the phone, walk into a store, or wait hours (even minutes) for that information or insight to become accessible." />


            <div className="max-w-6xl mx-auto w-full py-15 flex flex-col gap-5 max-lg:px-5">
                <span className="text-5xl mitr">About shop</span>
                <div className="flex gap-6 flex-wrap items-start">
                    {
                        FAQ.map((faq) => (


                            <div key={faq.id} className="flex flex-col border rounded-xl border-[#e2e2e2] w-[31%] max-sm:w-full">
                                <div onClick={() => toggleFAQ(faq.id)} className="text-sm flex items-center justify-between p-4">
                                    <span className='font-semibold'>
                                        {faq.que}
                                    </span>
                                    <i className="bi bi-chevron-down"></i>
                                </div>
                                {
                                    openAnswer == faq.id && <span className='text-sm  p-3 border-t border-black/20'>
                                        {faq.ans}
                                    </span>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
