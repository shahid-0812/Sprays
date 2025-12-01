import React from 'react'
import { PageBanner } from '../Components/PageBanner'

export const Privacy = () => {
    return (
        <div className='flex flex-col '>
            <PageBanner
                pagename='Privacy Policy'
                span='There are significant differences between the EU data protection and US data privacy laws. These standards must be met not only by businesses operating in the EU but also by any organization that transfers personal information collected concerning citizens of the EU.'
            />
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 py-15 max-lg:px-5">
                <div className="flex flex-col gap-5">
                    <h1 className='mitr text-5xl'>Policy Privacy</h1>
                    <span className="font-medium">
                        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.
                    </span>
                    <span >
                        Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information”.When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className='mitr text-4xl'>How do we use your personal information?</h1>
                    <span className="font-medium">
                        We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
                    </span>
                    <ul className='list-disc flex flex-col gap-2 pl-4'>
                        <li>Communicate with you.</li>
                        <li>Screen our orders for potentional risk or fraud.</li>
                        <li>When in line with the preferences you have shared with us.</li>
                        <li>Provide you with information or advertising relating to our products or services.</li>
                    </ul>
                    <span>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).

                    </span>
                </div>

            </div>
        </div>
    )
}
