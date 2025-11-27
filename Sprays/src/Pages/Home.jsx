import React from 'react'
import { HeroSection } from '../HomeComponents/HeroSection'
import { Dynamics } from '../HomeComponents/Dynamics'

import { Art } from '../HomeComponents/Art'
import { AllSprays } from '../HomeComponents/AllSprays'
import { Explore } from '../HomeComponents/Explore'
import { Cards } from '../HomeComponents/Cards'
import { Unique } from '../HomeComponents/Unique'
import { Features } from '../HomeComponents/Features'
import { Newsletter } from '../HomeComponents/Newsletter'
import { Innovation } from '../HomeComponents/Innovation'
import { Testimonials } from '../HomeComponents/Testimonials'

export const Home = () => {
    return (
        <>
            <HeroSection />
            <Dynamics />
            <AllSprays />
            <Art />
            <Explore />
            <Cards />
            <Unique />
            <Features />
            <Newsletter />
            <Innovation />
            <Testimonials />
        </>
    )
}
